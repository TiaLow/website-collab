'use strict'

var today = new Date();
var hourNow = today.getHours(); 
var greeting;

if (hourNow > 18) {
  greeting = 'evening';
} else if (hourNow > 12) {
  greeting = 'afternoon';
} else if (hourNow >= 0) {
  greeting = 'morning';
} else {
  greeting = 'anytime';
}

document.write('<h3>' + greeting + '</h3>');