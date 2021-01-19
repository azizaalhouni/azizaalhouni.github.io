function myFunction(){
    var myVar = setInterval(myTimer, 500);

    //var text = document.getElementById("textSize").style.fontSize;

    //document.getElementById("textSize").style.fontSize = parseInt(text)+ 10 + "pt";
    //text.style.fontSize = "24pt";

    function myTimer() {
        var text = document.getElementById("textSize").style.fontSize;
  document.getElementById("textSize").style.fontSize = parseInt(text)+ 10 + "pt";
}
}
function fontStyle(){
    var text = document.getElementById("textSize");

    if(document.getElementById("bling").checked== true){

    text.style.fontWeight="bold";
    text.style.color ="green";
    text.style.textDecoration = "underline";
    }
    if(document.getElementById("bling").checked== false){
        text.style.fontWeight = "normal";
        text.style.color ="black";
    text.style.textDecoration = "none";
    }

}
