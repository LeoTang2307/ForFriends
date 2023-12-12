let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let squaresArray = [];

function addBlue() {
    if (squaresArray.length < 3) {
        squaresArray.push("blue");
        console.log(squaresArray)
    }
    draw()
}

function addRed() {
    if (squaresArray.length < 3) {
        squaresArray.push("red");
        console.log(squaresArray)
    }
    draw()
}

function draw() {
    // First square
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (squaresArray[0]) {
        ctx.fillStyle = squaresArray[0];
    }
    else {
        ctx.fillStyle = "white";
    }
    ctx.fillRect(0, 0, 100, 100);
    ctx.strokeStyle = "white";
    ctx.strokeRect(0, 0, 100, 100);
    ctx.lineWidth = 3;

    // Second square
    ctx.clearRect(100, 0, canvas.width, canvas.height);
    if (squaresArray[1]) {
        ctx.fillStyle = squaresArray[1];
    }
    else {
        ctx.fillStyle = "white";
    }
    ctx.fillRect(100, 0, 100, 100);
    ctx.strokeStyle = "white";
    ctx.strokeRect(100, 0, 100, 100);
    ctx.lineWidth = 3;

    // Third square
    ctx.clearRect(200, 0, canvas.width, canvas.height);
    if (squaresArray[2]) {
        ctx.fillStyle = squaresArray[2];
    }
    else {
        ctx.fillStyle = "white";
    }
    ctx.fillRect(200, 0, 100, 100);
    ctx.strokeStyle = "white";
    ctx.strokeRect(200, 0, 100, 100);
    ctx.lineWidth = 3;
}

function canvasClicked(event) {
    // Get the mouse position
    mouse_x = event.clientX
    // Get the square based on the mouse position
    if (mouse_x < 100) {
        if (squaresArray[0]) {
            squaresArray[0] = "yellow";
        }
    }
    else if (100 <= mouse_x && mouse_x < 200) {
        if (squaresArray[1]) {
            squaresArray[1] = "yellow";
        }
    }
    else {
        if (squaresArray[2]) {
            squaresArray[2] = "yellow";
        }
    }
    console.log(squaresArray)

    // Update canvas
    draw()
}

canvas.addEventListener("click", canvasClicked);