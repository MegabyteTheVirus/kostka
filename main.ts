let Kostka = 0
input.onGesture(Gesture.Shake, function () {
    Kostka = randint(0, 6)
    if (Kostka == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (Kostka == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # . .
            . . . . .
            . . . . .
            `)
    }
    if (Kostka == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    }
    if (Kostka == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # #
            . . . . .
            . . . . .
            `)
    }
    if (Kostka == 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    if (Kostka == 6) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . # . .
            . . . . .
            `)
    }
})
