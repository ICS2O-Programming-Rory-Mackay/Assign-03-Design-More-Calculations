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
  let week = (minutes / 60) * 7

  // output
  document.getElementById('answers').innerHTML = 'In one week, you listen to ' + week.toFixed(2) + ' hours of music'

  //Dividing as per the weekly music time
  if (week < 3.00) {
    result = "<br>Hmm not too much!";
  } else if (week >= 3.00 && week < 24.94) {
    result = "<br> You're about average!";
  } else if (4.00 < week) {
    result = "<br> Wow, that's alot!";
  } else if (168 < week) {
    result = "<br> Thats impossible ... there are 168 hours in a week!";
  } else {
    result = "<br> Invalid Answers"
  } 
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

  // output
  document.getElementById('answers2').innerHTML = 'At this pace, you have listened to ' + lifetime.toFixed(2) + ' hours of music in your lifetime'
}