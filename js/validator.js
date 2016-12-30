
/**
 * Created by lenafaure on 27/12/2016.
 *
 * VALIDATION FUNCTIONS
 * All the tests to the functions are at the end of the file
 *
 */

(function(window){

    var validator = {};
    window.validator = validator;
    
    /* .isFalse(input) */

    validator.isFalse = function(input){
        // check if input is blank or is a falsy value
        return (input === "" ||
                typeof input == "undefined" ||
                input === null ||
                input === false ||
                this.isEmpty(input)
        );
    }


    /* .isEmpty(input) */

    validator.isEmpty = function(input){
        if(typeof input === 'string' && input.trim() == ""){
            return true;
        }
        else {
            return false;
        }
    }


    /* .isAlphanumeric(input) */

    validator.isAlphanumeric = function(input) {
        var alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";

        for (i = 0; i <= input.length-1; i++){
            // check if a character doesn't match with "alphanumeric" characters
            if(alphaNumeric.indexOf(input[i].toLowerCase()) == -1) {
                    return false;
            }
        }
        return true;
    }

    /* .isEmailAddress(input) */

    validator.isEmailAddress = function(input) {
        // check for empty or undefined parameter
        if(this.isFalse(input)) {
            return false;
        }

        // check if email address contains "@"
        if(input.indexOf("@") != -1){
            // separate the two parts of the email address using "@" as separator
            var splitAddress = input.split("@");

            // check if there are two parts before and after the "@" character
            if(splitAddress[0] && splitAddress[1]) {
                // check if second part has a domain name by checking presence of a dot
                if(splitAddress[1].indexOf(".") == -1){
                    console.log("Error: Email address must have a valid domain name");
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                console.log("Error: There are missing parts in this email address");
                return false;
            }
        }
        else{
            console.log("Error: An email address must contain the '@' character");
            return false;
        }
    };


    /* .isPhoneNumber(input) */

    validator.isPhoneNumber = function(input) {
        // check for empty or undefined parameter
        if(this.isFalse(input)) {
            return false;
        }

        // check if the number of whitespaces corresponds to french number format
        if(input.split(' ').length-1 == 4){
            // split pairs of numbers separated by a white space
            var phonePairs = input.split(' ');

            // check if we have the right number of pairs (10 digits = 5 pairs)
            if(phonePairs.length == 5) {
                // check if phone number begins with 0
                if(phonePairs[0][0] !== "0"){
                    console.log("Error: your phone number must begin with 0");
                    return false;
                }

                for(i = 0; i < phonePairs.length; i++){
                    if(phonePairs[i].length != 2) {
                        // check if there are two digits in each pair
                        console.log("Error: french phone numbers have 10 digits");
                        return false;
                    }
                    else if (isNaN(parseInt(phonePairs[i]))){
                        // check if every character is a digit
                        console.log("Error: your phone number should contain numbers only");
                        return false;
                    }
                }
                return true;
            }
            else {
                console.log("Error: french phone numbers have 10 digits");
                return false;
            }
        }
        else {
            console.log("Error: this phone number is not of the right format: please use the format 'xx xx xx xx xx'");
            return false;
        }
    };


    /* .withoutSymbols(input) */

    validator.withoutSymbols = function(input) {
        var characters = " abcdefghijklmnopqrstuvwxyz0123456789";
        var noSymbols = [];

        // check for empty or undefined parameter
        if(this.isFalse(input)) {
            return false;
        }

        for (i = 0; i <= input.length-1; i++){

            // check if a character doesn't match with "alphanumeric" characters or blank space
            if(characters.indexOf(input[i].toLowerCase()) != -1) {
                noSymbols.push(input[i]);
            }
        }

        var result = noSymbols.join('');
        return result;
    }


    /* .isDate(input) */

    validator.isDate = function(input) {
        // check for empty or undefined parameter
        if(this.isFalse(input)) {
            return false;
        }

        // parse the date and check if the result is a number
        if(!isNaN(Date.parse(input))) {
            return true;
        }
        else {
            console.log("Error: input is not a valid date");
            return false;
        }
    }


    /* .isBeforeDate(input, reference) */

    validator.isBeforeDate = function(input, reference) {
        // check if input is a date
        if( !this.isDate(input) || !this.isDate(reference)) {
            return false;
        }

        // parse the date and compare numbers
        if(Date.parse(input) < Date.parse(reference)) {
            return true;
        }
        else {
            return false;
        }
    }

    /* .isAfterDate(input, reference) */

    validator.isAfterDate = function(input, reference) {
        // check if input is a date
        if( !this.isDate(input) || !this.isDate(reference)) {
            return false;
        }


        // parse the date and compare numbers
        if(Date.parse(input) > Date.parse(reference)) {
            return true;
        }
        else {
            return false;
        }
    }

    /* .isBeforeToday(input) */

    validator.isBeforeToday = function(input) {
        var today = new Date();

        // check if input is a date
        if( !this.isDate(input)) {
            return false;
        }

        // parse the date and ccompare with today
        if(Date.parse(input) < today) {
            return true;
        }
        else {
            return false;
        }
    }

    /* .isAfterToday(input) */

    validator.isAfterToday = function(input) {
        var today = new Date();

        // check if input is a date
        if( !this.isDate(input)) {
            return false;
        }

        // parse the date and ccompare with today
        if(Date.parse(input) > today) {
            return true;
        }
        else {
            return false;
        }
    }


    /* .contains(input, words) */

    validator.contains = function(input, words) {
        var alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
        var splitCharacters = [];
        var result = [];

        // check for empty or undefined parameters
        if(this.isFalse(input) || this.isFalse(words)) {
            return false;
        }

        // replace any punctuation by white space
        for(var i = 0; i < input.length; i++){
            if(alphaNumeric.indexOf(input[i].toLowerCase()) == -1) {
                splitCharacters.push(" ");
            }
            else{
                splitCharacters.push(input[i].toLowerCase());
            }
        }

        // recreate sentence without punctuation
        var splitWords = splitCharacters.join("").split(" ");

        // convert words array to lowercases
        for (var k = 0; k < words.length; k++){
            if (words[k]) {
                words[k].toLowerCase();
            }
        }

        // compare arrays
        for (var j = 0; j < splitWords.length; j++) {
            if (words.indexOf(splitWords[j]) !== -1) {
               result.push(splitWords[j]);
            }
        }

        if (result.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    /* .lacks(input, words) */

    validator.lacks = function(input, words) {
        var alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
        var splitCharacters = [];
        var result = [];

        // check for empty or undefined parameters
        if(this.isFalse(input) || this.isFalse(words)) {
            return false;
        }

        // replace any punctuation by white space
        for(var i = 0; i < input.length; i++){
            if(alphaNumeric.indexOf(input[i].toLowerCase()) == -1) {
                splitCharacters.push(" ");
            }
            else{
                splitCharacters.push(input[i].toLowerCase());
            }
        }

        // recreate sentence without punctuation
        var splitWords = splitCharacters.join("").split(" ");

        // convert words array to lowercases
        for (var k = 0; k < words.length; k++){
            if (words[k]) {
                words[k].toLowerCase();
            }
        }

        // compare arrays
        for (var j = 0; j < splitWords.length; j++) {
            if (words.indexOf(splitWords[j]) !== -1) {
                result.push(splitWords[j]);
            }
        }

        if (result.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    /* .isComposedOf(input, strings) */

    validator.isComposedOf = function(input, strings) {
        var inputCaseInsensitive = input.toLowerCase();
        var alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
        var result = [];
        var remain = [];

        // check for empty or undefined parameters
        if(this.isFalse(input) || this.isFalse(strings)) {
            return false;
        }

        // sort strings array by length, longest string first:
        strings.sort(function (a, b) {
            return b.length - a.length;
        });

        // check if input contains the strings found within the strings array
        for( var i = 0; i < strings.length; i++) {
            var stringCaseInsensitive = strings[i].toLowerCase();

            if (inputCaseInsensitive.indexOf(stringCaseInsensitive) !== -1) {
                result.push(stringCaseInsensitive);
                // remove ALL matching words in the original string
                inputCaseInsensitive = inputCaseInsensitive.split(stringCaseInsensitive).join("");
            }
        }

        // loop through newly created string to remove non-alphanumeric characters
        for (var j = 0; j < inputCaseInsensitive.length; j++) {
            if(alphaNumeric.indexOf(inputCaseInsensitive[j]) !== -1) {
                remain.push(inputCaseInsensitive[j]);
            }
        }

        // if array of remaining characters has a length, the input is not composed of
        // ONLY strings found within the strings array and has extra characters
        if(remain.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }


    /* .isLength(input, n) */

    validator.isLength = function(input, n) {
        // check for empty or undefined parameters
        if(this.isFalse(input) || this.isFalse(n)) {
            return false;
        }

        if(input.length <= n) {
            return true;
        }
        else {
            return false;
        }
    }


    /* .isOfLength(input, n) */

    validator.isOfLength = function(input, n) {
        // check for empty or undefined parameters
        if(this.isFalse(input) || this.isFalse(n)) {
            return false;
        }

        if(input.length >= n) {
            return true;
        }
        else {
            return false;
        }
    }

    /* .countWords(input) */

    validator.countWords = function(input) {
        var alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
        var splitCharacters = [];
        var count = 0;

        // check for empty or undefined parameter
        if(this.isEmpty(input)) {
            return 0;
        }

        // replace any punctuation by white space
        for(var i = 0; i < input.length; i++){
            if(alphaNumeric.indexOf(input[i].toLowerCase()) == -1) {
                splitCharacters.push(" ");
            }
            else{
                splitCharacters.push(input[i].toLowerCase());
            }
        }

        // recreate sentence without punctuation
        var splitWords = splitCharacters.join("").split(" ");

        // count the words in the sentence
        for (i = 0; i < splitWords.length; i++) {
            if(splitWords[i]) {
                count++;
            }
        }
        return count;
    }

    /* .lessWordsThan(input, n) */

    validator.lessWordsThan = function(input, n) {
        var alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
        var splitCharacters = [];
        var count = 0;

        // check for empty or undefined parameters
        if(this.isFalse(input) || this.isFalse(n)) {
            return false;
        }

        // replace any punctuation by white space
        for(var i = 0; i < input.length; i++){
            if(alphaNumeric.indexOf(input[i].toLowerCase()) == -1) {
                splitCharacters.push(" ");
            }
            else{
                splitCharacters.push(input[i].toLowerCase());
            }
        }

        // recreate sentence without punctuation
        var splitWords = splitCharacters.join("").split(" ");

        // count the words in the sentence
        for (i = 0; i < splitWords.length; i++) {
            if(splitWords[i]) {
                count++;
            }
        }

        if (count <= n) {
            return true;
        }
        else {
            return false;
        }
    }

    /* .moreWordsThan(input, n) */

    validator.moreWordsThan = function(input, n) {
        var alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
        var splitCharacters = [];
        var count = 0;

        // check for empty or undefined parameters
        if(this.isFalse(input) || this.isFalse(n)) {
            return false;
        }

        // replace any punctuation by white space
        for(var i = 0; i < input.length; i++){
            if(alphaNumeric.indexOf(input[i].toLowerCase()) == -1) {
                splitCharacters.push(" ");
            }
            else{
                splitCharacters.push(input[i].toLowerCase());
            }
        }

        // recreate sentence without punctuation
        var splitWords = splitCharacters.join("").split(" ");

        // count the words in the sentence
        for (i = 0; i < splitWords.length; i++) {
            if(splitWords[i]) {
                count++;
            }
        }

        if (count >= n) {
            return true;
        }
        else {
            return false;
        }
    }

    /* .isBetween(input, floor, ceil) */

    validator.isBetween = function(input, floor, ceil) {
        // check for empty or undefined parameters
        if(this.isFalse(input) || this.isFalse(floor) || this.isFalse(ceil)) {
            return false;
        }

        // check if input is comprised between floor and ceil
        if( input >= floor && input <= ceil) {
            return true;
        }
        else{
            return false;
        }
    }


    /* .isCreditCard(input) */

    validator.isCreditCard = function(input) {
        // check for empty or undefined parameters
        if(this.isFalse(input)) {
            return false;
        }

        // remove hyphens
        var joinInput = input.split("-").join("");

        // check if there are 16 (4 x 4) sets
        if(joinInput.length == 16){
            // check if all 16 characters are of the alphanumeric type
            if(this.isAlphanumeric(joinInput)){
                return true;
            }
            else{
                return false;
            }
        }
        else {
            return false;
        }
    }

    /* .isHex(input) */

    validator.isHex = function(input) {
        var hexadecimal = "abcdef0123456789";
        var result = [];

        // check for empty or undefined parameters
        if(this.isFalse(input)) {
            return false;
        }

        // check if input begins with a "#"
        if(input.charAt(0) == "#"){
            // remove "#" character
            input = input.replace("#", "");

            // check if remainder is divisible by 3 and no longer than 6 characters
            if(input.length % 3 === 0 && input.length <= 6) {
                for (i = 0; i <= input.length-1; i++){

                    // check if a character doesn't match with "hexadecimal" characters
                    if(hexadecimal.indexOf(input[i].toLowerCase()) == -1) {
                        if(input[i] != " ") {
                            result.push(input[i]);
                        }
                    }
                }

                if(result.length === 0){
                    return true;
                }
                else{
                    return false;
                }
            }
            else{
                return false;
            }
        }
        else {
            return false;
        }
    }

    /* .isRGB(input) */

    validator.isRGB = function(input) {
        var beginString = input.substring(0,4).toLowerCase();
        var endString = input.substring(input.length -1).toLowerCase();
        var trimmedNumbers = [];

        // check for empty or undefined parameters
        if(this.isFalse(input)) {
            return false;
        }

        // check if beginning is "rgb(" and end is ")"
        if(beginString == "rgb(" && endString == ")"){
            // remove end and beginning of string
            var rgbNumbers = input.replace(input.substring(0,4), "");
            rgbNumbers = rgbNumbers.replace(input.substring(input.length -1), "");

            // convert numbers to array
            rgbNumbers = rgbNumbers.split(",");

            // trim values of array
            for(var i = 0; i < rgbNumbers.length; i++) {
                trimmedNumbers.push(rgbNumbers[i].trim());
            }

            // check array length
            if(trimmedNumbers.length == 3){
                for(var j = 0; j < trimmedNumbers.length; j++) {
                    // check if each number is between 0 and 255
                    if(!this.isBetween(trimmedNumbers[j], 0, 255)){
                        return false;
                    }
                }
                return true;
            }
            else {
                return false;
            }
        }
        else{
            return false;
        }
    }


    /* .isHSL(input) */

    validator.isHSL = function(input) {
        var beginString = input.substring(0,4).toLowerCase();
        var endString = input.substring(input.length -1).toLowerCase();
        var trimmedNumbers = [];

        // check for empty or undefined parameters
        if(this.isFalse(input)) {
            return false;
        }

        // check if beginning is "hsl(" and end is ")"
        if(beginString == "hsl(" && endString == ")"){
            // remove end and beginning of string
            var hslNumbers = input.replace(input.substring(0,4), "");
            hslNumbers = hslNumbers.replace(input.substring(input.length -1), "");

            // convert numbers to array
            hslNumbers = hslNumbers.split(",");

            // trim values of array
            for(var i = 0; i < hslNumbers.length; i++) {
                trimmedNumbers.push(hslNumbers[i].trim());
            }

            // check array length
            if(trimmedNumbers.length == 3){
                // check if first number is between 0 and 360 and second and third numbers are between 0 and 1
                if( !this.isBetween(trimmedNumbers[0], 0, 360) ||
                    !this.isBetween(trimmedNumbers[1], 0, 1) ||
                    !this.isBetween(trimmedNumbers[2], 0, 1)
                ){
                    return false;
                }
                return true;
            }
            else {
                return false;
            }
        }
        else{
            return false;
        }
    }


    /* .isColor(input)  */

    validator.isColor = function(input) {
        // check for empty or undefined parameters
        if(this.isFalse(input)) {
            return false;
        }

        if( this.isHex(input) ||
            this.isRGB(input) ||
            this.isHSL(input)
        ){
            return true;
        }
        else {
            return false;
        }
    }


    /* .isTrimmed(input) */

    validator.isTrimmed = function(input) {
        // check for empty or undefined parameters
        if(this.isFalse(input)) {
            return false;
        }

        // convert to array with ONE whitespace as separator
        var splitInput = input.split(" ");

        for(var i = 0; i < splitInput.length; i++) {
            // check if there are remaining white spaces
            if(splitInput[i] == ""){
                return false;
            }
        }
        return true;
    }

})(window);


