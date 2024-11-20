const sayitBtn = document.getElementById("btn")
const text = document.getElementById("text")

function speakthetext(e) {
    const utterence = new SpeechSynthesisUtterance(text.value)
    speechSynthesis.speak(utterence)
}
sayitBtn.addEventListener("click", speakthetext);