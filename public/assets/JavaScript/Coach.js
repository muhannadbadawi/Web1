var b = localStorage.getItem("myValue");
var myImg = localStorage.getItem("myImage");

function HomeButton() {
    document.getElementById("Setting").style.opacity = "0";
    document.getElementById("Setting").style.zIndex = "0";
    document.getElementById("Players").style.opacity = "0";
    document.getElementById("Players").style.zIndex = "0";
    document.getElementById("About").style.opacity = "0";
    document.getElementById("About").style.zIndex = "0";
}

function SettingButton() {
    document.getElementById("Setting").style.opacity = "1";
    document.getElementById("Setting").style.zIndex = "1";
    document.getElementById("Players").style.opacity = "0";
    document.getElementById("Players").style.zIndex = "0";
    document.getElementById("About").style.opacity = "0";
    document.getElementById("About").style.zIndex = "0";
}

function PlayersButton() {
    document.getElementById("Setting").style.opacity = "0";
    document.getElementById("Setting").style.zIndex = "0";
    document.getElementById("Players").style.opacity = "1";
    document.getElementById("Players").style.zIndex = "1";
    document.getElementById("About").style.opacity = "0";
    document.getElementById("About").style.zIndex = "0";
}

function AboutButton() {
    document.getElementById("Setting").style.opacity = "0";
    document.getElementById("Setting").style.zIndex = "0";
    document.getElementById("Players").style.opacity = "0";
    document.getElementById("Players").style.zIndex = "0";
    document.getElementById("About").style.opacity = "1";
    document.getElementById("About").style.zIndex = "1";
}

function x() {

    document.getElementById("CoachId").innerHTML = "Coach ID : " + b;
    document.getElementById("imgId").innerHTML = '<img id="ProfileImg" src="' + myImg + '"/>';
}
x();

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }
        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = function(e) {
            displayImgData(e.target.result)
        };

        reader.readAsDataURL(f);
    }
}

function displayImgData(imgData) {
    var a = imgData;
    localStorage.setItem("myImage", a);
    var span = document.createElement('span');
    span.innerHTML = '<img class="thumb" src="' + imgData + '"/>';
    document.getElementById('imgId').innerHTML = "";
    document.getElementById('imgId').insertBefore(span, null);
}


function deleteImages() {
    localStorage.removeItem("myImage");
    files.value = null;
    document.getElementById('imgId').innerHTML = "";
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
document.getElementById('deleteImgs').addEventListener("click", deleteImages);