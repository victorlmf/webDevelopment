console.log('page loading...')

// remove the subscibe box onclick //
let subscribe = document.querySelector('#subscribe-box');
function removeBox() {
    subscribe.remove();
}

// increase score onclick //
let score = [314, 159];
let scoreIncrease = [
    document.querySelector('#score1'),
    document.querySelector('#score2')
]

function addScore(id) {
    score[id]++;
    scoreIncrease[id].innerText = score[id];
}

// alert afer 13 seconds //
function message() {
    alert("The Ninjas have won!");
}
setTimeout(message, 13000);