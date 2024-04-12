input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
        let tenpo = 0
        antera_t += -1
        basic.showNumber(tenpo)
        basic.pause(100)
    }
    music.play(music.stringPlayable("E D F G B C5 A B ", 26), music.PlaybackMode.UntilDone)
})
let antera_t = 0
basic.showNumber(10)
let defina = 10
basic.forever(function () {
    basic.showIcon(IconNames.Sad)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
