var addtext = function(){
    var fontSelect = document.getElementById("font-select");
    var colorSelect = document.getElementById("color-select");
    var fontSize = (document.getElementById('size-input').value > 0) ?
        document.getElementById('size-input').value : 35;

    var text = new fabric.Text(document.getElementById('text-input').value, {
        left: 100,
        top: 100,
        fontFamily: fontSelect.options[fontSelect.selectedIndex].value,
        fontSize: fontSize,
        fill: colorSelect.options[colorSelect.selectedIndex].value
    });
    canvas.add(text);
    canvas.renderAll();
    clearInputs();
};

var edittext = function(){
    if(canvas.getActiveObject() != null){
        var fontSelect = document.getElementById("font-select");
        var colorSelect = document.getElementById("color-select");
        canvas.getActiveObject().text = document.getElementById('text-input').value;
        canvas.getActiveObject().fontFamily = fontSelect.options[fontSelect.selectedIndex].value;
        canvas.getActiveObject().fontSize = document.getElementById('size-input').value;
        canvas.getActiveObject().fill = colorSelect.options[colorSelect.selectedIndex].value;
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
    canvas.renderAll();
};

var colorHash = {
    'red': 0,
    'blue': 1,
    'green': 2,
    'yellow': 3
};

var fontHash = {
    'Comfortaa': 0,
    'EB Garamond': 1,
    'Jura': 2,
    'Open Sans': 3,
    'Open Sans Condensed': 4,
    'Oranienbaum': 5,
    'Roboto': 6,
    'Roboto Mono': 7,
    'Regular': 8,
    "Courier New": 9
};

document.addEventListener("keydown", deletetext, false);
document.addEventListener("DOMContentLoaded", function () {
    var colorSelect = document.getElementById("color-select");
    var colorOptions = Object.keys(colorHash);
    for(var i in colorOptions){
        var el = document.createElement("option");
        el.textContent = colorOptions[i];
        el.value = colorOptions[i];
        colorSelect.appendChild(el);
    }

    var fontSelect = document.getElementById("font-select");
    var fontOptions = Object.keys(fontHash);
    for(var j in fontOptions){
        el = document.createElement("option");
        el.textContent = fontOptions[j];
        el.value = fontOptions[j];
        fontSelect.appendChild(el);
    }

    document.getElementById('add-text').addEventListener('click', addtext, false);
    document.getElementById('edit-text').addEventListener('click', edittext, false);
});