(function eyeChange() {
    "use strict";
    var leftEye  = document.getElementById("left-eye"),
        rightEye = document.getElementById("right-eye"),
        math     = Math.random() * 2,
        ceil     = Math.ceil(math);
    
    if ((ceil) === 1) {
        leftEye.style.backgroundColor = "#961f1f";
        rightEye.style.backgroundColor = "#93E400";
    } else {
        rightEye.style.backgroundColor = "#961f1f";
        leftEye.style.backgroundColor = "#93E400";
    }
    
    window.setTimeout(eyeChange, 250);
}());


(function mouthChange() {
    "use strict";
    var mouth    = document.getElementById("mouth"),
        lower    = document.getElementById("lower"),
        teeth    = document.getElementById("teeth"),
        back     = document.getElementById("back-teeth"),
        math     = Math.random() * 2,
        ceil     = Math.ceil(math);
    
    if ((ceil) === 1) {
        mouth.style.height   = "35px";
        mouth.style.transition = "all 0.5s ease-in-out";
        back.style.height = "25px";
        back.style.transition = "all 0.5s ease-in-out";
        lower.style.marginTop = "10px";
        lower.style.transition = "all 0.5s ease-in-out";
    } else {
        mouth.style.height = "25px";
        back.style.height = "15px";
        lower.style.marginTop = "0px";
    }
    
    window.setTimeout(mouthChange, 500);
}());

var clk = 1;
(function pulse() {
    "use strict";
    
    // some variables //
    var firstPin      = document.getElementById("first-pin"),
        secondPin     = document.getElementById("second-pin"),
        thirdPin      = document.getElementById("third-pin"),
        forthPin      = document.getElementById("forth-pin");
    
    // clock pulse //
    clk += 1;
    window.setTimeout(pulse, 300);
    if (clk > 4) {
        clk = 1;
    }
    
    // conditions //
    if (clk === 1) {
        firstPin.style.backgroundColor = "red";
        secondPin.style.backgroundColor = "blue";
        thirdPin.style.backgroundColor = "blue";
        forthPin.style.backgroundColor = "blue";
    } else if (clk === 2) {
        firstPin.style.backgroundColor = "blue";
        secondPin.style.backgroundColor = "red";
        thirdPin.style.backgroundColor = "blue";
        forthPin.style.backgroundColor = "blue";
    } else if (clk === 3) {
        firstPin.style.backgroundColor = "blue";
        secondPin.style.backgroundColor = "blue";
        thirdPin.style.backgroundColor = "red";
        forthPin.style.backgroundColor = "blue";
    } else {
        firstPin.style.backgroundColor = "blue";
        secondPin.style.backgroundColor = "blue";
        thirdPin.style.backgroundColor = "blue";
        forthPin.style.backgroundColor = "red";
    }
}());