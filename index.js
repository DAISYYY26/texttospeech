const sayitBtn = document.getElementById("btn")
const text = document.getElementById("text")
const pause=document.getElementById("pausebtn")
const resume=document.getElementById("resumebtn")

function speakthetext(e) {
    const utterence = new SpeechSynthesisUtterance(text.value)
    utterence.onend=(event)=>{
        alert("Speech ended")
    }
    speechSynthesis.speak(utterence)
}
function pausefn(){
    speechSynthesis.pause();
}
function resumefn(){
    speechSynthesis.resume();
}
sayitBtn.addEventListener("click", speakthetext);
pause.addEventListener("click",pausefn)
resume.addEventListener("click",resumefn)



