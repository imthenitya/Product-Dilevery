var firebaseConfig = {
    apiKey: "AIzaSyAzLrGDpxRvTRH50JvtGsVpzP2FN7nmTuA",
    authDomain: "fir-js-47586.firebaseapp.com",
    databaseURL: "https://fir-js-47586.firebaseio.com",
    projectId: "fir-js-47586",
    storageBucket: "fir-js-47586.appspot.com",
    messagingSenderId: "294477750113",
    appId: "1:294477750113:web:54fe6d727a1244d1be2f20"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var signUpref = firebase.database().ref('User');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var username = document.getElementById('newUsername').value;
  var pswrd = document.getElementById('newPassword').value;
  var email = document.getElementById('newEmail').value;
  var f = document.getElementById("role");
 var role = f.options[f.selectedIndex].text;
  console.log(role);

  // Save message
  saveMessage(username, pswrd, email, role);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
  console.log(email);
}

// Function to get form value


// Save message to firebase
function saveMessage(username, pswrd, email, role){
  var newSignupref = signUpref.push();
  newSignupref.set({
    username: username,
    pswrd: pswrd,
    email: email,
    role: role,
  });
}




// Listen for form submit
document.getElementById('loginform').addEventListener('submit', submitLogin);

// Submit form
function submitLogin(e){
  e.preventDefault();

  //Get value
  var usernameV = document.getElementById('username').value;
  var pswrdV = document.getElementById('password').value;
  var e = document.getElementById("usertype");
  var roleV = e.options[e.selectedIndex].text;

  var roleVC = "Customer";
  var roleVD = "Delivery Boy";
  var roleVA = "Admin";


//read data from firebase
signUpref.orderByChild("username").equalTo(usernameV).on('value', function (snapshot) {
       //snapshot would have list of NODES that satisfies the condition
	console.log(snapshot.val());
        console.log('-----------');
		if (snapshot.val()==null){
			alert("invalid Username");
		}
 var pass_verify;
 var role_verify;
 
       //go through each item found and print out the emails
       snapshot.forEach(function(childSnapshot) {
		var key = childSnapshot.key;
		var childData = childSnapshot.val();
		 pass_verify=childData.pswrd;
		 role_verify=childData.role;
       
		  if(pass_verify==pswrdV && role_verify==roleV && roleV==roleVD)
  {
		sessionStorage.setItem("username", usernameV);
		 window.open("../delivery_boy/index.html");
  }
  else if(pass_verify==pswrdV && role_verify==roleV && roleV==roleVC)
  {
	  sessionStorage.setItem("username", usernameV);
		 window.open("../customer/index.html");
  }
    else if(pass_verify==pswrdV && role_verify==roleV && roleV==roleVA)
  {
	  sessionStorage.setItem("username", usernameV);
		 window.open("admin_landing/admin_landing.html");
  }
else
{
alert("invalid credentials");
}
  });
 
});
}

var userinfo= document.getElementById("username").value
//////////////////////////////////////////////


  
// document.getElementById('contactForm').addEventListener('submit', update);
// function update(e){
  // e.preventDefault();
  // var updates = {};
  // updates['/posts/' + newSignupref] = signUpref;
  // updates['/user-posts/' + uid + '/' + newSignupref] = signUpref;

  // return firebase.database().ref().update(updates);
// }

///////////////////////////////
