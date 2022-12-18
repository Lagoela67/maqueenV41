makerbit.connectUltrasonicDistanceSensor(DigitalPin.P1, DigitalPin.P2)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
let intensidade = 0
music.playMelody("E B C5 A B G A F ", 400)
basic.pause(500)
for (let index = 0; index < 5; index++) {
    strip.setBrightness(intensidade)
    strip.showBarGraph(0, 255)
    intensidade += intensidade + 1
    strip.shift(1)
    basic.pause(200)
}
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    basic.showNumber(makerbit.getUltrasonicDistance(DistanceUnit.CM))
    if (makerbit.getUltrasonicDistance(DistanceUnit.CM) < 10) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
    } else if (makerbit.getUltrasonicDistance(DistanceUnit.CM) >= 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showString("Help!")
    }
})
