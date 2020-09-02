const tones = new Audio('../audio/starttones.wav')

const startBtn = document.getElementById('startBtn')

startBtn.addEventListener('click', playSound)


function playSound(e){
    tones.play(),
    document.getElementById("lights").style.display="",
    setTimeout(function () {
        window.location = "/messages";
    }, 7000)
}




