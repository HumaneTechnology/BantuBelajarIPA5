function flipOut(id){

    console.log(id);

    $(id).css({
        "transform-style": "preserve-3d",
          "transform": "rotateY(-90deg)"
    });

    new Audio("coin.wav").play();

}

function newLevel(from, to, text){

    var id_from, id_to;

    if (from == 1) id_from = "master-container";
    id_to = "level"+to+"-container";

   var audio = new Audio("complete.mp3");
   audio.play();

   setTimeout(function(){
       $("#level-transition-menu").fadeIn(0);
       $("#level-transition-cover").fadeIn(0);
   }, 2800);

   document.getElementById("next-level-button").addEventListener("click", function(){
       console.log(id_from);
       $("#"+id_from).fadeOut(0);
       $("#level-transition-menu").fadeOut(0);
       $("#level-transition-cover").fadeOut(0);
       $("#"+id_to).fadeIn(0);
   });

   document.getElementById("level-report").innerHTML = text;
   document.getElementById("level_text").innerHTML = "Sukses! Anda lulus level " + from;

   if (from == 4){
       $("#next-level-button").fadeOut(0);
   }

}