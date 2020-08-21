input.onButtonPressed(Button.A, function () {
    robotbit.MotorRun(robotbit.Motors.M1A, 100)
    basic.pause(1000)
    robotbit.MotorStop(robotbit.Motors.M1A)
})
function CheckTemperature () {
    Temperature = input.temperature()
    basic.showNumber(input.temperature())
    if (Temperature > 18 || Temperature < 36) {
        robotbit.Servo(robotbit.Servos.S1, (Temperature - 18) * 10)
    }
}
input.onButtonPressed(Button.B, function () {
    robotbit.MotorRun(robotbit.Motors.M2A, 100)
    basic.pause(1000)
    robotbit.MotorStop(robotbit.Motors.M2A)
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
basic.forever(function () {
    if (Math.abs(input.acceleration(Dimension.X)) > 150 && Math.abs(input.acceleration(Dimension.Y)) == 150) {
        robotbit.MotorRun(robotbit.Motors.M2A, 0.125 * input.acceleration(Dimension.Z) + 0.125 * input.acceleration(Dimension.X))
        robotbit.MotorRun(robotbit.Motors.M1A, 0.125 * input.acceleration(Dimension.Z) + 0.125 * input.acceleration(Dimension.X))
    }
})
