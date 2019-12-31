const RADIUS = 20;

function degToRad(degrees) {
    var result = Math.PI / 180 * degrees;
    return result;
}

var canvas = document.querySelector('canvas#pointer');
var ctx = canvas.getContext('2d');

var x = 50;
var y = 50;

function canvasDraw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f00";
    ctx.beginPath();
    ctx.arc(x, y, RADIUS, 0, degToRad(360), true);
    ctx.fill();
  }

canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;
document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;

canvas.onclick = function() {
    canvas.requestPointerLock();
}

document.addEventListener('pointerlockchange', lockChangeAlert, false);
document.addEventListener('mozpointerlockchange', lockChangeAlert, false);

function lockChangeAlert() {
    if(document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) {
        console.log("The pointer lock status is now locked");
        document.addEventListener("mousemove", updatePosition, false)
    } else {
        console.log("The pointer lock status is now un-locked");
        document.removeEventListener("mousemove", updatePosition, false)
    }
}

var tracker = document.getElementById('tracker');

var animation;
function updatePosition(e) {
  x += e.movementX;
  y += e.movementY;
  if (x > canvas.width + RADIUS) {
    x = -RADIUS;
  }
  if (y > canvas.height + RADIUS) {
    y = -RADIUS;
  }  
  if (x < -RADIUS) {
    x = canvas.width + RADIUS;
  }
  if (y < -RADIUS) {
    y = canvas.height + RADIUS;
  }
  tracker.textContent = "X position: " + x + ", Y position: " + y;

  if (!animation) {
    animation = requestAnimationFrame(function() {
      animation = null;
      canvasDraw();
    });
  }
}