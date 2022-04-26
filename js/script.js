// Copyright Rory Mackay
// Created by: Rory Mackay
// Date: March 2022
// This file contains the JS functions for the index.html file

'use strict'
/**
 * This function how much music you listen to in a week
 */
function calculateWeek () {
  // input
  let minutes = parseFloat(document.getElementById('inputMinutes').value)

  // process
  let week = minutes / 60 * 7
  let result;
  
  //Dividing as per the weekly music time
  if (week < 18.00) {
    result = "<br>Hmm not too much!";
  } else if (week >= 18 && week < 24) {
    result = "<br> You're about average!";
  } else if (week >= 24 && week < 168) {
    result = "<br> Wow, that's alot!";
  } else {
    result = "<br> Thats impossible ... there are 168 hours in a week!";
  }

  // output
  document.getElementById('answers').innerHTML = 'In one week, you listen to ' + week.toFixed(2) + ' hours of music' + result
}

/**
 * This function calculates how much music you listen to in a year
 */
function calculateYear () {
  // input
  let years = parseFloat(document.getElementById('inputAge').value)

  // input
  let minutes = parseFloat(document.getElementById('inputMinutes').value)
  
  // process
  let lifetime = (minutes / 60) * 365 * years
  let result;
  
  //Dividing as per the lifetime music time
  if (lifetime < 4000) {
    result = "<br>Not that much. You probably aren't very old.";
  } else if (lifetime >= 4000 && lifetime < 10000) {
    result = "<br> You're about average!";
  } else if (lifetime >= 10000 && lifetime < 40000) {
    result = "<br> Wow, that's alot!";
  } else {
    result = "<br> Thats craaazy! You must be immortal or something.";
  }
  
  // output
  document.getElementById('answers2').innerHTML = 'At this pace, you have listened to ' + lifetime.toFixed(2) + ' hours of music in your lifetime' + result
}