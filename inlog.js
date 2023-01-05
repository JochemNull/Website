function checkPasswordAndUser() {
	var userValue = document.getElementById("user").value
	var passwordValue = document.getElementById("password").value
if(userValue == "JochemKlein") {

	if(passwordValue == "482543"){ 

	window.location.href = 'home.html'; 
	alert("login went successful") // als alles goed is

	} else {

		alert(' Wrong password'); //als  ww fout is
	}

} else {

	alert('wrong Username'); //als gebruikersnaam fout is
}
}