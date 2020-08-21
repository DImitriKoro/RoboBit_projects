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
let V_acceleration_x = 0
let v_acceleration_y = 0
robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
robotbit.rgb().setBrightness(5)
robotbit.Servo(robotbit.Servos.S1, A)
robotbit.Servo(robotbit.Servos.S2, A)
let range = robotbit.rgb().range(0, 4)
music.ringTone(0)
basic.showString("Hello boy!")
basic.forever(function () {
    v_acceleration_y = input.acceleration(Dimension.Y)
    robotbit.MotorRun(robotbit.Motors.M1A, 0.25 * v_acceleration_y)
    basic.pause(50)
})
