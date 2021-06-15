var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
var usernameArray = ['jamea', 'khaimat', 'tadreeb']; //username array 
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == usernameArray[0] && password == "saifiyah") {
        alert("Login successfully. You will be redirected once you click OK.")
        window.location = "http://www.jameasaifiyah.org/Students/stuLogin.aspx"; // Redirecting to other page.
        return false;
    } else if (username == usernameArray[1] && password == "riyadat") {
        swal("success!");
        window.location = "https://tsmillwala.github.io/krqm-attendance/"; // Redirecting to other page.
        return false;
    } else if (username == usernameArray[2] && password == "fanni") {
        swal({
            title: "Good job!",
            text: "Click!",
            icon: "success",
            button: "oh yes!",
        });
        window.location = "https://tadreebfanni.masakin.co.in"; // Redirecting to other page.
        return false;
    } else {
        attempt--; //,, decrementing by one.
        alert("Invalid credintials! You have " + attempt + " attempts left.");

        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("login").disabled = true;
            alert("You entered wrong credintials 3 times. Now, the form is disabled.")
            return false;
        }
    }
}
