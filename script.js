const numOfDice = document.getElementById("numOfDice")
const rollDice = document.getElementById("rollDice")
const result = document.getElementById("result")

numOfDice.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        rollDice.click();
    }
});

rollDice.onclick = function () {
    const dice = Number(numOfDice.value)
    const images = []
    if (dice <= 0) {
        result.innerText = `Please enter a valid number of dice`
    } else {
        for (let i = 0; i < dice; i++) {
            const diceVal = Math.floor(Math.random() * 5) + 1
            images.push(`<img src="./images/${diceVal}.png" alt="Dice ${diceVal}">`)
        }
        result.innerHTML = images.join("")
    }
}
