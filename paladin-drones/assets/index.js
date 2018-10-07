function toggleNav() {
  if ($('#nav-icon3').hasClass("open")) {
    // document.getElementById("mySidenav").style.width = "0";
    $(".sidenav").removeClass('expanded');
    console.log("is open");
  } else {
    $(".sidenav").addClass('expanded');
    console.log("not open");
  }
  $('#nav-icon3').toggleClass('open');
  $('#menu').toggleClass('open');
}

 function toggleLights() {
   $('h1, h2, h3, h4, p, .logo-font, #nav-icon3 span').toggleClass('back');

   $('.section, body, .container, .fire, .sidenav, .sidenav a, .section::-webkit-scrollbar-thumb, .placeholder, .gray, .member, .column, .header-wrap, #drone_dark, #drone_light').toggleClass('light');
 }

 function testing() {
   console.log($(this))
   var section = $(this).attr('href').substr(1);
   console.log(section);
   $('#mission').toggleClass('show');
 }

 function closeSide() {
   if ($(window).width() < 700) {
     $(".sidenav").removeClass('expanded');
     $('#nav-icon3').toggleClass('open');
   }
 }

 // $(document).ready(function(){
 //   $section = ($(this).attr("href"));
 //   $($section).toggleClass('show');
 //   $("#m_link").click(function(){
 //        $('#mission').addClass('show');
 //        $('#software').removeClass('show');
 //        $('#team').removeClass('show');
 //        $('#contact').removeClass('show');
 //        $('#press').removeClass('show');
 //    });
 //    $("#s_link").click(function(){
 //      $('#software').addClass('show');
 //      $('#mission').removeClass('show');
 //      $('#team').removeClass('show');
 //      $('#contact').removeClass('show');
 //      $('#press').removeClass('show');
 //     });
 //     $("#t_link").click(function(){
 //       $('#team').addClass('show');
 //       $('#mission').removeClass('show');
 //       $('#software').removeClass('show');
 //       $('#contact').removeClass('show');
 //       $('#press').removeClass('show');
 //      });
 //    $("#c_link").click(function(){
 //      $('#contact').addClass('show');
 //      $('#mission').removeClass('show');
 //      $('#software').removeClass('show');
 //      $('#team').removeClass('show');
 //      $('#press').removeClass('show');
 //     });
 //     $("#p_link").click(function(){
 //       $('#press').addClass('show');
 //       $('#mission').removeClass('show');
 //       $('#software').removeClass('show');
 //       $('#team').removeClass('show');
 //       $('#contact').removeClass('show');
 //      });
 // });
