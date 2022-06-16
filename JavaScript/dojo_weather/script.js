/* location alert */
function alertSpan() {
    alert("Loading weather report...")
}

/* remove cookie policy message */
function removeMessage() {
    var message = document.querySelector(".cookie");
    message.remove();
}

/* temperature converter */
function cToF(temp) {
    return Math.round(1.8 * temp + 32);
}
function fToC(temp) {
    return Math.round((temp-32) / 1.8);
}

function tempConverter(element) {
    for(var i=1; i<9; i++) {
        var tempStr = document.querySelector("#temp" + i)
        var tempVal = parseInt(tempStr.innerText);
        if(element.value == "°F") {
            tempStr.innerText = cToF(tempVal);
        } else {
            tempStr.innerText = fToC(tempVal);
        }
    }
}
