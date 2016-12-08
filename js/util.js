var addtext = function(){
    var fontSelect = document.getElementById("font-select");
    var fontSize;
    var fontColor;
    if(document.getElementById('size-input').value > 0)
        fontSize = document.getElementById('size-input').value;
    else fontSize = 35;
    if(document.getElementById('color-input').value != '')
        fontColor = document.getElementById('size-input').value;
    else fontColor = 'red';

    var text = new fabric.Text(document.getElementById('text-input').value, {
        left: 100,
        top: 100,
        fontFamily: fontSelect.options[fontSelect.selectedIndex].value,
        fontSize: fontSize,
        fill: fontColor
    });
    canvas.add(text);
    canvas.renderAll();
    clearInputs();
};

var edittext = function(){
    if(canvas.getActiveObject() != null){
        var fontSelect = document.getElementById("font-select");
        canvas.getActiveObject().text = document.getElementById('text-input').value;
        canvas.getActiveObject().fontFamily = fontSelect.options[fontSelect.selectedIndex].value;
        canvas.getActiveObject().fontSize = document.getElementById('size-input').value;
        canvas.getActiveObject().fill = document.getElementById('color-input').value;
    }
    canvas.renderAll();
};

var deletetext = function (event) {
    if (event.keyCode === 46){
        if(canvas.getActiveObject() != null){
            canvas.remove(canvas.getActiveObject());
            canvas.renderAll();
            clearInputs();
        }
    }
};

var clearInputs = function () {
    for(var i = 0;i < document.getElementsByTagName('input').length; i++) {
        document.getElementsByTagName('input')[i].value = '';
    }
};