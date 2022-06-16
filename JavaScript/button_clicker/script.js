function logOut(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function message() {
    alert("Ninja was liked");
}

function hideButton(element) {
    element.remove();
}