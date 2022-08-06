let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function rearrange() {
    for (let idx = 0; idx < fruit.length; idx++) {
        if (fruit[idx] === "🍎") {
            appleShelf.textContent += "🍎 "
        }
        else if (fruit[idx] === "🍊") {
            orangeShelf.textContent += "🍊 "
        }
    }
}

rearrange()