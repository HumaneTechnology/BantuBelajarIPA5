$("#diamond, #oil, #water").draggable({start: changeSize});
$("#level2-dropzone").droppable();
$("#oil").css({"top": "68%"});

var onZone = "";

$("#level2-dropzone").on("drop", function(event, ui){

    var element_id = ui.draggable.attr("id");
    onZone = element_id;

    score += 1000;

    document.getElementById("scoreboard_level2").innerHTML = "Skor: " + score;
   
    $("#level2-laser").css({
        "background-image": "url(scripts/"+element_id+".png)"
    });

    $("#"+element_id).css({
        "position": "fixed",
        "top": "26.727272727272727%",
        "left": "58.285714285714285%"
    });
    playCoin();

    if (score == 4000) newLevel(2, 3, "Level ini menunjukkan bahwa cahaya <b>dapat dibiaskan</b>. Setiap benda memiliki efek pembiasan yang berbeda; seberapa banyaknya efek ini diukur dengan apa yang disebut <b>indeks pembiasan</b>. Jika sebuah benda memiliki indeks pembiasan besar, maka benda tersebut membelokkan cahaya ke sudut yang lebih kecil, dan sebaliknya. Maka, bisa dilihat bahwa berlian memiliki indeks yang besar karena cahaya dapat dibelokkan kepada sudut yang lebih kecil, diikuti oleh minyak dan air, untuk mencapai target.");

});

function changeSize(){
    $(this).css({
        "height": "41%",
        "width": "26%"
    });
}

$("#oil").mousedown(function(){ clearZone(); });
$("#water").mousedown(function(){ clearZone(); });

function clearZone(){
    $("#"+onZone).fadeOut(0);
    $("#level2-laser").css({
        "background-image": "url(scripts/Normal.png)"
    });
}
