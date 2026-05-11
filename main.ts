fwdSensors.initializeLcd()
/**
 * Modify & Create: If you press a button, move the message to a new quadrant.
 */
/**
 * On quadrant 1, display the text: "Quad 1", repeat for quadrants 2, 3, 4.
 * 
 * If your string is too long, ">8 chars" will display instead of your text.
 */
basic.forever(function () {
    fwdSensors.lcd1.printQuadrantString("Quad 1", 1)
    fwdSensors.lcd1.printQuadrantString("Quad 2", 2)
    fwdSensors.lcd1.printQuadrantString("Quad 3", 3)
    fwdSensors.lcd1.printQuadrantString("Quad 4", 4)
})
