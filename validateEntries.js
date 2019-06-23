/*
Name: Benjamin Cruse
Date Created: 06/18/2019
Most recent revision:
*/
function validateEntries(){
  var name = document.forms["feedback"]["name"].value;
  var email = document.forms["feedback"]["email"].value;
  var phone = document.forms["feedback"]["phone"].value;
  if(name == ""){
    alert("Name must be filled out");
    return false;
  }
  if (email == "") {
    alert("Email must be filled out");
  }
  if (phone == "") {
    alert("Phone must be filled out");
    return false;
  }
  if (reason == "") {
    alert("Please select a reason for your Inquary");
    return false;
  }
  if (document.getElementById("choice1").checked == false && document.getElementById("choice2").checked == false) {
    alert("Please select No or Yes if you've been to the restaurant");
    return false;
  }
  if (document.getElementById("monday").checked == false && document.getElementById("tuesday").checked == false && document.getElementById("wednesday").checked == false && document.getElementById("thursday").checked == false && document.getElementById("friday").checked == false) {
    alert("Please select a day");
    return false;
  }
  alert("Form entered succesfully");
  return false;
}
