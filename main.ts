input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(2 * (index + 1))
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(2 * index)
    }
})
