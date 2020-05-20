'use strict'

var today = new Date();
var hourNow = today.getHours(); 
var greeting;

if (hourNow > 18) {
  greeting = 'the evening';
} else if (hourNow > 12) {
  greeting = 'the afternoon';
} else if (hourNow >= 0) {
  greeting = 'the morning';
} else {
  greeting = 'anytime';
}

document.write('<h3>' + greeting + '</h3>');