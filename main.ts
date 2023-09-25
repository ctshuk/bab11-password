radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 123 || (receivedNumber == 456 || receivedNumber == 789)) {
        edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "saya") {
        edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
