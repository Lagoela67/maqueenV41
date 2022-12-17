let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
music.playMelody("C C D E B A F D ", 300)
basic.pause(500)
strip.setBrightness(255)
strip.showRainbow(1, 360)
basic.pause(1000)
strip.clear()
basic.forever(function () {
	
})
