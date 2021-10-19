function getNewColor(){
    let symbol = "123456789ABCDEF";
    let color = '#';

    for(let i=0;i<6;i++){
        color = color + symbol[Math.floor(Math.random()*14)];
    }

    document.getElementById("main").style.background = color;
    document.getElementById("color").innerHTML = `Hex Color : ${color}`;
}