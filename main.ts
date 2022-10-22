radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
})
radio.setGroup(1)
serial.writeLine("Iniciando estación tierra")
basic.forever(function () {
	
})
