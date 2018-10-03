function flipOut(id){

    $(id).css({
        "transform-style": "preserve-3d",
          "transform": "rotateY(-90deg)"
    });

    new Audio("coin.wav").play();

}