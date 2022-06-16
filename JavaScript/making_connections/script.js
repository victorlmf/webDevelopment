console.log("page loading...");

/* change user name onclick to "edit profile" */
function changeName() {
    var newName = document.querySelector("#newName");
    newName.innerText = "Johnny Depp";
}

/* decrease connection request counts & increase connection counts */
var requestCount = 2;
var requestNum = document.querySelector("#nav-num-1");

var connectionsCount = 418;
var connections = document.querySelector("#nav-num-2");

function accept(id) {
    var removeName = document.querySelector(id); /* remove connection request after action */
    removeName.remove();
    requestCount--;
    requestNum.innerText = requestCount;
    connectionsCount++;
    connections.innerText = connectionsCount;
}

function decline(id) {
    var removeName = document.querySelector(id); /* remove connection request after action */
    removeName.remove();
    requestCount--;
    requestNum.innerText = requestCount;
}

