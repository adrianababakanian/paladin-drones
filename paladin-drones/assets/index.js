/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
    //document.getElementById("main").style.marginRight = "500px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("main").style.marginRight = "0";
}

$(document).ready(function(){
  $('#nav-icon3').click(function(){
    if ($('#nav-icon3').hasClass("open")) {
      document.getElementById("mySidenav").style.width = "0";
    } else {
      document.getElementById("mySidenav").style.width = "500px";
    }
    $(this).toggleClass('open');
  });
});
