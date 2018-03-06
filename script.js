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

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

$(".filter button").on("click", function () {
  var value = $(this).attr("data-name");
  $grid.isotope({
    filter: value
  });
})
function flip() {
    $('.card').toggleClass('flipped');
}
