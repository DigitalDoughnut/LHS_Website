$(document).ready(function(){
$("img#Tablet").addClass("loadPosition");
/*$("img#Tablet.positionOne").css({'left': '0%', 'top': '10%', 'width': '24%'}).removeClass('positionOne');
$("img#Tablet.takePosition").css({'left': '-131%', 'top': '10%', 'width': '24%'}) */
//$("img#Tablet").delay(200).animate({'left': ['0%' , 'linear'], 'top': ['10%' , 'linear'], 'width': ['24%' , 'linear']});
$("img#Mobile").css({'left': '83%', 'top': '23%', 'width': '14.5%'});
//$("img#Mobile").delay(500).animate({'left': ['83%' , 'linear'], 'top': ['23%' , 'linear'], 'width': ['14.5%' , 'linear']});
$("img#Tablet2").css({'left': '31%', 'top': '39.5%', 'width': '9.5%'});
$("img#Mobile2").css({'left': '63%', 'top': '46%', 'width': '4.5%'});

$("#Thumb3D").mouseover(function(){
    $("#Thumb3D").attr("src","second.jpg");
});

$("#dcTrigger").mouseover(function(){
    $("#dcTrigger").css("background-color: yellow;");
});

$( "#Thumb3D" ).hover(
    function() {
      $( this ).attr("src","img/3DModelTexThumbOver.jpg");
    }, function() {
      $( this ).attr("src","img/3DModelTexThumb.jpg");
    }
  );

  $( "#ThumbAlice" ).hover(
    function() {
      $( this ).attr("src","img/AliceThumbWideOver.jpg");
    }, function() {
      $( this ).attr("src","img/AliceThumbWide.jpg");
    }
  );

  $( "#ThumbElf" ).hover(
    function() {
      $( this ).attr("src","img/elfPicThumbOver.jpg");
    }, function() {
      $( this ).attr("src","img/elfPicThumb.jpg");
    }
  );



var controller = new ScrollMagic.Controller();

var designCodeScene = new ScrollMagic.Scene ({
    triggerElement: '#designCode'
})
.setClassToggle('#designCode' , 'takePosition')
.addIndicators()
.addTo(controller);


});
