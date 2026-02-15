
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







const noBtn = document.getElementById("no");


function moveButton() {

    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}


noBtn.addEventListener("mouseover", moveButton);


noBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();  
    moveButton();
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
            questionText.innerText = "Camera permission denied ";
        }

    });

});



const yesBtn = document.getElementById("yes");


yesBtn.addEventListener("click", function () {

    setTimeout(() => {

        message.innerText = "Wait... Call is forwarding to my parents ";
setTimeout(() => {

            message.innerText = "I am joking 😁";
       
        setTimeout(() => {
            message.innerText = "";
        }, 4000);

        }, 4000);
        


    }, 12000);

});




