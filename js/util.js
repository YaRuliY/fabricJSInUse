var addtext = function(){
    var fontSelect = document.getElementById("font-select");
    var fontSize;
    if(document.getElementById('size-input').value > 0)
        fontSize = document.getElementById('size-input').value;
    else fontSize = 35;

    var text = new fabric.Text(document.getElementById('text-input').value, {
        left: 100,
        top: 100,
        fontFamily: fontSelect.options[fontSelect.selectedIndex].text,
        fontSize: fontSize
    });
    canvas.add(text);
    clearInputs();
};

var edittext = function(){
    if(canvas.getActiveObject() != null){
        canvas.getActiveObject().text = document.getElementById('text-input').value;
        canvas.getActiveObject().fontSize = document.getElementById('size-input').value;
        canvas.renderAll();
    }
};

var doDelete = function (event) {
    if (event.keyCode === 46){
        if(canvas.getActiveObject() != null){
            canvas.remove(canvas.getActiveObject());
            canvas.renderAll();
            clearInputs();
        }
    }
};

var clearInputs = function () {
    document.getElementById('text-input').value = '';
    document.getElementById('size-input').value = '';
};