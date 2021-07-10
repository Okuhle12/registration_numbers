//for my add button 
var buttonRegistrationElem = document.querySelector(".addButton");

//for my show button
var buttonShowElem = document.querySelector(".showButton");

//for my text box
var textElem = document.querySelector(".box");

//for displaying my registration numbers
var displaySection = document.querySelector(".displaySectionRegistration");


//for checking my buttons
var checkedGreetBtn = document.querySelector("input[name='city']:checked")

//for error messages
var errorMessagesElem = document.querySelector(".errors");

var instanceRegistration = registrationNumbersFactory();
var regNumbers;
if (localStorage['plateNumber']){

  regNumbers = JSON.parse(localStorage.getItem('plateNumber'));

  var regNum = instanceRegistration.setRegNum(regNumbers)

  for(var i = 0; i < regNumbers.length; i++){

    var displayPlates = document.createElement("button");

    displayPlates.classList.add("plates")
    displayPlates.innerText = regNumbers[i];
  
    document.querySelector(".displayRegistration").appendChild(displayPlates);

  }
}



//made changes here
function registrationTop() {

  if (textElem.value == "") {

    errorMessagesElem.innerHTML = "Please enter an registration number";
    errorMessagesElem.style.color = "red"

    setTimeout(function () {
      errorMessagesElem.innerHTML = "";
      errorMessagesElem.style.color = "black";
    }, 2000);
    return;

  }

  var registration = instanceRegistration.regi(textElem.value);

  if (registration == "Invalid registration number") {

    errorMessagesElem.innerHTML = registration;
    errorMessagesElem.style.color = "red"
    setTimeout(function () {
      errorMessagesElem.innerHTML = "";
      errorMessagesElem.style.color = "black"
    }, 2000)
    return;
  }

  else if (registration == "registration number already exist") {
    errorMessagesElem.innerHTML = registration;
    errorMessagesElem.style.color = "red"
    setTimeout(function () {
      errorMessagesElem.innerHTML = "";
      errorMessagesElem.style.color = "black"
    }, 2000)
    return;
  }
  var displayPlates = document.createElement("button");

  displayPlates.classList.add("plates")
  displayPlates.innerText = registration;

  document.querySelector(".displayRegistration").appendChild(displayPlates);

  // localStorage["plate"] = JSON.stringify(instanceRegistration.pushRegi());
  localStorage.setItem('plateNumber', JSON.stringify(instanceRegistration.getRegi()));
}

function filtering() {
  // var displaySection = document.querySelector(".displaySectionRegistration");
  var existingReg = document.getElementsByClassName('plates');

  var checkedGreetBtn = document.querySelector("input[name='city']:checked")
  var town = checkedGreetBtn.value

  if (existingReg.length) {

    while (existingReg.length > 0) {
      existingReg[0].remove('plates');
    }
  }

  var filterRegNum = instanceRegistration.filterReg(town)

  if(filterRegNum.length == 0){
    var displayPlates = document.createElement("p");

    displayPlates.classList.add("plates")
    displayPlates.innerText = "Registration Not Added";
    displayPlates.style.color = "red";
    displayPlates.style.backgroundColor = "white"
    displayPlates.style.textAlign = "center"
    displayPlates.style.fontSize = "1.5rem"
  
    document.querySelector(".displayRegistration").appendChild(displayPlates);

    setTimeout(function () {
      displayPlates.innerText = "";
      displayPlates.style.color = "black"
    }, 2000)
    return;

  }


  for (var i = 0; i < filterRegNum.length; i++) {

    var displayPlates = document.createElement("button");

    displayPlates.classList.add("plates")
    displayPlates.innerText = filterRegNum[i];

    document.querySelector(".displayRegistration").appendChild(displayPlates);

  }

}
buttonShowElem.addEventListener("click", filtering)
buttonRegistrationElem.addEventListener("click", registrationTop);
document.querySelector(".showAll").addEventListener("click", function () {

  var existingReg = document.getElementsByClassName('plates');
  if (existingReg.length) {

    while (existingReg.length > 0) {
      existingReg[0].remove('plates');
    }
  }

  var allTowns = instanceRegistration.getRegi()
  

  for(var i = 0; i < allTowns.length; i++){

    var displayPlates = document.createElement("button");

    displayPlates.classList.add("plates")
    displayPlates.innerText = allTowns[i];
  
    document.querySelector(".displayRegistration").appendChild(displayPlates);

  }

})

//Show all town 







