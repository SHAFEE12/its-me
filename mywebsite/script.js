
document.addEventListener("DOMContentLoaded", () => {

    const video = document.getElementById("myVideo");

    function enableSound() {
        video.muted = false;
        video.play();
    }

 
    document.addEventListener("click", enableSound, { once: true });
    document.addEventListener("touchstart", enableSound, { once: true });

});

let yes = document.getElementById("yes");
let message = document.getElementById("message");
let audio = document.getElementById("myaudio");
let no = document.getElementById("no");
let container = document.querySelector(".container");





no.addEventListener("mouseover", () => {

    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;

    let buttonWidth = no.offsetWidth;
    let buttonHeight = no.offsetHeight;

    let randomX = Math.random() * (containerWidth - buttonWidth);
    let randomY = Math.random() * (containerHeight - buttonHeight);

    no.style.left = randomX + "px";
    no.style.top = randomY + "px";
});

yes.addEventListener("click", () => {
    
    message.innerText = "I love you too 💖";


    setTimeout(() => {
        message.innerText = "Wait... I want to say something ❤️";
    }, 2000);


    setTimeout(() => {
        audio.play();
    }, 4000);

});


let video = document.getElementById("myVideo");

yes.addEventListener("click", () => {
    video.pause();   
});


document.addEventListener("DOMContentLoaded", function () {

    const openCamBtn = document.getElementById("openCam");
    const cameraVideo = document.getElementById("camera");
    const questionText = document.getElementById("question");
        const bgVideo = document.getElementById("myVideo");

    openCamBtn.addEventListener("click", async function () {

             if (myVideo) {
            bgVideo.pause();
            bgVideo.currentTime = 0;
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true
            });

            cameraVideo.srcObject = stream;
            cameraVideo.style.display = "block";

       
            setTimeout(() => {
                questionText.innerText = "See? Chand bhi sharma jaaye 😍💖";
            }, 2000);

        } catch (error) {
            questionText.innerText = "Camera permission denied 😢";
        }

    });

});





