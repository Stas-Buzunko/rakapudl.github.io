var gameBoard = $('.app table');
var selectedWord = "";

// Координаты последнего выбранного блока
var lastSelect = {};
var firstSelect = true;
var winCount = 0;

var level = animals.board;
var levelName = "colors";
var words = animals.words;
var solve = animals.solve;

if(level[0].length > 10) {
  $(".app table").css("zoom", ".9");
}

// Отрисовываем уровень по заданному массиву
function drawBoard(level) {
    for (var i = 0; i < level.length; i++) { // Строки
        $('.app table').append("<tr></tr>");
        for (var j = 0; j < level[i].length; j++) { // Столбцы
            $('.app table tr').last().append("<td y=" + i + " x=" + j + ">" + level[i][j] + "</td>");
        }
    }

    $('.app').append("<div class='wordBlock'><img class='name'src='Img/" + name + "'></div>");
    // блок со списком слов 
    words.forEach(function(item, i, arr) { 
     $('.wordBlock').append('<div><span><div class = "audio" id='+ item +'></div><span>' + item + '</span></span></div>');
    });
        
};


drawBoard(level);

$("td").mousedown(function() {
    // проверяем выбран ли элемент
    var selected = $(this).hasClass("select");
    var finded = $(this).hasClass("finded");

    if (!selected) {
        // если первая буква в слове
        if (firstSelect) {
            selectChar(this);
            checkWord()
            firstSelect = false;
        } else {
            var thisX = $(this).attr("x");
            var thisY = $(this).attr("y");
            var lastX = Number(lastSelect.x);
            var lastY = Number(lastSelect.y);
            // проверяем, является ли следующая бувка продолжением слова
            if (thisX == lastX && thisY == lastY - 1 || thisX == lastX && thisY == lastY + 1 || thisY == lastY && thisX == lastX - 1 || thisY == lastY && thisX == lastX + 1) {
                selectChar(this);
                checkWord();
            } else {
                resetSelect();
                selectChar(this);
                checkWord()
            }
        }

    } else {
        resetSelect();
    }
});

// выбираем букву
function selectChar(element) {
    $(element).addClass("select");
    lastSelectCoordGet($(element));
    addChar($(element));
};

// снимаем все выдиления
function resetSelect() {
    $(".select").removeClass("select");
    selectedWord = "";
    lastSelect.x = "";
    lastSelect.y = "";
}

// сохраняем координаты последнего выбранного элемента
function lastSelectCoordGet(element) {
    lastSelect.x = $(element).attr("x");
    lastSelect.y = $(element).attr("y");
};

// записываем выбранныую букву
function addChar(element) {
    selectedWord += $(element).text();
}

// проверяем соответствие слова 
function checkWord() {
    words.forEach(function(item, i, arr) {
    if (selectedWord == item) {
            $(".select").addClass("finded");
            $(".wordBlock div span span:contains('" + String(item) + "')").addClass('finded-word');
            resetSelect()
        }
         }); 
}

// Сброс уровня 

$(".reset").click(function() {
  resetSelect();
  $("td").removeClass('finded');
  $(".wordBlock div span span").removeClass('finded-word');
  winCount = 0;
});

// Воспроизвидение звука при нажатии на кнопку 

$(".audio").click(function() {
  var name = $(this).attr( "id" );
  var audio = new Audio('js/' + levelName + '/' +name.toLowerCase() + '.mp3');
  audio.play();
});

$(".solve").click(function() {
  solveFind();
});

function solveFind() {
  $(".wordBlock div span span").addClass('finded-word');
  for(var i = 0; i<solve.length; i+=4) {
    if(solve[i] == solve[i+2]) {
      for(var a = 0; a<= solve[i+3]-solve[i+1]; a++) {
        $("td[x=" + solve[i] +"][y=" + (solve[i+1]+a) + "]").addClass('finded');
      }
    } else {
        for(var a = 0; a<= solve[i+2]-solve[i]; a++) {
          $("td[x=" + (solve[i]+a) +"][y=" + (solve[i+1]) + "]").addClass('finded');
        }
    }
  }
}