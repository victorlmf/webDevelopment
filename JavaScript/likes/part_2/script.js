var count = [9,12,9]

var h3 = [
    document.querySelector("#count1"),
    document.querySelector("#count2"),
    document.querySelector("#count3"),
]

function addLike(id) {
    count[id]++;
    h3[id].innerHTML = count[id] + " likes(s)";
}