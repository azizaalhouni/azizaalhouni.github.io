window.onload = () =>{
    myFunction();

};


    function myFunction(){
        document.getElementById('animation').onchange = animation;
        document.getElementById('size').onchange = sizeFont;
        document.getElementById('submit').onclick = move;
    }
    function animation() {
        document.getElementById("mytextarea").value = ANIMATIONS[document.getElementById('animation').value];
    }
    function sizeFont(){
        document.getElementById("mytextarea").style.fontSize =
        SIZE[document.getElementById('size').value];
    }
    function move(){
        setInterval(animate,250);
    }
    function animate(){
        document.getElementById("mytextarea").value =
        ANIMATIONS[document.getElementById('animation').value];;
    }

   
