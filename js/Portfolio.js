// Navigation Js   
// close all except about me id tac
$("#AboutMe").on("click", function() {
    $("#portfolioContent").css("display", "none")
    $("#contactContent").css("display", "none")
    $("#videoCard").css("display", "none")
    $("#workHistory").css("display", "none")
    $("#musicCard").css("display", "none")
    $("#workhistory").css("display", "none")
    $("#AboutMeContent").css("display", "initial")
});

// close cards except portfolio card
$(".portfolioButton").on("click", function() {
    $("#portfolioContent").css("display", "initial")
    $("#AboutMeContent").css("display", "none")
    $("#contactContent").css("display", "none")
    $("#videoCard").css("display", "none")
    $("#workhistory").css("display", "none")
    $("#musicCard").css("display", "none")
});

// close cards except contact card
$(".contact").on("click", function() {
    $("#AboutMeContent").css("display", "none")
    $("#portfolioContent").css("display", "none")
    $("#workhistory").css("display", "none")
    $("#videoCard").css("display", "none")
    $("#musicCard").css("display", "none")
    $("#contactContent").css("display", "initial")
});


// Portfolio cards hide here
// show skydiving (music not needed not possible)
$(".videoLink1").on("click", function() {
    $("#AboutMeContent").css("display", "none")
    $("#portfolioContent").css("display", "none")
    $("#workhistory").css("display", "none")
    $("#videoCard").css("display", "initial")
});


// show Working History Highcharts Example
$(".timelineshow").on("click", function() {
    $("#AboutMeContent").css("display", "none")
    $("#contactContent").css("display", "none")
    $("#portfolioContent").css("display", "none")
    $("#workhistory").css("display", "initial")
});

  // music player hide/show on id clicks
  $(".showplayer").on("click", function() {
    $("#wrapper").css("display", "block")
    $("#plainfooter").css("display", "none")
    $("#portfolioContent").css("display", "none")
    $("#musicCard").css("display", "initial")

});

// Tooltips jquery
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

//  hides music player
$("#hidePlayer").on("click", function() {
    $("#wrapper").css("display", "none")
    $("#plainfooter").css("display", "initial")
    
});

// PLayer function
document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
var player;

// music player function starts here
function startplayer() {
 player = document.getElementById('music_player');
//  hide default controls
 player.controls = false;
}

// play
function play_aud() 
{
 player.play();
} 
// pause
function pause_aud() 
{
 player.pause();
}
// stop
function stop_aud() 
{
 player.pause();
 player.currentTime = 0;
}
// change the vol
function change_vol()
{
 player.volume=document.getElementById("change_vol").value;
}
 