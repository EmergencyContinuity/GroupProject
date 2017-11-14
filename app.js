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
var allOrganizations = [];
console.log(allOrganizations);
if(localStorage.newClick){
  var newClicks = JSON.parse(localStorage.newClick);
  for(var i = 0; i < newClicks.length; i++){
    allOrganizations[i] = newClicks[i];
    createDiv();
  }
}
function Organization(name, address, need) {
  this.name = name;
  this.address = address;
  this.need = need;
  this.list = [];
  allOrganizations.push(this);
}
function addOrganization(event) {
  event.preventDefault();
  console.log(event.target[0]);
  var newName = event.target.name.value;
  var newAddress = event.target.address.value;
  var newNeed = event.target.need.value;
  // var newList = event.target.list.value;
  new Organization(newName, newAddress, newNeed);
  // papa.innerHTML = ' ';
  event.target.name.value = null;
  event.target.address.value = null;
  event.target.need.value = null;
  // event.target.list.value = null;
  localStorage.newClick = JSON.stringify(allOrganizations);
  createDiv();
}
function createDiv() {
  var papa = document.getElementById('papa');
  for(var i = 0; i < allOrganizations.length; i++) {
    var div = document.createElement('div');
    div.setAttribute('class', 'baby');
    var babyButton = document.createElement('button');
    babyButton.setAttribute('id', 'babyButton');
    babyButton.textContent = 'I want to Help!';
    div.appendChild(babyButton);
    var pName = document.createElement('p');
    pName.setAttribute('id', 'pName');
    pName.textContent = 'ORGANIZATION: ' + allOrganizations[i].name;
    div.appendChild(pName);
    var pAddress = document.createElement('p');
    pAddress.setAttribute('id', 'pAddress');
    pAddress.textContent = 'ADDRESS: ' + allOrganizations[i].address;
    div.appendChild(pAddress);
    var pNeed = document.createElement('p');
    pNeed.setAttribute('id', 'pNeed');
    pNeed.textContent = 'NEED: ' + allOrganizations[i].need;
    div.appendChild(pNeed);
    // for(var orgs = 0; orgs < allOrganizations.length; orgs++) {

    var storage = JSON.parse(localStorage.newClick);
  }
  papa.appendChild(div);
}
document.getElementById('resourceRequest').addEventListener('submit', addOrganization);
// var addOrg = document.getElementById('button');//WILL FORM HAVE A CLASS VS ID?
// addOrganization();
