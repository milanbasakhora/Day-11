


const canvas = document.getElementById("canvas");


function colorChanger(color){
    canvas.style.backgroundColor= color;
}

function randomColor(){
    let red = Math.round(Math.random()*256);
    let green = Math.round(Math.random()*256);
    let blue = Math.round(Math.random()*256);

    let random = `rgb(${red},${green}, ${blue})`;
    canvas.style.backgroundColor = random;
}