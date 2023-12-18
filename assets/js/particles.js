const myCanvas = document.getElementById("myCanvas")

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

const ctx = myCanvas.getContext("2d")

console.log(ctx)

ctx.fillStyle = "white"
/* ctx.lineWidth = 5; */

ctx.fillRect(10, 190, 40, 60)

ctx.fillStyle = "blue"
/* ctx.lineWidth = 5; */

ctx.fillRect(10, 190, 40, 60)