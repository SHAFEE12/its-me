document.addEventListener("DOMContentLoaded", () => {

    const video = document.getElementById("myVideo");

    function enableSound() {
        video.muted = false;
        video.play();
    }

    document.addEventListener("click", enableSound, { once: true });
    document.addEventListener("touchstart", enableSound, { once: true });

});





