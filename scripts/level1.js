var isOn = true;
var visibility = "hidden";
var global_mousepos = 0;
var score = 0;
var hit = false;
var level1_start = false;

setTimeout(function(){ $(".block-text").fadeOut(); level1_start = true;}, 2500);

document.getElementById("master-container").onmousemove = function(event){

    if (!level1_start) return;

    event = window.event;

    var mouseX = event.pageX;
    var mouseY = event.pageY;

    if (isOn) global_mousepos = mouseY;

    console.log("MouseX: " + mouseX + "% | MouseY: " + mouseY +"%");
    
    $("#cursor").css({
        "top": mouseY - $("#cursor").height()/2,
        "visibility": "visible"
    });

    $("#positionback").css({
        "visibility": "visible",
        "top": mouseY - $("#positionback").height()/2
        });

    $("#laserbeam").css({
        "top": mouseY - $("#positionback").height()/2
    });

    var target_top = $("#glass-block").position().top;
    var target_bottom = $("#glass-block").height() + target_top;

    if (between(mouseY, target_top, target_bottom)){
        
        if (!hit){ 
            score += 1000; 
            flipOut("#target2"); 
            newLevel(1, 2, "Level ini menunjukkan bahwa cahaya dapat menembus <b>benda bening</b>. Cahaya dari laser tidak dapat mencapai target yang berada di belakang balok kayu dan logam, karena kedua benda tersebut tidak bersifat bening. Tetapi, ketika cahaya laser diarahkan ke target yang berada di belakang balok kaca, cahaya tersebut dapat menembus kaca yang bening tersebut dan mencapai target.");
        }
        
        console.log("mouse is in range");

        $("#laserbeam").css({
            "left": "14%",
            "width": "420%"
        });

        hit = true;

        document.getElementById("scoreboard_level1").innerHTML = "Skor: " + score;

    } else {
        $("#laserbeam").css({
            "left": "14%",
            "width": "0%"
        });          
    }

    console.log(mouseY);

}

document.getElementById("master-container").onmousedown = function(){
     $("#laserbeam").css({
        "visibility": "visible"
     })
}

document.getElementById("master-container").onmouseup = function(){
    $("#laserbeam").css({
        "visiblity": "hidden"
    })
}

function between(x, min, max) {
    return x >= min && x <= max;
}