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

function toggleNav() {
  if ($('#nav-icon3').hasClass("open")) {
    document.getElementById("mySidenav").style.width = "0";
  } else {
    document.getElementById("mySidenav").style.width = "500px";
  }
  $('#nav-icon3').toggleClass('open');
  $('#menu').toggleClass('open');
}

  function colorReplace(findHexColor, replaceWith) {
    // Convert rgb color strings to hex
    function rgb2hex(rgb) {
      if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    // Select and run a map function on every tag
    $('*').map(function(i, el) {
      // Get the computed styles of each tag
      var styles = window.getComputedStyle(el);

      // Go through each computed style and search for "color"
      Object.keys(styles).reduce(function(acc, k) {
        var name = styles[k];
        var value = styles.getPropertyValue(name);
        if (value !== null && name.indexOf("color") >= 0) {
          // Convert the rgb color to hex and compare with the target color
          if (value.indexOf("rgb(") >= 0 && rgb2hex(value) === findHexColor) {
            // Replace the color on this found color attribute
            $(el).css(name, replaceWith);
          }
        }
      });
    });
  }

 function toggleLights() {
   // colorReplace("#1D1E21", "#F9FBFF");
   // colorReplace("#F9FBFF", "#1D1E21");
   $('h1, h2, h3, h4, p, .logo-font, #nav-icon3 span').toggleClass('back');

   $('.section, body, .fire, .sidenav, .sidenav a').toggleClass('light');
   console.log("hello");
 }
