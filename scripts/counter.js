//load variable
var src_img = document.getElementById('myImage');
var src_video = document.getElementById('myVideo');
var playB = document.getElementById('playB');
var stopB = document.getElementById('stopB');

playB.addEventListener("click", ()=>{
    playB.setAttribute("hidden", "true");
    stopB.removeAttribute("hidden");
    src_img.setAttribute("hidden", "true");
    src_video.removeAttribute("hidden");
    src_video.play();
    src_audio.pause();
});

stopB.addEventListener("click", ()=>{
    stopB.setAttribute("hidden", "true");
    playB.removeAttribute("hidden");
    src_video.setAttribute("hidden", "true");
    src_img.removeAttribute("hidden");
    src_video.pause();
    src_audio.play();

});


let i = 1;
let timerId;
function countdown() {
    img_path = 'img/angular/'+i+'.png';
    src_img.setAttribute("src", img_path)
    i++;
    if (i==8){
       i =  1;
    }
}

//clear intervall wird verwendet um die Zeit zu stoppen
//setInterval fürht die Methodecountdown alle 2 seconden
timerId = setInterval(countdown, 2000);


