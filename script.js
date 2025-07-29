// script.js - All JS from the previous <script> block
// Cursor-based background animation
const canvas = document.querySelector('.cursor-anim');
const ctx = canvas.getContext('2d');
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
let mouse = {x: window.innerWidth/2, y: window.innerHeight/2};
window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});
function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // Draw animated circles following cursor
    for(let i=0;i<6;i++){
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 60+i*30+Math.sin(Date.now()/400+i)*12, 0, 2*Math.PI);
        ctx.strokeStyle = `rgba(${12+i*40},${200-i*30},${255-i*20},${0.12-i*0.015})`;
        ctx.lineWidth = 6-i;
        ctx.stroke();
    }
    requestAnimationFrame(draw);
}
draw();
