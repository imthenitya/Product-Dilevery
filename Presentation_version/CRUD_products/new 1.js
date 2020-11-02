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
  
// Getting dilevery boy names to dropdown
function addItemstoList(username){

var ul= document.getElementById("selectID");

var usernameA= document.createElement("option");

usernameA.innerHTML=  username;


ul.appendChild(usernameA);
}
function fetchAllData(){
	 firebase.database().ref('User').once("value", function(snapshot){
		 snapshot.forEach(
		 function(ChildSnapshot){
		
			 let usernameB= ChildSnapshot.val().username;
			 let roleB= ChildSnapshot.val().role;
			
			 if(roleB==="Delivery Boy"){
			  console.log(usernameB);
			 addItemstoList(usernameB);}
		
		 }
		 
	 );
});
}


// Adding delivery details to firebase


var productDetalis = firebase.database().ref('Products');

// Listen for form submit
document.getElementById('products').addEventListener('submit', addProducts);


// Submit form
function addProducts(e){
  e.preventDefault();

  //Get value
  var productName = document.getElementById('proname').value;
  var price = document.getElementById('price').value;
var k = document.getElementById("selectID");
var dboyname = k.options[k.selectedIndex].text;
console.log(dboyname);

  // Save message
  saveMessage(productName, price, dboyname);

}

// Save message to firebase
function saveMessage(productName, price, dboyname){
  var newproductDetalis = productDetalis.push();
  newproductDetalis.set({
    Product: productName,
    Price: price,
    Dboy: dboyname
  });
}

// Add items details to page
var prono=0;
function addProductstoList(Product,Dboy,Price){

var ul= document.getElementById("createlist");
var header= document.createElement("h2");

var productA= document.createElement("li");
var dboyA= document.createElement("li");
var priceA= document.createElement("li");

header.innerHTML= 'Product ' + (++prono);
productA.innerHTML= "Product : " +Product;
dboyA.innerHTML= "Dilevery Boy : " +Dboy;
priceA.innerHTML= "Product Cost : " +Price;

ul.appendChild(header);
ul.appendChild(productA);
ul.appendChild(dboyA);
ul.appendChild(priceA);
}
function fetchAllProductData(){
	 firebase.database().ref('Products').once("value", function(snapshot){
		 snapshot.forEach(
		 function(ChildSnapshot){
		
			 let productB= ChildSnapshot.val().Product;
			 let dboyB= ChildSnapshot.val().Dboy;
			 let priceB= ChildSnapshot.val().Price;
			 addProductstoList(productB, dboyB, priceB);
		
		 }
		 
	 );
});
}

var finalFetch = fetchAllData();
var finalProductFetch = fetchAllProductData();
window.onload= finalFetch;
window.onload= finalProductFetch;








