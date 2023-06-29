$(document).ready(function() {
  var nation= $("#nation").html()
  nation = $.trim(nation);
  console.log(nation);

  if(nation == "Fire Nation"){
    $("#profile").css('background-image', 'url("/img/fire.jpg")');

  }else if(nation == "Water Tribe"){
    $("#profile").css('background-image', 'url("/img/water.jpg")');
  }else if(nation == "Earth Kingdom"){
    $("#profile").css('background-image', 'url("/img/earth.jpg")');
  }else if(nation == "Air Nomads"){
    $("#profile").css('background-image', 'url("/img/air.jpg")');
  }
  

  });