
function zz(){
var txt="";
if (document.getElementById('fname').value==""){
txt+="enter your first name \n";
document.getElementById('fname').style.borderColor="red";
}

if (document.getElementById('lname').value==""){
txt+="enter your Last name \n";
document.getElementById('lname').style.borderColor="red";
}
if (document.getElementById('email').value==""){
txt+="enter your email \n";
document.getElementById('email').style.borderColor="red";
}
if (document.getElementById('username').value==""){
txt+="enter your Username \n";
document.getElementById('username').style.borderColor="red";
}
if (document.getElementById('pwd').value==""){
txt+="enter your Password \n";
document.getElementById('pwd').style.borderColor="red";
}
if(txt != ""){
alert(txt);
return false;
}}

function z(){
var txt="";
if (document.getElementById('fname').value!=""){
document.getElementById('fname').style.borderColor="";
}
if (document.getElementById('lname').value!=""){
document.getElementById('lname').style.borderColor="";
}
if (document.getElementById('email').value!=""){
document.getElementById('email').style.borderColor="";
}
if (document.getElementById('username').value!=""){
document.getElementById('username').style.borderColor="";
}
if (document.getElementById('pwd').value!=""){
document.getElementById('pwd').style.borderColor="";
}
}

function Email(){
var email = document.getElementById('email').value;
  var username = email.substring(0, email.indexOf('@'));
 alert('The application of  ' + [username] +  ' is saved');
  
}

function disable(){
	var txt="";
if (document.getElementById('fname').value!=""){
document.getElementById('fname').style.borderColor="";
}
if (document.getElementById('lname').value!=""){
document.getElementById('lname').style.borderColor="";
}
if (document.getElementById('email').value!=""){
document.getElementById('email').style.borderColor="";
}
if (document.getElementById('username').value!=""){
document.getElementById('username').style.borderColor="";
}
if (document.getElementById('pwd').value!=""){
document.getElementById('pwd').style.borderColor="";
}
	if (document.getElementById('fname').value==""){
	document.getElementById('lname').disabled = true;
	}
	 if(document.getElementById('fname').value!=""){
	 document.getElementById('lname').disabled = false;
	 }
	 	 	if (document.getElementById('lname').value==""){
	document.getElementById('email').disabled = true;}
	 if(document.getElementById('lname').value!=""){
	 document.getElementById('email').disabled = false;}
	 
	 
		if (document.getElementById('email').value==""){
	document.getElementById('username').disabled = true;}
	 if(document.getElementById('email').value!=""){
	 document.getElementById('username').disabled = false;}
	 
	 
	 if (document.getElementById('username').value==""){
	 document.getElementById('pwd').disabled = true;}
	 if(document.getElementById('username').value!=""){
		document.getElementById('pwd').disabled = false; }
	 
	  
	}
	


