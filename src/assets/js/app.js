import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

window.onscroll = function() {myFunction()};

var header = document.getElementById("example-animated-menu");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).ready( function(){

  $('body').scroll(function() {
    alert();
    var x = $(this).scrollTop();
  
    $(this).css('background-position', '0% ' + parseInt(-x / 10) + 'px');
  });
});