makerbit.connectUltrasonicDistanceSensor(DigitalPin.P1, DigitalPin.P2)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
let intensidade = 0
music.playMelody("C E D G F C5 E C ", 500)
music.rest(music.beat(BeatFraction.Whole))
music.playMelody("A C5 F A D F C E ", 500)
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
    if (makerbit.getUltrasonicDistance(DistanceUnit.CM) >= 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    } else if (makerbit.getUltrasonicDistance(DistanceUnit.CM) < 10) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 60)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showString("Help!")
    }
})
