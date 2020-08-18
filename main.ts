input.onButtonPressed(Button.A, function () {
    for (let A = 0; A <= 180; A++) {
        robotbit.Servo(robotbit.Servos.S2, A)
        basic.showNumber(A)
        basic.pause(200)
        A += 15
        robotbit.rgb().showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
        range.rotate(1)
        music.ringTone(A)
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    for (let A = 0; A <= 180; A++) {
        robotbit.Servo(robotbit.Servos.S1, A)
        basic.showNumber(A)
        basic.pause(200)
        A += 20
        range.showRainbow(randint(0, 255), randint(0, 255))
    }
})
let range: neopixel.Strip = null
let A = 4
robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
robotbit.rgb().setBrightness(5)
robotbit.Servo(robotbit.Servos.S1, A)
range = robotbit.rgb().range(0, 4)
music.ringTone(0)
robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
basic.showString("Hello boy!")
