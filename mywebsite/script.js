document.addEventListener("pointerdown", () => {
    const video = document.getElementById("myVideo");
    video.muted = false;
    video.play();
}, { once: true });



