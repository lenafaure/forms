/**
 * Created by lenafaure on 30/12/2016.
 */

/* sign-up form validation */

var signupForm = document.getElementById('signup');
var inputFirstName = document.getElementById('input-first-name');
var inputLastName = document.getElementById('input-last-name');
var inputEmail = document.getElementById('input-email');

signupForm.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
});

signupForm.addEventListener('submit', function (event) {
    // stop the event from its default action: submitting the form (for our validation, submission is not desired)
    event.preventDefault();
});


/* first name */

function checkFirstName(input){
    var element = input.value;

    if (validator.isEmpty(element)) {
        input.setCustomValidity("This field is required");
        input.className = "input-form";
    } else {
        input.setCustomValidity("");
        input.className = "input-form valid";
    }
}

inputFirstName.addEventListener("keyup", function() {
    checkFirstName(this);
});

/* first name */

function checkLastName(input){
    var element = input.value;

    if (validator.isEmpty(element)) {
        input.setCustomValidity("This field is required");
        input.className = "input-form";
    } else {
        input.setCustomValidity("");
        input.className = "input-form valid";
    }
}

inputLastName.addEventListener("keyup", function() {
    checkLastName(this);
});

/* email */

function checkEmail(input){
    var element = input.value;

    if (validator.isEmpty(element)) {
        input.setCustomValidity("This field is required");
        input.className = "input-form";
    } else {
        if (validator.isEmailAddress(element)) {
            input.setCustomValidity("");
            input.className = "input-form valid";
        } else {

            input.className = "input-form";
            input.setCustomValidity("Please enter a valid email address");
        }
    }

}

inputEmail.addEventListener("keyup", function() {
    checkEmail(this);
});

/* date of birth */

