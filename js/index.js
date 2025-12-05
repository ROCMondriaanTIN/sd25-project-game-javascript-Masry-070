let boxes = document.querySelectorAll(".box");
let coinsA = document.getElementById("coins");
let start = document.getElementById("startBtn");
let minesInput = document.getElementById("minesInput");
let restartBtn = document.getElementById("restartBtn");

let coins = 0;

function beginSpel () {
    boxes.forEach(box => {
        box.classList.remove("box");
        box.classList.add("coverd-box");

        let coverdBX = document.querySelectorAll(".coverd-box");
        coverdBX.forEach(bx => {
        bx.addEventListener("click", clickBox)
})

    })
        restartBtn.style.display = "block";
        let minesInputNmbr = Number(minesInput.value);
        if (minesInputNmbr >= 7) {
            alert ("Je kan maximaal 6 Mines hebben.")
        } else {
            console.log(minesInputNmbr);
        }
        
}

function clickBox(e) {
        e.target.classList.remove("coverd-box");
        e.target.classList.add("correct-box");
        coins++
        coinsA.textContent = `Coins: ${coins}`
        console.log(e.target.id);
    }

function restart() {
    boxes.forEach(box => {
        box.classList.remove("coverd-box");
        box.classList.remove("correct-box");
        box.classList.remove("wrong-box");
        box.classList.add("box");
        restartBtn.style.display = "none";
    })
}

start.addEventListener("click", beginSpel);
restartBtn.addEventListener("click", restart);