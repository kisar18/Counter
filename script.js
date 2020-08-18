var addButton = document.getElementById('add-count')
var lowerButton = document.getElementById('lower-count')
var number = document.getElementsByClassName('counter')[0]
var value = 0


addButton.addEventListener('click', () => {value += 1
    number.innerHTML = value
    changeColor()
})

lowerButton.addEventListener('click', () => {value -= 1
    number.innerHTML = value
    changeColor()
})

function changeColor() {
    if (value > 0) {
        number.style.color = "green"
    }
    else if (value === 0) {
        number.style.color = "#333333"
    }
    else {
        number.style.color = "red"
    }
}