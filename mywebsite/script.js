
const video = document.getElementById("myVideo");

function enableSound() {
    video.muted = false;
    video.play();

  
    document.body.removeEventListener("click", enableSound);
    document.body.removeEventListener("touchstart", enableSound);
}

document.body.addEventListener("click", enableSound);
document.body.addEventListener("touchstart", enableSound);

