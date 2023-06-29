$(document).ready(function() {

$(document).on("click", "a.nameTags", displayEnemyInfo);
$("#randCharButton").on("click", randCharacter)

var character= $("#character").html();
character = $.trim(character);




/*
async function characters(){

  let avatarUrl = `https://last-airbender-apig.herokuapp.com/api/v1/characters`;

  let avatarData = await fetchData(avatarUrl);
  
  //$("#characters").html("Character: " + avatarData.);

}
*/
async function enemies(){
  let url="";
  
  url = `https://last-airbender-api.herokuapp.com/api/v1/characters?enemies=${character}`;
  let enemiesAPI = $.trim(url);
  console.log(enemiesAPI);

  let enemiesData = await fetchData(enemiesAPI);
  //console.log(enemiesData)

  let charactUrl = `https://last-airbender-api.herokuapp.com/api/v1/characters?name=${character}`;
  let charactData = await fetchData(charactUrl);
//  console.log(charactData);

  $("#character").append(`<img src="${charactData[0].photoUrl}" width ="250px" class="p-3">`);
  
  
  for(let i=0; i < enemiesData.length ; i++){

    $("#enemyNames").append(`<a  href="#" style="color: rgb(163, 28, 28);" class="nameTags" id="${enemiesData[i]._id}"><b>${enemiesData[i].name}</b></a> <br>`)
    //console.log(enemiesData[i]._id);

  }

}

async function randCharacter(){
  //$("[data-bs-toggle='popover']").popover('hide');
  $("[data-bs-toggle='popover']").popover('hide');

  let url = "https://last-airbender-api.herokuapp.com/api/v1/characters/random";
  let randomCharData = await fetchData(url);



  new bootstrap.Popover(document.querySelector('[data-bs-toggle]'), {
  placement: 'bottom',
  trigger: 'focus',
  html: true
})

  let popover_instance = bootstrap.Popover.getInstance(document.querySelector('[data-bs-toggle]'))
 let content_template = `<div class="media"><img src="${randomCharData[0].photoUrl}" width = "250px" class="mr-3" ><div class="media-body"><h5 class="media-heading">${randomCharData[0].name}</h5><p><b>Affiliation: </b>${randomCharData[0].affiliation}</p></div></div>`;
  popover_instance._config.content = content_template;


  $("[data-bs-toggle='popover']").popover('hide');



  /*


      $('[data-toggle="popover"]').popover({
        placement : 'top',
		    trigger : 'click',
        html : true,
        content : `<div class="media"><img src="${randomCharData[0].photoUrl}" width = "250px" class="mr-3" ><div class="media-body"><h5 class="media-heading">${randomCharData[0].name}</h5><p>Excellent Bootstrap popover! I really love it.</p></div></div>`;
        
    });
  
  console.log("rand char : " + randomCharData[0].name);
  */
}

enemies();


async function fetchData(url){
  let response = await fetch(url);
  let data = await response.json();
  return data;
}



async function displayEnemyInfo(){
 var myModal = new bootstrap.Modal(document.getElementById('enemyModal'));
 myModal.show();
 $("#enemyInfo").html("");

 let enemyId = $(this).attr("id");
 //alert(enemyId);
 let url = `https://last-airbender-api.herokuapp.com/api/v1/characters/${enemyId}`;
 let response = await fetch(url);
 let data = await response.json();
 console.log(data);
 $(".modal-title").html(`<u><b>${data.name}</b></u>`);
 $("#enemyInfo").append(`<img src="${data.photoUrl}" width ="250px" class="mx-auto d-block"> <br>`);
 $("#enemyInfo").append(`<b>Profession: </b>"${data.profession}"<hr>`);
 $("#enemyInfo").append(`<b>Affiliation: </b>"${data.affiliation}"<hr>`);
  $("#enemyInfo").append(`<b>Gender: </b>"${data.gender}"<hr>`);
  $("#enemyInfo").append(`<b>Hair color: </b>"${data.hair}"`);

 


}




});