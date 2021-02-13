input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    my_hand = randint(1, 3)
    if (my_hand == siss_vs_siss_index) {
        siss_vs_siss.showImage(0)
        basic.pause(1000)
        basic.showString("É")
        basic.clearScreen()
    }
    if (my_hand == siss_vs_rock_index) {
        siss_vs_rock.showImage(0)
        basic.pause(1000)
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
        basic.showString("P")
    }
    if (my_hand == siss_vs_paper_index) {
        siss_vs_paper.showImage(0)
        basic.pause(1000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.pause(1000)
        basic.showString("G")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    my_hand = randint(7, 9)
    if (my_hand == paper_vs_paper_index) {
        paper_vs_paper.showImage(0)
        basic.pause(1000)
        basic.showString("É")
        basic.clearScreen()
    }
    if (my_hand == paper_vs_siss_index) {
        paper_vs_siss.showImage(0)
        basic.pause(1000)
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
        basic.showString("P")
    }
    if (my_hand == paper_vs_rock_index) {
        paper_vs_rock.showImage(0)
        basic.pause(1000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.pause(1000)
        basic.showString("G")
    }
})
input.onButtonPressed(Button.B, function () {
    let rock_vs_siss_index = 0
    let rock_vs_paper_index = 0
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    my_hand = randint(4, 6)
    if (my_hand == rock_vs_rock_index) {
        rock_vs_rock.showImage(0)
        basic.pause(1000)
        basic.showString("É")
        basic.clearScreen()
    }
    if (my_hand == rock_vs_paper_index) {
        rock_vs_paper.showImage(0)
        basic.pause(1000)
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
        basic.showString("P")
    }
    if (my_hand == rock_vs_siss_index) {
        rock_vs_siss.showImage(0)
        basic.pause(1000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.pause(1000)
        basic.showString("G")
    }
})
let my_hand = 0
let paper_vs_rock: Image = null
let paper_vs_siss: Image = null
let paper_vs_paper: Image = null
let paper_vs_rock_index = 0
let paper_vs_siss_index = 0
let paper_vs_paper_index = 0
let rock_vs_siss: Image = null
let rock_vs_paper: Image = null
let rock_vs_rock: Image = null
let rock_vs_rock_index = 0
let siss_vs_paper: Image = null
let siss_vs_rock: Image = null
let siss_vs_siss: Image = null
let siss_vs_paper_index = 0
let siss_vs_rock_index = 0
let siss_vs_siss_index = 0
siss_vs_siss_index = 1
siss_vs_rock_index = 2
siss_vs_paper_index = 3
siss_vs_siss = images.createImage(`
    . # . # .
    # . . . #
    . . . . .
    # . . . #
    . # . # .
    `)
siss_vs_rock = images.createImage(`
    . # . . .
    # . . # #
    . . . # #
    # . . # #
    . # . . .
    `)
siss_vs_paper = images.createImage(`
    . # . . #
    # . . # .
    . . . # .
    # . . # .
    . # . . #
    `)
rock_vs_rock_index = 4
siss_vs_paper_index = 5
siss_vs_siss_index = 6
rock_vs_rock = images.createImage(`
    . . . . .
    # # . # #
    # # . # #
    # # . # #
    . . . . .
    `)
rock_vs_paper = images.createImage(`
    . . . . #
    # # . # .
    # # . # .
    # # . # .
    . . . . #
    `)
rock_vs_siss = images.createImage(`
    . . . # .
    # # . . #
    # # . . .
    # # . . #
    . . . # .
    `)
paper_vs_paper_index = 7
paper_vs_siss_index = 8
paper_vs_rock_index = 9
paper_vs_paper = images.createImage(`
    # . . . #
    . # . # .
    . # . # .
    . # . # .
    # . . . #
    `)
paper_vs_siss = images.createImage(`
    # . . # .
    . # . . #
    . # . . .
    . # . . #
    # . . # .
    `)
paper_vs_rock = images.createImage(`
    # . . . .
    . # . # #
    . # . # #
    . # . # #
    # . . . .
    `)
