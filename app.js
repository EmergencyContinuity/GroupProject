'use strict' ;
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

var allOrganizations = [];

function Organization(name, address) {
  this.name = name;
  this.address = address;
  allOrganizations.push(this);
};

function addOrganization() {
  event.preventDefault();
  var newName = event.target.name.value;
  var newAddress = event.target.address.value;
  new addOrganization(newName, newAddress);
  msgBoard.innerHTML = ' ';
  event.target.name.value = null;
  event.target.address.value = null;
}

for(var row = 0; row < allOrganizations.length; row++) {
  var titleRow = document.createElement('tr');
  var orgTitle = document.createElement('td');
  orgTitle.textContent = allOrganizations[row].name;
  msgBoard.appendChild(titleRow);

 var addressRow = document.createElement('tr');
  var orgAddress = document.createElement('td');
  orgAddress.textContent = allOrganizations[row].address;
  titleRow.appendChild(addressRow);
  msgBoard.appendChild(titleRow);
}
addOrganization();

var addOrg = document.getElementById('_____');//WILL FORM HAVE A CLASS VS ID?
addOrganization.addEventListener('submit', addOrganization);
