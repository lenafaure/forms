/**
 * Created by lenafaure on 30/12/2016.
 */

/* sign-up form validation */

var signupForm = document.getElementById('signup');
var inputFirstName = document.getElementById('input-first-name');
var inputLastName = document.getElementById('input-last-name');
var inputEmail = document.getElementById('input-email');
var inputBirthDate = document.getElementById('input-birthdate');

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
            input.setCustomValidity("Please enter a valid email address");
            input.className = "input-form";
        }
    }

}

inputEmail.addEventListener("keyup", function() {
    checkEmail(this);
});

/* date of birth */

function checkBirthDate(input){
    var element = input.value;

    if (validator.isEmpty(element)) {
        input.setCustomValidity("This field is required");
        input.className = "input-form";
    } else {
        if (validator.isDate(element)) {
            if(validator.isBeforeToday(element)){
                input.setCustomValidity("");
                input.className = "input-form valid";
            }
            else{
                input.setCustomValidity("You are not born yet...");
                input.className = "input-form";
            }

        } else {
            input.setCustomValidity("Please enter a valid date");
            input.className = "input-form";
        }
    }

}

inputBirthDate.addEventListener("focusout", function() {
    checkBirthDate(this);
});