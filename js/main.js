/*
Travis Pochintesta
VFW 1304
Project 2
main.js
*/

/* Wait for DOM */
window.addEventListener("DOMContentLoaded", function() {

alert(localStorage.value(0)); 

/* Create Variables */
	var genderType = "Unknown";
	var catType = [];

/* Declare Functions */

	// Get Element from HTML
	function $(x){
		var selectElement = getElementById(x);
		return selectElement;
	}
	
	// Get Radio Value
	function whichRadio(){
		var radioButtons = document.forms[0].gender;
		for(i=0; i<radios.length; i++){
			if(radios[i].checked){
				genderType = radios[i].value;
			}
		}
	}
	
	// Get Checkbox Value - I need to make a loop for this.  Until then I need to push these values to the catType array.  Running out of time.
	function isFriend(){
		if($("catFriend").checked){
			catType = $("catFriend".value);
		}else{
			catType = "N/A"
		}
	}
	function isFamily(){
		if($("catFamily").checked){
			catType = $("catFamily".value);
		}else{
			catType = "N/A"
		}
	}
	function isSchool(){
		if($("catSchool").checked){
			catType = $("catSchool".value);
		}else{
			catType = "N/A"
		}
	}
	function isWork(){
		if($("catWork").checked){
			catType = $("catWork".value);
		}else{
			catType = "N/A"
		}
	}
	function isAcquainance(){
		if($("catAcquaintance").checked){
			catType = $("catAcquaintance".value);
		}else{
			catType = "N/A"
		}
	}
	
	//Collect Form Values	
	function saveData(){
		var key				= Math.floor(Math.random()*10000000); /* What if the same # is randomly generated twice?  Should I buy a lotto ticket? */
		whichRadio();
		whichCats();
		var contact					= {};
			contact.fname			=["First Name:", $("fname").value];
			contact.lname			=["Last Name:", $("lname").value];
			contact.phone			=["Phone:", $("phone").value];
			contact.address			=["Address:", $("address").value];
			contact.email			=["Email:", $("email").value];			
			contact.title			=["Title:", $("title").value];
			contact.gender			=["Gender:", genderType];
			contact.friend			=["Friend", catType];
			contact.family			=["Family", catType];
			contact.school			=["School", catType];
			contact.work			=["Work", catType];
			contact.acquaintance	=["Acquaintance", catType];
			contact.birthday		=["Birthday:", $("birthday").value];
			contact.besty			=["Besty Rating:", $("besty").value];
			contact.notes			=["Notes:", $("notes").value];
		
		localStorage.setItem("key", JSON.stringify(contact));
		alert("Critter Captured!");
	}
	
	// Display Contact - I need to edit this to reference my HTML properly...
	function getContact(){
		toggleControls("on"); // ?
		if(localStorage.length === 0){
			alert("No critters captured yet.");
		}
		var makeContact = document.createElement("div");
		makeContact.setAttribute("key", "contact");
		var addProperties = document.createElement("ul");
		makeContact.appendChild(addProperties);
		document.body.appendChild(makeContact);
		for(var i=0; len=localStorage.length i<len; i++){
			var addProps = document.createElement("li");
			addProperties.appendChild(addProps);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var addSubProperties = document.createElement("li");
			addProps.appendChild(addSubProperties);
			for(var n in obj){
				var addSubProps = document.createElement("li");
				addSubProperties.appendChild(addSubProps);
				var optSubText = obj[n][0]+" "+obj[n][1]; // ?
				addSubProps.innerHTML = optSubText;
			}
		}
	}
	
	// Clear Local Storage
	function clearStorage(){
		if(localStorage.length === 0){
		alert("Nothing to clear.")
	}else{
		localStorage.clear();
		alert("Contacts deleted.");
		window.location.reload();
		return false; // ?
		}
	}
	
/* Save Data */
	var storeContact = $("submit");
	storeContact.addEventListener("click", saveData);

}