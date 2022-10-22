radio.onReceivedString(function (receivedString) {
    serial.writeNumber(Math.round(control.millis() / 1000))
    serial.writeString(" ")
    serial.writeLine(receivedString)
})
radio.setGroup(1)
serial.writeLine("Iniciando estación tierra CANSAT 1.0")
basic.forever(function () {
	
})
