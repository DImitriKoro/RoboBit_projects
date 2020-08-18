input.onButtonPressed(Button.A, function () {
    for (let A = 0; A <= 10; A++) {
        basic.pause(1000)
        CheckTemperature()
    }
})
function CheckTemperature () {
    Temperature = input.temperature()
    basic.showNumber(input.temperature())
    if (Temperature > 18 || Temperature < 36) {
        robotbit.Servo(robotbit.Servos.S1, (Temperature - 18) * 10)
    }
}
input.onButtonPressed(Button.AB, function () {
    robotbit.Servo(robotbit.Servos.S1, 180)
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
basic.showString("Hello boy!")
