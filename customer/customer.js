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
  var inputVal = firebase.database().ref('feedback');
  
  
function getInputValue(){
            // Selecting the input element and get its value 
            var inputVal = document.getElementById("customerfeed").value;
            
      saveMessage(inputVal);

 }
  

function saveMessage(inputVal){
  var newinputVal = inputVal.push();
  newinputVal.set({
    feedback: inputVal,
    
  });
}