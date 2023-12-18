const myCanvas = document.getElementById("myCanvas")

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

const ctx = myCanvas.getContext("2d")

console.log(ctx)

ctx.fillStyle = "white"
ctx.fillRect(10, 190, 40, 60)


ctx.fillStyle = "blue"
ctx.fillRect(100, 10, 100, 300)

ctx.fillStyle = "green"
ctx.fillRect(300, 100, 100, 300)