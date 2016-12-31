/**
 * Created by lenafaure on 30/12/2016.
 */

/* form validation */

var form = document.getElementsByTagName('form')[0];
var inputSimpleCheck = document.querySelectorAll('.input-simple-check');
var inputEmail = document.getElementById('input-email');
var inputBirthDate = document.getElementById('input-birthdate');
var inputScheduleDate = document.getElementById('input-schedule-date');
var inputScheduleTime = document.getElementById('input-schedule-time');
var inputPassword = document.getElementById('input-password');
var inputPhoneNumber = document.getElementById('input-phone-number');

console.log(inputScheduleTime);

inputScheduleTime.addEventListener("change", function(){
    console.log(inputScheduleTime.value);
});

form.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
});

form.addEventListener('submit', function (event) {
    // stop the event from its default action: submitting the form (for our validation, submission is not desired)
    event.preventDefault();
});


/* simple check (check if not empty) */

function checkSimple(input){
    var element = input.value;

    if (validator.isEmpty(element)) {
        input.setCustomValidity("This field is required");
        input.className = "input-form input-simple-check";
    } else {
        input.setCustomValidity("");
        input.className = "input-form input-simple-check valid";
    }
}

if(inputSimpleCheck){
    for(var i = 0; i < inputSimpleCheck.length; i++)
    inputSimpleCheck[i].addEventListener("keyup", function() {
        checkSimple(this);
    });
}


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

if(inputEmail){
    inputEmail.addEventListener("keyup", function() {
        checkEmail(this);
    });
}


/* birth date */

function checkBirthDate(input){
    var element = input.value;

    if (validator.isEmpty(element)) {
        input.setCustomValidity("This field is required");
        input.className = "input-form";
    } else {
        if (validator.isDate(element)) {
            if(validator.isBeforeToday(element) && validator.isAfterDate(element, "01/01/1900")){
                input.setCustomValidity("");
                input.className = "input-form valid";
            }
            else{
                input.setCustomValidity("Please enter a date between 1900 and now");
                input.className = "input-form";
            }

        } else {
            input.setCustomValidity("Please enter a valid date");
            input.className = "input-form";
        }
    }

}

if(inputBirthDate){
    inputBirthDate.addEventListener("change", function() {
        checkBirthDate(this);
    });
}

/* schedule date */

function checkScheduleDate(input){
    var element = input.value;

    if (validator.isEmpty(element)) {
        input.setCustomValidity("This field is required");
        input.className = "input-form";
    } else {
        if (validator.isDate(element)) {
            if(validator.isAfterToday(element)){
                input.setCustomValidity("");
                input.className = "input-form valid";
            }
            else{
                input.setCustomValidity("This date has already passed");
                input.className = "input-form";
            }

        } else {
            input.setCustomValidity("Please enter a valid date");
            input.className = "input-form";
        }
    }
}

if(inputScheduleDate){
    inputScheduleDate.addEventListener("change", function() {
        checkScheduleDate(this);
    });
}



/* password */

function checkPassword(input){
    var element = input.value;

    if (validator.isEmpty(element)) {
        input.setCustomValidity("This field is required");
        input.className = "input-form";
    }
    else {
        if(input.validity.valid){
            input.setCustomValidity("");
            input.className = "input-form valid";
        }
        else {
            input.className = "input-form";
        }
    }
}

if(inputPassword){
    inputPassword.addEventListener("keyup", function() {
        checkPassword(this);
    });
}


/* phone number */

function checkPhoneNumber(input){
    var element = input.value;

    if (validator.isEmpty(element)) {
        input.setCustomValidity("This field is required");
        input.className = "input-form";
    } else {
        if (validator.isPhoneNumber(element)) {
            input.setCustomValidity("");
            input.className = "input-form valid";
        } else {
            input.setCustomValidity("Please enter a valid phone number");
            input.className = "input-form";
        }
    }
}

if(inputPhoneNumber){
    inputPhoneNumber.addEventListener("keyup", function() {
        checkPhoneNumber(this);
    });
}
