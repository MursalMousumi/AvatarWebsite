const express = require("express");
const mysql = require('mysql');
const app = express();
const session = require('express-session'); 
const bcrypt = require('bcrypt');
const saltRounds = 10;
const fetch = require('node-fetch');
const atla = require('@shah-a/atla-quotes');
const pool = dbConnection();

// credentials:  
//  username: admin
//  password: secret

//  username: aang
//  password: appa

app.set("view engine", "ejs");
app.use(express.static("public"));

app.set('trust proxy', 1)
app.use(session({
  secret: "top secret!",
  resave: false,
  saveUnitialized: true,
  cookie: { secure: true }
}));

//Needed to get values from form using POST method
app.use(express.urlencoded({extended:true}));

//routes
app.get('/', async (req, res) => {
  res.render('loginPage');
});

app.get('/home', isAuthenticated, (req, res) => {
  res.render('index');
});

app.get('/enemies', isAuthenticated, async (req, res) => {
  let sql = "SELECT * FROM users WHERE user = ?";
  let userData = await executeSQL(sql, [req.session.userID]);
  
  res.render("enemies",{"userData": userData});
});

app.get('/updateNation', async (req, res) => {
  res.render("updateNation");
});

app.get('/updateElement', async (req, res) => {
  res.render('updateElement');
});

app.get('/updateCharact', async (req, res) => {
  res.render('updateCharact');
});

app.get("/adminPage", isAuthenticated, (req, res) => {
  res.render("adminPage");
});

app.get('/logout', isAuthenticated, (req, res) => {
  req.session.destroy();
  res.redirect("/"); 
});

app.get('/user/new',(req,res) => {
  res.render('newUser');
});

app.post('/login', async (req, res) => {
  let username = req.body.username; 
  let password = req.body.password;

  let hashedPwd= ""

  let sql = "SELECT * FROM users WHERE username = ?"; 
  let rows = await executeSQL(sql, [username]); 

  if (rows.length > 0) {
    hashedPwd = rows[0].password;
  }

  let passwordMatch = await bcrypt.compare(password, hashedPwd);
  console.log("passwordMatch:" + passwordMatch); 

  if(username == 'admin' && password == 'secret'){
    req.session.authenticated = true
    res.render("adminPage")
  }

  else if(passwordMatch){
    req.session.authenticated = true
    
    sql = `SELECT user FROM users WHERE username = "${username}"`;
      let data = await executeSQL(sql);
      console.log("login userID: " + data[0].user );
      req.session.userID = data[0].user;
    
    res.render("index") 
  }
  else{
    res.render("loginPage", {"loginError":true});
  }
});

app.post('/user/new', async (req, res) => {
   
   let username = req.body.username;
   let password = req.body.password;
   let element = req.body.element;
   let nation = req.body.nation; 
   let charact = req.body.charact;
  
    bcrypt.hash(password, saltRounds, async function(err, hash) {
    // Store hash in your password DB.
      password = hash;
      console.log(password);
      let sql = `INSERT INTO users (username, password, element, nation, charact) VALUES (?, ?, ?, ?, ? )`;

      let params = [username, password, element, nation, charact];
      let rows = await executeSQL(sql,params); 
      sql = `SELECT user FROM users WHERE username = "${username}"`;
      let userID = await executeSQL(sql);
    });

  res.render('loginPage');
});

app.get('/profile', async (req, res) => {
 
  let userID = req.session.userID;

   let sql = `SELECT username, element, nation, charact
              FROM users
              WHERE user = ${userID}`;

   let userData = await executeSQL(sql);     
   console.log("profile data" + userData);
   
   res.render('profile', {"userData":userData});
  
});

app.post('/nation/edit', async (req, res) => {

  let val = req.body.newNation;
  let username = req.body.username;

  let sql = `UPDATE users
            SET nation = ?
            WHERE username = ?`;
  let params = [val, username];
  let rows = await executeSQL(sql, params);

  res.render('updateNation', {"nationInfo":rows, "message":"Nation Updated!"});
  
});

app.post('/charact/edit', async (req, res) => {
  let val = req.body.newCharact;
  let username = req.body.username;

  let sql = `UPDATE users
            SET charact = ?
            WHERE username = ?`;
  let params = [val, username];
  let rows = await executeSQL(sql, params);

  res.render('updateCharact', {"charactInfo":rows, "message":"Character Updated!"});
  
});

app.post('/element/edit', async (req, res) => {

  let val = req.body.newElement;
  let username = req.body.username;

  let sql = `UPDATE users
            SET element = ?
            WHERE username = ?`;
  let params = [val, username];
  let rows = await executeSQL(sql, params);

  res.render('updateElement', {"elementInfo":rows, "message":"Element Updated!"});
  
});

app.get('/elements', async (req, res) => {

   let sql = `SELECT name, fact, makeup, state
              FROM elements
              ORDER BY name`;

   let elements = await executeSQL(sql);           
   res.render('elements', {"elements":elements});
});

app.get('/facts', async (req, res) => {

   let sql = `SELECT name, fact
              FROM facts
              ORDER BY name`;

   let facts = await executeSQL(sql);           
   res.render('facts', {"facts":facts});
});

async function executeSQL(sql, params){
  return new Promise (function (resolve, reject) {
    pool.query(sql, params, function (err, rows, fields) {
      if (err) throw err;
      resolve(rows);
    });
  });
}

function isAuthenticated(req,res,next){
  if (!req.session.authenticated) {
    res.redirect("/"); 
  } else {
    next(); 
  }
}

function dbConnection(){
  const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "pxukqohrckdfo4ty.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "gjtsmnmr48l3fzlb",
    password: "fqd6vxt42bk0awaa",
    database: "tdgdit1w34j1i3lz"
  }); 
  return pool;
} 

app.listen(3000, () => {
  console.log("Expresss server running...")
})