// Created by: Katie
// Created on: May 2022
// This file contains the JS functions for index.html

//This function will produce the sum of two numbers through repeat addition using a FOR loop.
function sumClicked() {
  //getting input from user.
  let firstNum = parseInt(document.getElementById('first-number').value);
  let secondNum = parseInt(document.getElementById('second-number').value);
  //initialization of the sum. It is now 0.
  let sum = 0
  //looping the function using a FOR loop until the counter reaches the second number
  for (let counter = 0; counter < secondNum; counter++) {
    sum = sum + firstNum
  }
  //display information back to user.
  document.getElementById('calculated-sum').innerHTML = "Oh wow! You've reached the sum!! The product of the sum is " + sum;
}