var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var incress = document.getElementById("incress");
var descress = document.getElementById("descress");
var sizeEl = document.getElementById("size");
var clearEl = document.getElementById("clear");
var colorEl  = document.querySelector(".colorEl");
var eraseEl  = document.querySelector(".eraseEl");
var size = 20
var color ='black';
var isPressed = false;
var x 
var y 

canvas.addEventListener("mousedown", (e)=> {
    isPressed = true;

    var x = e.offsetX;
    var y = e.offsetY;

})

canvas.addEventListener("mouseup", (e)=> {
    isPressed = false;

      x = undefined;
      y = undefined;

})

canvas.addEventListener("mousemove", (e)=> {
     if(isPressed){
        var x2 = e.offsetX;
        var y2 = e.offsetY;

        drawCircle(x2,y2)

        drawLine(x,y,x2,y2) 
        x = x2
        y = y2

     }
     
})
function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1,y1,x2,y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke()


    
}

function updateSize() {
    sizeEl.innerHTML = size;
}

incress.addEventListener("click",function () {
    size += 5
    if(size > 50){
        size = 50;
    }

    updateSize()
})

descress.addEventListener("click",function () {
    size -= 5
    if(size < 5){
        size = 5;
    }

    updateSize()
})


clearEl.addEventListener("click",function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

colorEl.addEventListener("change",function () {
   color = this.value;
})

eraseEl.addEventListener("click",function () {
    color = "white";
})