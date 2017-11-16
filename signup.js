'use strict';
var signupFormstorage = [];
console.log(signupFormstorage + ':Sign Up Form Input');
function OrgProfile(org, email, phone, location, newClass, description) {
  this.org = org;
  this.email = email;
  this.phone = phone;
  this.location = location;
  this.orgclass = newClass;
  this.description = description;
  signupFormstorage.push(this);
  console.log(signupFormstorage + ': org profile input');
}
if (localStorage.formStorage) {
  var newsignupFormstorage = JSON.parse(localStorage.formStorage);

  for (var j = 0; j < formStorage.length; j++) {
    signupFormstorage[j] = newsignupFormstorage[j];

  }

}
function signUpstorage(event) {

  event.preventDefault();

  var newOrg = event.target.org.value;
  console.log(newOrg + ': newOrg');

  var newEmail = event.target.email.value;
  console.log(newEmail + ': newEmail');

  var newPhone = event.target.phone.value;

  var newLocation = event.target.location.value;

  var newClass = event.target.orgclass.value;

  // var newImage : need to figure out how to do image to local storage

  var newDescription = event.target.description.value;

  new OrgProfile(newOrg, newEmail, newPhone, newLocation, newClass, newDescription);

  event.target.org.value = null;
  event.target.email.value = null;
  event.target.phone.value = null;
  event.target.location.value = null;
  event.target.orgclass.value = null;
  event.target.description.value = null;
  localStorage.formStorage = JSON.stringify(signupFormstorage);
}
document.getElementById('signupForm').addEventListener('submit', signUpstorage);
