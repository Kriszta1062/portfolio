var gameArea;
var N;
var count = 0;
var music;
var finish =0;

$( document ).ready(function() {
    gameArea = $('#gameArea'); 
    setupOnClickListeners(); 
    $('#win').hide();
    $('#loose').hide();
    $('#list').hide();    
    $('#gameArea').hide();
    music = new Audio("audio/krtek.MP3"); 
});

function setupOnClickListeners() {
    $("#newGameNehez").on('click', function() { 
        newGameNehez();
    });

    $("#newGameKonnyu").on('click', function() {
      newGameKonnyu();
    });
}

function gameBoard(rows, cols, rand){ 
    gameArea.html("");
    finish = 0;
    for (var i = 0; i < rows; i++){
        var row = $('<div>').addClass('row');
        for(var j = 0; j <cols; j++){
            var col = $('<div>');
            col.addClass('col closed');
            let cellId = 'cell-' + i + '-' + j;
            col.attr('id', cellId);
        
            if(Math.random() < rand){
                finish++;
                col.addClass('vakond');
                col.on('click', function() {
                    onVakondClick(cellId);
                });
            } else {
                col.on('click', function() {
                    onOtherClick(cellId, cols);
                });
            }
            col.appendTo(row);
        }
        row.appendTo(gameArea);
    }
    $('#gameArea').show();
    $('#loose').hide();
    $('#win').hide();
    $('#list').hide();
    $('#count').text(count);
}


function onVakondClick(cellId) {

    console.log("onVakondClick");
    music.pause();
    points();
    $('audio#loosesound')[0].play();
    $('#' + cellId).removeClass("closed");
    setTimeout(function(){
        $('#gameArea').hide();
        $('#loose').show();
    }, 1000);
}

function onOtherClick(cellId, cols) {

    console.log("onOtherClick");
    let cell = $('#' + cellId);
    $('audio#shovel')[0].play();
    if (cell.hasClass("closed")) {
        count++;
        $('#count').text(count);
        cell.removeClass("closed");
    }
    winCheck(cols);
}

function winCheck(cols){
    if(count == (cols*cols)-finish){
        music.pause();
        points();
        $('audio#applause')[0].play();
        $('#gameArea').hide();
        $('#win').show();

    }
}


function newGameKonnyu(){
    $('#list').hide();
    N =10;
    count = 0;
    var rand = 0.1;
    gameBoard(N, N, rand);
    music.play();
}

function newGameNehez(){
    $('#list').hide();
    count = 0;
    N = 15;
    var rand = 0.2;
    gameBoard(N, N, rand);
    music.play();
}

function points() {
    var player = prompt("Adja meg a nevét:", "anonymus");
    localStorage.setItem(player, count);
    fill_toplist();
    $('#list').show();

}

function fill_toplist() {
    $('#list').html('');
    var data = [];
    for (var i = 0; i < localStorage.length; i++) {
        data[i] = [localStorage.key(i), parseInt(localStorage.getItem(localStorage.key(i)))];
    }

    data.sort(function (a, b) {
        return b[1] - a[1];
    });

    for (let act_data of data.keys()) {
        if (act_data < 10) {
            $('#list').append(data[act_data][0] + ' - ' + data[act_data][1] + '<br><hr>');
        }
    }
}
