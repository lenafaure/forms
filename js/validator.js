
/**
 * Created by lenafaure on 27/12/2016.
 *
 * VALIDATION FUNCTIONS
 * All the tests to the functions are at the end of the file
 *
 */

var validator = (function(){

    // #1: 'isFalse(input)'
    //
    // Checks if the input parameter is not blank or a falsy value

     function isFalse(input){
        return (input === "" ||
                typeof input == "undefined" ||
                input === null ||
                input === false
        );
    }


    // #2: 'isEmpty(input)'
    //
    // Checks if the input paramater is an empty string

    function isEmpty(input){
        if(typeof input === 'string' && input.trim() == ""){
            return true;
        }
        else {
            return false;
        }
    }


    // #3: 'isAlphanumeric(input)'
    //
    // Checks if the input parameter consists of only alphanumeric characters:
    // a-z, A-Z and 0-9

     function isAlphanumeric(input) {
        var alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";

        for (i = 0; i <= input.length-1; i++){
            // check if a character doesn't match with "alphanumeric" characters
            if(alphaNumeric.indexOf(input[i].toLowerCase()) == -1) {
                    return false;
            }
        }
        return true;
    }

    // #4: 'isEmailAddress(input)'
    //
    // Checks if the input parameter is an email address with two strings separated by
    // an @ symbol, and a domain name after a dot at the end of the second string

    function isEmailAddress(input) {
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


    // #5: 'isPhoneNumber(input)'
    //
    // Checks if the input parameter is a phone number, i.e follows the appropriate
    // phone number format. In france the format is:
    // - a 0 at the beginning of the phone number
    // - 10 digits separated by a white space

     function isPhoneNumber(input) {
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


    // #6: 'withoutSymbols(input)'
    //
    // Returns the input parameter with all non-alphanumeric characters removed,
    // ignoring spaces

    function withoutSymbols(input) {
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


    // #7: 'isDate(input)'
    //
    // Checks if the input parameter is a valid date

    function isDate(input) {
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


    // #8: 'isBeforeDate(input, reference)'
    //
    // Checks if the input date is before the reference date

    function isBeforeDate(input, reference) {
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

    // #9: 'isAfterDate(input, reference)'
    //
    // Checks if the input date is after the reference date

    function isAfterDate(input, reference) {
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

    // #10: 'isBeforeToday(input)'
    //
    // Checks if the input date is before the current date

    function isBeforeToday(input) {
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

    // #11: 'isAfterToday(input)'
    //
    // Checks if the input date is after the current date

    function isAfterToday(input) {
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


    // #12: 'contains(input, words)'
    //
    // Checks if the input contains one or more words within the words array

    function contains(input, words) {
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

    // #13: 'lacks(input, words)'
    //
    // Checks if the input does not contains any of the words within the words array

    function lacks(input, words) {
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

    // #14: 'isComposedOf(input, strings)'
    //
    // Checks if input contains only strings found in the strings array

    function isComposedOf(input, strings) {
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


    // #15: 'isLength(input, n)'
    //
    // Checks if the length of the input string is less than or equal to the parameter n

    function isLength(input, n) {
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


    // #16: 'isOfLength(input, n)'
    //
    // Checks if the length of the input string is greater or equal to the parameter n

    function isOfLength(input, n) {
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

    // #17: 'countWords(input)'
    //
    // Counts the number of words in the input parameter

    function countWords(input) {
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

    // #18: 'lessWordsThan(input, n)'
    //
    // Checks if the input string has a word count less than or equal to the parameter n

    function lessWordsThan(input, n) {
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

    // #19: 'moreWordsThan(input, n)'
    //
    // Checks if the input string has a word count greater or equal to the parameter n

    function moreWordsThan(input, n) {
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

    // #20: 'isBetween(input, floor, ceil)'
    //
    // Checks if the input parameter is between floor and ceil values, including them

    function isBetween(input, floor, ceil) {
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


    // #21: 'isCreditCard(input)'
    //
    // Checks if input parameter is a credit card number

    function isCreditCard(input) {
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

    // #22: 'isHex(input)'
    //
    // Checks if the input string is an hexadecimal color

    function isHex(input) {
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

    // #23: 'isRGB(input)'
    //
    // Checks if the input strig is an RGB color

    function isRGB(input) {
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


    // #24: 'isHSL(input)'
    //
    // Checks if the input string is an HSL color

    function isHSL(input) {
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


    // #25: 'isColor(input)'
    //
    // Checks if the input is an Hexadecimal, an RGB or an HSL color

    function isColor(input) {
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


    // #26: 'isTrimmed(input)'
    //
    // Checks if the input string has leading or trailing whitespaces or
    // more than one whitespace between the words

    function isTrimmed(input) {
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

    return{
        isFalse: isFalse,
        isEmpty: isEmpty,
        isAlphanumeric: isAlphanumeric,
        isEmailAddress: isEmailAddress,
        isPhoneNumber: isPhoneNumber,
        withoutSymbols: withoutSymbols,
        isDate: isDate,
        isBeforeDate: isBeforeDate,
        isAfterDate: isAfterDate,
        isBeforeToday: isBeforeToday,
        isAfterToday: isAfterToday,
        contains: contains,
        lacks: lacks,
        isComposedOf: isComposedOf,
        isLength: isLength,
        isOfLength: isOfLength,
        countWords: countWords,
        lessWordsThan: lessWordsThan,
        moreWordsThan: moreWordsThan,
        isBetween: isBetween,
        isCreditCard: isCreditCard,
        isHex: isHex,
        isRGB: isRGB,
        isHSL: isHSL,
        isColor: isColor,
        isTrimmed: isTrimmed
    }

})();


