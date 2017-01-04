/**
 * Created by lenafaure on 30/12/2016.
 *
 * Form validation with the HTML5 Constraint API and the validation
 * function from validator.js
 *
 */

window.addEventListener('load', function() {

    var form = document.getElementsByTagName('form')[0];
    var inputSimpleCheck = document.querySelectorAll('.input-simple-check');
    var inputEmail = document.getElementById('input-email');
    var inputBirthDate = document.getElementById('input-birthdate');
    var inputScheduleDate = document.getElementById('input-schedule-date');
    var inputPassword = document.getElementById('input-password');
    var inputPhoneNumber = document.getElementById('input-phone-number');
    var inputFullName = document.getElementById('input-full-name');
    var inputCreditCard = document.getElementById('input-credit-card');
    var inputCSVCode = document.getElementById('input-csv-code');
    var selectExpirationMonth = document.getElementById('select-month');
    var selectExpirationYear = document.getElementById('select-year');
    var checkBoxBillingForm = document.querySelector(".shipping-billing-form #checkbox1")
    var radioQuestionnaire = document.querySelectorAll(".md-radiobtn");

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

    /* shipping-billing form: fill in the form if box is checked */

    function fillBillingForm(){
        var shippingInputs = document.querySelectorAll("#shipping-wrapper input");
        var billingInputs = document.querySelectorAll("#billing-wrapper input");

        if(checkBoxBillingForm.checked){
            for(i = 1; i <= shippingInputs.length; i++){
            document.getElementById("input-billing-"+ [i]).value = document.getElementById("input-shipping-"+ [i]).value;
                document.getElementById("input-billing-"+ [i]).setAttribute("disabled", false);
            }
        }
        else {
            for(i = 1; i <= billingInputs.length; i++){
                document.getElementById("input-billing-"+ [i]).value = "";

            }
        }
    }

    if(checkBoxBillingForm) {
        checkBoxBillingForm.addEventListener("click", function(){
            fillBillingForm();
        });
    }

    /* questionnaire free choice: make input required if radio button checked */

    function fillOtherChoice(radio){
        var otherChoice = document.getElementById("radio-other");

        if(otherChoice.checked){
            document.getElementById("input-other").setAttribute("required", true);
        }
        else {
            document.getElementById("input-other").removeAttribute("required");
        }

    }

    if(radioQuestionnaire){
        for(i = 0; i < radioQuestionnaire.length; i++) {
            radioQuestionnaire[i].addEventListener("click", function(){
                fillOtherChoice(this);
            });
        }
    }

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
                input.setCustomValidity('Please enter a valid phone number with format: "0x xx xx xx xx"');
                input.className = "input-form";
            }
        }
    }

    if(inputPhoneNumber){
        inputPhoneNumber.addEventListener("keyup", function() {
            checkPhoneNumber(this);
        });
    }

    /* credit card full name (first name + last name) */

    function checkFullName(input) {
        var element = input.value;

        if (validator.isEmpty(element)) {
            input.setCustomValidity("This field is required");
            input.className = "input-form";
        } else {
            if (validator.countWords(element) >= 2) {
                input.setCustomValidity("");
                input.className = "input-form valid";
            } else {
                input.setCustomValidity("Please enter at least your First Name and Last Name as written on your card");
                input.className = "input-form";
            }
        }

    }

    if(inputFullName){
        inputFullName.addEventListener("keyup", function() {
            checkFullName(this);
        });
    }

    /* credit card number */

    function checkCreditCardNumber(input) {
        var element = input.value.trim();

        if (validator.isEmpty(element)) {
            input.setCustomValidity("This field is required");
            input.className = "input-form";
        } else {
            if (validator.isCreditCard(element)) {
                input.setCustomValidity("");
                input.className = "input-form valid";
            } else {
                input.setCustomValidity("Your credit card number must have 16 characters");
                input.className = "input-form";
            }
        }

    }

    if(inputCreditCard){
        inputCreditCard.addEventListener("keyup", function() {
            checkCreditCardNumber(this);
        });
    }

    /* credit card CSV code */

    function checkCreditCardCSVCode(input) {
        var element = input.value.trim();

        if (validator.isEmpty(element)) {
            input.setCustomValidity("This field is required");
            input.className = "input-form";
        } else {
            if (+element === parseInt(element) && element.length === 3) {
                input.setCustomValidity("");
                input.className = "input-form valid";
            } else {
                input.setCustomValidity("Your CSV code must be a 3 digits number");
                input.className = "input-form";
            }
        }

    }

    if(inputCSVCode){
        inputCSVCode.addEventListener("keyup", function() {
            checkCreditCardCSVCode(this);
        });
    }

    /* credit card expiration date */

    function checkExpirationDate(month, year) {
        var expirationMonth = month.value;
        var expirationYear = year.value;

        var expirationDate = expirationMonth + " " + expirationYear;

        if(validator.isAfterToday(expirationDate)) {
            year.setCustomValidity("");
        } else {
            year.setCustomValidity("Your credit card has expired, please provide a valid card.");
        }

    }

    if(selectExpirationMonth && selectExpirationYear){
        selectExpirationYear.addEventListener("change", function() {
            checkExpirationDate(selectExpirationMonth, this);
        });
        selectExpirationMonth.addEventListener("change", function() {
            checkExpirationDate(this, selectExpirationYear);
        });

    }

});
