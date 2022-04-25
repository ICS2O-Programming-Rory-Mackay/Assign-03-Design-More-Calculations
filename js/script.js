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
}

/**
 * This function calculates how much music you listen to in a year
 */
function calculateYear () {
  // input
  let kilos = parseFloat(document.getElementById('inputKilos').value)

  // process
  let pounds = kilos * 2.20462262

  // output
  document.getElementById('answers2').innerHTML = 'The amount of kilos in pounds is ' + pounds.toFixed(2) + ' pounds'
}