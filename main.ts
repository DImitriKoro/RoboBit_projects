input.onButtonPressed(Button.A, function () {
    for (let A = 0; A <= 10; A++) {
        basic.pause(1000)
        CheckTemperature()
    }
})
function CheckTemperature () {
    Temperature = input.temperature()
    robotbit.Servo(robotbit.Servos.S1, Temperature + 13)
    basic.showNumber(input.temperature())
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    for (let A = 0; A <= 180; A++) {
        robotbit.Servo(robotbit.Servos.S1, A)
        basic.showNumber(A)
        basic.pause(200)
        A += 20
        robotbit.rgb().showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
    }
})
let Temperature = 0
let A = 4
robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
robotbit.rgb().setBrightness(5)
robotbit.Servo(robotbit.Servos.S1, A)
robotbit.Servo(robotbit.Servos.S2, A)
let range = robotbit.rgb().range(0, 4)
music.ringTone(0)
robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
basic.showString("Hello boy!")
