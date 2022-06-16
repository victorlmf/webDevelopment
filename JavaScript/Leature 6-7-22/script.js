console.log("page loading...")

//* like button *//
let likeCount = 0;
let like = document.querySelector(".likes")
function addLike() {
    likeCount++;
    like.innerText = likeCount;
}

//* alexis alert *//
function alexis() {
    alert("eww, David")
}

//* remove cookie *//
let accept = document.querySelector("#cookie_policy")
function acceptCookies() {
    accept.remove();
}

//* switch image *//
document.querySelector(".cast_img").onmouseover = function() {mouseOver()};
function mouseOver() {
    document.querySelector('.cast_img').src='img/eye_roll.jpeg';
}

document.querySelector(".cast_img").onmouseout = function() {mouseOut()};
function mouseOut() {
    document.querySelector('.cast_img').src='img/david.jpeg';
}