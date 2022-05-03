var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "red";
var width = 2;
var mouseEvent = "";
var mx,my;
canvas.addEventListener("mousedown", md);
function md(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent  = "mousedown";
}
canvas.addEventListener("mouseup", mu);
function mu(e) {
    mouseEvent  = "mouseup";
}
canvas.addEventListener("mouseleave", ml);
function ml(e) {
    mouseEvent  = "mouseleave";
}

canvas.addEventListener("mousemove", mm);
function mm(e) {
    var mcx = e.clientX - canvas.offsetLeft ;
    var mcy = e.clientY - canvas.offsetTop ;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width ;
        ctx.moveTo(mx,my);
        ctx.lineTo(mcx,mcy);
        ctx.stroke()
    }
    mx = mcx;
    my = mcy;
}

function abc(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

width = screen.width ;
var height = screen.height ;
var Nwidth = width - 300 ; 
var Nheight = height - 70 ;

if (width < 992){
    document.getElementById("myCanvas").width = Nwidth ;
    document.getElementById("myCanvas").height = Nheight ;
    document.body.style.overflow = hidden ;
}
var touchEvent = "";
var tx, ty;

canvas.addEventListener("touchstart", ts);

function ts(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    touchEvent  = "touchstart";
    tx = e.touches[0].clientX - canvas.offsetLeft;
    ty = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", tm);

function tm(e) {
    var tcx = e.touches[0].clientX - canvas.offsetLeft ;
    var tcy = e.touches[0].clientY - canvas.offsetTop ;
    if (touchEvent == "touchstart") {
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width ;
        ctx.moveTo(tx,ty);
        ctx.lineTo(tcx,tcy);
        ctx.stroke();
    }
    tx = tcx;
    ty = tcy;
}



