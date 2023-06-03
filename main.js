const DrumKits = document.querySelectorAll(".drums")


for (let i = 0; i < DrumKits.length; i++) {
    DrumKits[i].addEventListener("click", function () {
        
        switch (DrumKits[i].innerHTML) {
            case "Q":
                const audio = new Audio('tom-1.mp3')
                audio.play()
                break
            case "W":
                const audio1 = new Audio('tom-2.mp3')
                audio1.play()
                break
            case "E":
                const audio2 = new Audio('tom-3.mp3')
                audio2.play()
                break
            case "R":
                const audio3 = new Audio('tom-4.mp3')
                audio3.play()
                break
            case "T":
                const audio4 = new Audio('crash.mp3')
                audio4.play()
                break
            case "Y":
                const audio5 = new Audio('kick-bass.mp3')
                audio5.play()
                break
            case "U":
                const audio6 = new Audio('snare.mp3')
                audio6.play()
                break
        }

    })
}

document.addEventListener("keydown", function (event) {
    console.log(event.key)
})