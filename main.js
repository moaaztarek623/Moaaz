let nums = document.querySelectorAll("#box-counter #number-span");
let state = document.querySelector("#state");
let progreSS = document.querySelectorAll(".the-progress #span-width-progress")
let skills = document.querySelector(".skill")
let started = false;

window.onscroll = function () {
    if (window.scrollY >= state.offsetTop - 400) {
        if (!started) {
            nums.forEach((number) => {
                counter(number)
            })
        }
        started = true;
    }
    if (window.scrollY >= skills.offsetTop - 100) {
        progreSS.forEach((ele) => {
            ele.style.width = ele.dataset.width;
        })
    }
}
function counter(ele) {
    let goal = ele.dataset.goal;
    let count = setInterval(() => {
        ele.textContent++
        if (ele.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal)
}

let time = new Date('31 dec 2023 11:59:59').getTime();
let countdown = setInterval(() => {
    let n = new Date().getTime();
    let dateDiff = time - n;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    
    document.querySelector("#span-time-1").innerHTML = days < 100 ? `00${days}` : days;
    document.querySelector("#span-time-2").innerHTML = hours < 10 ? `0${hours}` : `${hours}`;
    document.querySelector("#span-time-3").innerHTML = minutes < 10 ? `0${minutes}` : `${minutes}`;
    document.querySelector("#span-time-4").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

}, 1000)

