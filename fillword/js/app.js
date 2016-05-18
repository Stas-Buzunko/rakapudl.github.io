var gameBoard = $('.app table');
var selectedWord = "";

// Координаты последнего выбранного блока
var lastSelect = {};
var firstSelect = true;

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
    for (var a in words) {
        $('.wordBlock').append('<div><span><div class = "audio"></div><span>' + a + '</span></span></div>');
    }
};


drawBoard(level1);

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
    for (var i in words) {
        if (selectedWord == i) {
            $(".select").addClass("finded");
            $(".wordBlock div span span:contains('" + String(i) + "')").addClass('finded-word').css("color", i);
            resetSelect()
        }
    }
}