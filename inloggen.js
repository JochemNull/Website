function checkpassword() {
    var usernameValue = document.getElementById("username").value
    var passwordValue = document.getElementById("password").value

    if(usernameValue == "1"){
        if(passwordValue == "1"){
            alert("wachtwoord correct");


        } else{
            alert("wachtwoord incorrect");
              }
        }
            else{
                alert("Gebruikersnaam incorrect")
            }
        
    }