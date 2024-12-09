let degrees = input.compassHeading()
if (degrees < 45) {
    basic.showString("L")
} else if (degrees < 135) {
    basic.showString("J")
}
