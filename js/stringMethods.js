"use strict";

function validate(phoneNumber) {
    if (phoneNumber.length > 8 || phoneNumber.length < 7) {
        return false;
    }

    let first = phoneNumber.split("-");

    if (isNaN(first[0]) || isNaN(first[1])) {
        return false;
    }

    if (phoneNumber.length === 8) {
        return (phoneNumber.charAt(3) === "-");
    }
}

validate("123-4567");