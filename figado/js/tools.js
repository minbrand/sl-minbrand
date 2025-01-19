window.onscroll = function() {
    var stickyOffer = document.getElementById("sticky-offer");
    var triggerPoint = document.getElementById("trigger-point").offsetTop;
    
    if (window.pageYOffset >= triggerPoint) {
        stickyOffer.classList.remove("hidden");
    } else {
        stickyOffer.classList.add("hidden");
    }
};

// Temporizador simples para o contador
var countdown = document.getElementById("countdown");
var time = 9 * 60 + 11; // 9 minutos e 11 segundos

var interval = setInterval(function() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    
    countdown.textContent = 
        ("0" + minutes).slice(-2) + ":" + 
        ("0" + seconds).slice(-2);
    
    if (time <= 0) {
        clearInterval(interval);
    }
    
    time--;
}, 1000);
