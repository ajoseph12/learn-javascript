// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
let divContainer = document.getElementById('container')

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function renderImages(imgs) {
    let listItems = ""
    for (let i = 0; i < imgs.length; i++) {
        listItems += `
            <img alt="Employee in the company" class='team-img' src="${imgs[i]}">
        `
    }
    divContainer.innerHTML = listItems
}

renderImages(imgs)