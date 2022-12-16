maqueen.ltEvent(maqueen.Patrol1.PatrolRight, maqueen.Voltage.High, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 16)
})
IR.IR_callbackUser(function (message) {
    music.playMelody("C5 G B A F A C5 B ", 300)
    basic.showString("message")
})
maqueen.ltEvent(maqueen.Patrol1.PatrolLeft, maqueen.Voltage.High, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 16)
})
for (let index = 0; index < 4; index++) {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.pause(100)
}
basic.forever(function () {
	
})
