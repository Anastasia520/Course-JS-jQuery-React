function getColor() {
    return $('#selectorColor').val();
}

function changeColor() {
    $("#pyramid").children().each(function (index, value){
        $(this).css({"background-color" : getColor()});
    });   

    drawPyramid();
}

function drawPyramid() {
    let height = $("#highRange").val();
    let pyramid = document.getElementById("pyramid");

    while(pyramid.lastChild) {
        pyramid.lastChild.remove();
    }
    
    let link = document.createElement("link");
    link.href = "pyramid.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    for (var row = 0; row < height; row++) {
        let containerDiv = document.createElement("div");
        containerDiv.style.display = "flex"

        var numBricks = row + 2;
        var numSpaces = height - row - 1;
        var rowBlocks = [];

        for (var i = 0; i < numSpaces; i++) {
            let block = document.createElement("div");
            block.className += ' space';
            rowBlocks.push(block);
        }

        for (var i = 0; i < numBricks; i++) {
            let block = document.createElement("div");
            block.className += ' brick';
            block.style.setProperty("background-color", getColor());
            rowBlocks.push(block);
        }

        rowBlocks.forEach(e => {
            containerDiv.appendChild(e);
        });

        pyramid.appendChild(containerDiv);
    }
}

$("#selectorColor").on('click', function(event) {
    changeColor();
    drawPyramid();
});

$("#highRange").on('input', function(event) {
    drawPyramid();
});