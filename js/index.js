let boxes = document.querySelectorAll(".box");
let coinsA = document.getElementById("coins");
let start = document.getElementById("startBtn");
let minesInput = document.getElementById("minesInput");
let restartBtn = document.getElementById("restartBtn");

let coins = 0;
let spelActief = false;
let mineIndex = []

function beginSpel () {
    const minesInputNmbr = Number(minesInput.value);
    if (minesInputNmbr >= 7, minesInputNmbr <= 0) {
        alert ("Min 1 Mine -- Max 6 Mines.")
    } else {
        spelActief = true;
        restartBtn.style.display = "block";
        console.log (minesInputNmbr);
        mineIndex = []

        boxes.forEach(box => {
        box.className = "coverd-box"
        box.addEventListener("click", clickBox);
        })

        while (mineIndex.length < minesInputNmbr) {
            const randomMine = Math.floor(Math.random() * boxes.length)

            if (!mineIndex.includes(randomMine)) {
                mineIndex.push(randomMine)
            }
        }
    }
}

function clickBox(e) {
    if (!spelActief) return

    const index = Number(e.target.id)

    if (mineIndex.includes(index)) {
        e.target.className = "wrong-box"
        coins --
        coinsA.textContent = `Coins: ${coins}`
        spelActief = false
    } else {
        e.target.className = "correct-box"
        coins ++
        coinsA.textContent = `Coins: ${coins}`
    }

    }

function restart() {
    spelActief = false;
    mineIndex = []

    boxes.forEach(box => {
        box.classList.remove("coverd-box");
        box.classList.remove("correct-box");
        box.classList.remove("wrong-box");
        box.classList.add("box");
        box.removeEventListener("click", clickBox)
    })

    restartBtn.style.display = "none";
}

start.addEventListener("click", beginSpel);
restartBtn.addEventListener("click", restart);