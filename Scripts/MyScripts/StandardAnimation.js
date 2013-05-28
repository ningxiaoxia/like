var matrixPool = new Array();
var isMatrixEnd = false;
var isPoolEnd = false;
var currentRowIndex = 0;
var currentColumnIndex = -1;
var pageCurrentRowIndex = 20;
var pageCurrentColumnIndex = 20;
var binaryMatrixArray = new Array();

function calculatePageStartIndex() {

}

function initMatrixPool() {
   
}


function start() {
    initMatrixPool();
    binaryMatrixArray = parseStrings(matrixPool.pop(), "-", ",");
    var timer = setInterval(function () {
        if (isMatrixEnd) {
            for (var i = 0; i < rowCount; i++) {
                for (var j = 0; j < columnCount; j++) {
                    var selector = "#r" + i + "c" + j;
                    $(selector).css("background-color", "#485050");
                }
            }
            if (isPoolEnd) {
                clearInterval(timer);
                popupAfter(5000);
                $.fn.snow();
            }
            else {
                var str = matrixPool.pop();
                if (typeof (str) == "undefined" && matrixPool.length == 0) {
                    isPoolEnd = true;
                    return;
                }
                binaryMatrixArray = parseStrings(str,"-", ",");
                isMatrixEnd = false;
                currentRowIndex = 0;
                currentColumnIndex = -1;
                pageCurrentRowIndex = 20;
                pageCurrentColumnIndex = 20;
                continueAnimation();

            }
        }
        else {
            continueAnimation();
        }

    }, 70);

}



function continueAnimation() {

    if (currentRowIndex == binaryMatrixArray.length && currentColumnIndex == binaryMatrixArray[0].length) {
        isMatrixEnd = true;

    }
    else {
        do {
            if (typeof (binaryMatrixArray[currentRowIndex]) != "undefined" && currentColumnIndex == binaryMatrixArray[currentRowIndex].length) {
                currentRowIndex++;
                currentColumnIndex = 0;
                pageCurrentRowIndex++;
                pageCurrentColumnIndex = 21;
            }
            else {
                currentColumnIndex += 1;
                pageCurrentColumnIndex += 1;

            }
        } while (typeof (binaryMatrixArray[currentRowIndex]) != "undefined" && binaryMatrixArray[currentRowIndex][currentColumnIndex] == 0);

    }
    var cellSelector = "#r" + pageCurrentRowIndex + "c" + pageCurrentColumnIndex;
    if (typeof (binaryMatrixArray[currentRowIndex]) != "undefined" && binaryMatrixArray[currentRowIndex][currentColumnIndex] == 1) {
        $(cellSelector).css("background-color", "#ffffff");
    }
    else {
        $(cellSelector).css("background-color", "#485050");
    }
}

function popupAfter(milliseconds) {
    $("#popup").css("display", "block");
    setTimeout(function () {

        $("#popup").fadeIn(3000);
    }, milliseconds);
}
