music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    basic.showIcon(IconNames.Sad)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    for (let index = 0; index < 10; index++) {
        defina += -1
        basic.showNumber(defina)
        basic.pause(100)
    }
    music.play(music.stringPlayable("E D F G B C5 A B ", 26), music.PlaybackMode.UntilDone)
})
let defina = 0
defina = 10
basic.showNumber(defina)
basic.forever(function () {
	
})
