let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;
let usercolor;
let h2 = document.querySelector("h2");
let h3 = document.querySelector('h3');
let hightScore = 0;

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game is start");
        started = true;
        levelUp();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() { btn.classList.remove("flash"); }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = "level: " + level;
    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randbth = document.querySelector(`.${randcolor}`);
    // console.log(randIdx);
    // console.log(randcolor);
    // console.log(randbth);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnflash(randbth);
}

function chechAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Scored was<b> ${level} <br>Press any key to start.`;
        if (hightScore < level) {
            hightScore = level;
            h3.innerHTML = `Congrats &#128522; You Achive New Hightest Scored  <b> ${hightScore} </b>`
        }
        restart();
    }
}


function btnPress() {
    let btn = this;
    btnflash(btn);
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    chechAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

function restart() {
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() { document.querySelector("body").style.backgroundColor = "white"; }, 180);

}