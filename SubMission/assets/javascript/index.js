function move() {
    let bar1 = document.getElementById("bar1");
    let bar2 = document.getElementById("bar2");
    let bar3 = document.getElementById("bar3");

    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            if (width <= 85) {
                bar1.style.width = width + '%';
            }
            if (width <= 75) {
                bar2.style.width = width + '%';
            }
            if (width <= 65) {
                bar3.style.width = width + '%';
            }
        }
    }
}


// =========SLIDE-CMS=========
var slideCMS = 1;
cmsSlides(slideCMS);

// Thumbnail image controls
function currentCms(n) {
    cmsSlides(slideCMS = n);
}

function cmsSlides(n) {
    var i;
    var slides = document.getElementsByClassName("cms-image");
    var dots = document.getElementsByClassName("dot-cms");
    if (n > slides.length) { slideCMS = 1 }
    if (n < 1) { slideCMS = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-cms", "");
    }
    slides[slideCMS - 1].style.display = "block";
    dots[slideCMS - 1].className += " active-cms";
}

//=======SLIDE-PMS=======
var slidePMS = 1;
pmsSlides(slidePMS);

// Thumbnail image controls
function currentPms(n) {
    pmsSlides(slidePMS = n);
}

function pmsSlides(n) {
    var i;
    var slides = document.getElementsByClassName("pms-image");
    var dots = document.getElementsByClassName("dot-pms");
    if (n > slides.length) { slidePMS = 1 }
    if (n < 1) { slidePMS = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-pms", "");
    }
    slides[slidePMS - 1].style.display = "block";
    dots[slidePMS - 1].className += " active-pms";
}



//=======SLIDE CHAT======= 
var slideChat = 1;
chatSlides(slideChat);

// Thumbnail image controls
function currentChat(n) {
    chatSlides(slideChat = n);
}

function chatSlides(n) {
    var i;
    var slides = document.getElementsByClassName("chat-image");
    var dots = document.getElementsByClassName("dot-chat");
    if (n > slides.length) { slideChat = 1 }
    if (n < 1) { slideChat = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-chat", "");
    }
    slides[slideChat - 1].style.display = "block";
    dots[slideChat - 1].className += " active-chat";
}