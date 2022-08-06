let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function return_random() {
    return hands[Math.floor( Math.random()*hands.length)]
}

console.log(return_random())