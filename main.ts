let ZAR = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showString("MERHABA!")
})
input.onGesture(Gesture.Shake, function () {
    ZAR = randint(1, 6)
    if (ZAR == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (ZAR == 2) {
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . . .
            # # . . .
            # # . . .
            `)
    } else if (ZAR == 3) {
        basic.showLeds(`
            . . . # #
            . . # # #
            . # # # .
            # # # . .
            # # . . .
            `)
    } else if (ZAR == 4) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # # . # #
            # # . # #
            `)
    } else if (ZAR == 5) {
        basic.showLeds(`
            # # . # #
            # # # # #
            . # # # .
            # # # # #
            # # . # #
            `)
    } else if (ZAR == 6) {
        basic.showLeds(`
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            `)
    }
})
basic.forever(function () {
	
})
