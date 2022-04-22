// Copyright Rory Mackay
// Created by: Rory Mackay
// Date: March 2022
// This file contains the JS functions for the index.html file

'use strict'
/**
 * This function how much music you listen to in a week
 */
function calculateweek () {
  // input
  let pounds = parseFloat(document.getElementById('inputPounds').value)

  // process
  let kilos = pounds / 2.20462262

  // output
  document.getElementById('answers').innerHTML = 'The amount of pounds in kilos is ' + kilos.toFixed(2) + ' kg'
}

/**
 * This function calculates how much music you listen to in a year
 */
function calculateyear () {
  // input
  let kilos = parseFloat(document.getElementById('inputKilos').value)

  // process
  let pounds = kilos * 2.20462262

  // output
  document.getElementById('answers2').innerHTML = 'The amount of kilos in pounds is ' + pounds.toFixed(2) + ' pounds'
}