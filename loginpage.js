var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "jamea" && password == "saifiyah"){
alert ("Login successfully. You will be redirected once you click OK.");
window.location = "https://www.petmate.in/"; // Redirecting to other page.
return false;
}
else{
attempt --;//,, decrementing by one.
alert("Invalid credintials! You have "+attempt+" attempts left.");

// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("login").disabled = true;
alert("You entered wrong credintials 3 times. Now, the form is disabled.")
return false;
}
}
}
