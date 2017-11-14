'use strict' ;
// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
// debugger;
var allVolunteers = [];
console.log(allVolunteers);
if(localStorage.newVol){
  var newVol = JSON.parse(localStorage.newVol);
  for(var i = 0; i < newVol.length; i++){
    allVolunteers[i] = newVol[i];
    createDiv();
  }
}
function Volunteer(name, address, donation) {
  this.name = name;
  this.address = address;
  this.donation = donation;
  // this.list = [];
  allVolunteers.push(this);
}
function addVolunteer(event) {
  event.preventDefault();
  console.log(event.target[0]);
  var newName = event.target.name.value;
  var newAddress = event.target.address.value;
  var newDonation = event.target.donation.value;
  // var newList = event.target.list.value;
  new Volunteer(newName, newAddress, newDonation);
  // papa.innerHTML = ' ';
  event.target.name.value = null;
  event.target.address.value = null;
  event.target.donation.value = null;
  // event.target.list.value = null;
  localStorage.newVol = JSON.stringify(allVolunteers);
  createDiv();
}
function createDiv() {
  var papa = document.getElementById('papa');
  for(var i = 0; i < allVolunteers.length; i++) {
    var div = document.createElement('div');
    div.setAttribute('class', 'baby');
    var babyButton = document.createElement('button');
    babyButton.setAttribute('id', 'babyButton');
    babyButton.textContent = 'I want to Help!';
    div.appendChild(babyButton);
    var pName = document.createElement('p');
    pName.setAttribute('id', 'pName');
    pName.textContent = 'Volunteer: ' + allVolunteers[i].name;
    div.appendChild(pName);
    var pAddress = document.createElement('p');
    pAddress.setAttribute('id', 'pAddress');
    pAddress.textContent = 'ADDRESS: ' + allVolunteers[i].address;
    div.appendChild(pAddress);
    var pDonation = document.createElement('p');
    pDonation.setAttribute('id', 'pDonation');
    pDonation.textContent = 'Donation: ' + allVolunteers[i].donation;
    div.appendChild(pDonation);
    // for(var orgs = 0; orgs < allOrganizations.length; orgs++) {

    var volStorage = JSON.parse(localStorage.newVol);
  }
  papa.appendChild(div);
}
document.getElementById('resourceRequest').addEventListener('submit', addVolunteer);
// var addOrg = document.getElementById('button');//WILL FORM HAVE A CLASS VS ID?
// addOrganization();
