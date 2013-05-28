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
   matrixPool.push("0810,0810,0810,1020,1020,2244,7efc,0408,0810,1020,2040,7efc,0000,0004,fffe,0000-0810,0810,0810,1020,1020,2244,7efc,0408,0810,1020,2040,7efc,0000,0004,fffe,0000-0080,4044,2ffe,1008,03fc,0208,0a08,1208,23f8,e248,2040,2150,224c,2444,2940,0080-0110,3ff8,0820,0444,fffe,0010,1ff8,1010,1ff0,1010,1ff0,0200,5184,5092,9012,0ff0");//丝丝凉意
    matrixPool.push("1040,1040,20a0,20a0,4910,fa0e,1404,23f8,4000,f808,43fc,0208,1a08,e208,43f8,0208-1100,1100,1100,23fc,2204,6408,a840,2040,2150,2148,224c,2444,2040,2040,2140,2080-0920,0928,7ffc,0920,0920,7ffe,4102,8104,1ff0,1110,1110,1110,1110,1150,1120,0100-0100,0100,0108,7ffc,0100,2110,1930,0944,fffe,0380,0540,0930,311e,c104,0100,0100"); //给你带来
    matrixPool.push("0008,3ffc,2100,2208,2ffc,2808,2ff8,2808,2ff8,2080,4490,8988,0900,2894,2812,47f2-0080,4040,3048,17fc,0010,0210,f120,10a0,1040,1040,10a0,1110,1210,2806,47fc,0000-1ff0,0100,7ffe,4102,9d74,0100,1d70,0108,3ffc,0008,0008,1ff8,0008,0008,3ff8,0008-1080,1088,2498,44a0,fec0,0284,7c84,447c,7c00,4488,4498,7ca0,44c0,4482,5482,487e"); //愿这雪能
    matrixPool.push("7ffc,0200,1ff0,1010,1ff0,1010,1ff0,1010,1ff0,0800,0ff0,1420,2240,4180,0660,381c-0010,1ff8,1010,1010,1010,1010,1010,1ff0,1010,1010,1010,1010,1010,1ff0,1010,0000-0008,3ffc,2108,2108,3ff8,2108,2108,2108,3ff8,0100,0108,7ffc,0100,0104,fffe,0000"); //夏日里
    matrixPool.push("0200,0200,0204,fffe,0400,0440,0840,0850,13f8,3040,5040,9040,1040,1044,17fe,1000-0078,3f80,0100,0100,1110,0d30,0540,0104,fffe,0100,0100,0100,0100,0100,0500,0200-1100,1100,1100,23fc,2204,6408,a840,2040,2150,2148,224c,2444,2040,2040,2140,2080");//在乎你
    matrixPool.push("0080,7848,4ffc,5000,5110,50a0,6004,57fe,4808,4bfc,6a08,5208,4208,4208,43f8,4208-0840,0840,0a48,1150,1040,37fc,3040,5040,9044,1ffe,1040,1040,1040,1040,1040,1040-0820,0448,7ffc,0100,3ff8,0200,fffe,0410,0ff8,1810,2ff0,c810,0ff0,0810,0ff0,0810-1100,1100,1100,23fc,2204,6408,a840,2040,2150,2148,224c,2444,2040,2040,2140,2080");//陪伴着你
    matrixPool.push("1080,1088,2498,44a0,fec0,0284,7c84,447c,7c00,4488,4498,7ca0,44c0,4482,5482,487e");//能够
    matrixPool.push("0000,0010,1ff8,1010,1010,1010,1010,1010,1ff0,1010,0000,0440,0c20,1018,200c,4004-0830,06c0,0100,06c0,3a38,0200,fffe,0480,0888,1ffc,2888,c888,08a8,0890,0080,0080-1004,0a7e,ff44,207c,2044,267c,3844,208c,0000,3ff8,0100,1ff0,0100,0104,fffe,0000");//只希望
    matrixPool.push("0808,fdfc,1000,1000,1004,13fe,7c90,1090,1090,1090,1090,1c90,f112,4112,020e,0400-0210,4114,201e,2fe0,8240,623e,2384,0288,1288,22fe,e288,2488,2488,2888,31a8,2010-0040,0050,7e48,0240,43fe,2440,1444,1444,0848,1448,1250,2220,4060,8092,010a,0206");//玩游戏
    matrixPool.push("0200,0700,7800,0804,0afe,ff84,0884,1884,1c84,2a84,2a84,4884,88fc,0884,0800,0800-1100,1100,1100,23fc,2204,6408,a840,2040,2150,2148,224c,2444,2040,2040,2140,2080-0000,0000,0000,0000,0000,0000,0004,fffe,0000,0000,0000,0000,0000,0000,0000,0000-0800,0808,08fc,7e08,0808,0808,fef8,0888,2880,2e84,2884,287c,2800,5806,8ffc,0000"); //和你一起
    matrixPool.push("1010,0818,0420,0448,7ffc,0100,0100,0104,fffe,0100,0280,0280,0440,0830,300e,c004-0200,0100,0080,00c0,0880,0800,2808,2804,2802,4802,8802,0800,0810,0810,07f0,0000-0820,0448,7ffc,0100,3ff8,0200,fffe,0410,0ff8,1810,2ff0,c810,0ff0,0810,0ff0,0810-1100,1100,1100,23fc,2204,6408,a840,2040,2150,2148,224c,2444,2040,2040,2140,2080");//关心着你
    matrixPool.push("0200,0200,0204,fffe,0400,0440,0840,0850,13f8,3040,5040,9040,1040,1044,17fe,1000-0120,7fb0,4928,6b20,5d24,7ffe,0820,7f20,0820,0f20,7820,0550,5550,5488,910e,0204-0120,7fb0,4928,6b20,5d24,7ffe,0820,7f20,0820,0f20,7820,0550,5550,5488,910e,0204-0040,2040,2240,2240,2248,227c,fbc8,2648,2248,2248,2268,2250,3a42,e202,41fe,0000");//在默默地
    matrixPool.push("0000,0000,0000,0000,0000,0000,0004,fffe,0000,0000,0000,0000,0000,0000,0000,0000-0100,0100,0280,0440,0820,1110,210e,c104,0100,0100,0100,0100,0100,0100,0100,0100-0100,0100,0100,0100,0100,0100,0100,0280,0280,0280,0440,0440,0820,1010,200e,4004");//一个人
    matrixPool.push("1010,0820,0440,0010,1ff8,1010,1010,1010,1ff0,1010,0200,5184,5092,9012,0ff0,0000-0200,0204,fffe,0400,0410,0ff8,0810,1810,2ff0,4810,8810,0ff0,0810,0810,0850,0820");//总有
    matrixPool.push("0020,3ff0,0200,0200,0200,0208,7ffc,0280,0280,0480,0480,0880,0882,1082,207e,4000-0040,4040,30a0,10a0,0110,020e,f404,1100,1110,1130,11c0,1100,1504,1904,10fc,0000-0800,0804,0ffe,1008,1048,33e8,5248,9248,1248,1248,13c8,1248,1008,1008,1028,1010-0008,0408,7e08,4408,47fe,4408,4408,7c88,4448,4448,4408,4408,7c08,4448,0028,0010");//无论何时
    matrixPool.push("0000,4004,2ffe,2040,0040,e080,2080,21a0,2298,248c,2884,2080,2080,5006,8ffc,0000-1000,11fc,1004,1008,fc10,2420,2424,27fe,2420,4420,2820,1020,2820,4420,84a0,0040-0010,0bf8,7c10,4910,4910,4910,4910,4914,49fe,4804,4824,7ff4,4804,0004,0014,0008");//还好吗
    matrixPool.push("1ff0,1010,1ff0,1010,1ff0,0004,fffe,2200,3ffc,2284,3e88,2250,3e20,e258,028e,0304-0008,401c,33e0,1200,0200,0208,f3fc,1220,1220,1220,1220,1420,1020,2820,4406,03fc");//最近
    matrixPool.push("0080,0888,7cfc,4f80,4850,4822,78d2,4b0e,4800,4bfc,48a0,78a0,4922,0122,021e,0c00-1ff0,0100,7ffe,5112,8d64,1110,3ef8,2208,3ef8,2000,3ef8,2088,3e50,2020,20de,2304")
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
