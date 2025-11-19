// Side navigation
function w3_open() {
  var x = document.getElementById("mySidebar");
  x.style.width = "100%";
  x.style.fontSize = "40px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// Tabs
function openC(evt, termName) {
  var i;
  var x = document.getElementsByClassName("term");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var activebtn = document.getElementsByClassName("testbtn");
  for (i = 0; i < x.length; i++) {
    activebtn[i].className = activebtn[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(termName).style.display = "block";
  evt.currentTarget.className += " w3-dark-grey";
}

var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();

// Accordions
function myAccFunc(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// Function to display personality details
function showPersonality(type) {
  const data = personalityData[type];

  if (data) {
    document.getElementById("personality-name").textContent = data.name;
    document.getElementById("personality-strength").textContent = data.strength;
    document.getElementById("personality-weakness").textContent = data.weakness;
    document.getElementById("personality-relationships").textContent = data.relationships;
    document.getElementById("personality-careers").textContent = data.careers;
	
    // Make the section visible
    document.getElementById("selected-personality").style.display = "block";
  }
}

//Generate Result
 function generateResult(event) {
  event.preventDefault(); // Prevent form submission

  // Capture user details
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const country = document.getElementById("country").value;

  // Get the selected answers
  const answers = {
    q1: document.querySelector('input[name="q1"]:checked').value,
    q2: document.querySelector('input[name="q2"]:checked').value,
    q3: document.querySelector('input[name="q3"]:checked').value,
    q4: document.querySelector('input[name="q4"]:checked').value,
  };

  // Combine answers into a personality type
  const personalityType = answers.q1 + answers.q2 + answers.q3 + answers.q4;

  // Display the results
  document.getElementById("result-name").textContent = name;
  document.getElementById("result-age").textContent = age;
  document.getElementById("result-country").textContent = country;
  document.getElementById("personality-result").textContent = personalityType;
  document.getElementById("result-section").style.display = "block";
}
