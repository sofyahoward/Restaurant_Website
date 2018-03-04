$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('.navbar').addClass("changeColor")
      }
      if ($(this).scrollTop() < 50) {
         $(".navbar").removeClass("changeColor")
      }
   });
});
function initMap() {

  //map options
  var options = {
    zoom:12,
    center:{lat:40.7666,lng:-73.9677}
  }

//new map
  var map = new google.maps.Map(document.getElementById("map"), options);

//add marker
var marker = new google.maps.Marker({
  position:{lat:40.7666,lng:-73.9677},
  map:map
});
}
