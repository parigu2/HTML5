var canvas = document.getElementById('stockGraph');
var canvas1 = document.getElementById('scrap');
var canvas2 = document.getElementById('scrap1');
var canvas3 = document.getElementById('scrap2');
var canvas4 = document.getElementById('scrap3');
var canvas5 = document.getElementById('scrap4');
var canvas6 = document.getElementById('scrap5');
var canvas7 = document.getElementById('scrap6');
var canvas8 = document.getElementById('scrap7');
var canvas9 = document.getElementById('scrap8');
var canvas10 = document.getElementById('scrap9');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var ctx1 = canvas1.getContext('2d');
    var ctx2 = canvas2.getContext('2d');
    var ctx3 = canvas3.getContext('2d');
    var ctx4 = canvas4.getContext('2d');
    var ctx5 = canvas5.getContext('2d');
    var ctx6 = canvas6.getContext('2d');
    var ctx7 = canvas7.getContext('2d');
    var ctx8 = canvas8.getContext('2d');
    var ctx9 = canvas9.getContext('2d');
    var ctx10 = canvas10.getContext('2d');

    //red rectangle
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    //navy rectangle
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 80, 50);

    ctx.strokeRect(29, 29, 80, 50);
    ctx.clearRect(20, 20, 20, 20);

    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(120,25);
    ctx.lineTo(100,25);
    ctx.fill();

    //smile
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();

    // Filled triangle
    ctx1.beginPath();
    ctx1.moveTo(25, 25);
    ctx1.lineTo(105, 25);
    ctx1.lineTo(25, 105);
    ctx1.fill();

    // Stroked triangle
    ctx1.beginPath();
    ctx1.moveTo(125, 125);
    ctx1.lineTo(125, 45);
    ctx1.lineTo(45, 125);
    ctx1.closePath();
    ctx1.stroke();

    // Quadratric curves example
    ctx2.beginPath();
    ctx2.moveTo(75, 25);
    ctx2.quadraticCurveTo(25, 25, 25, 62.5);
    ctx2.quadraticCurveTo(25, 100, 50, 100);
    ctx2.quadraticCurveTo(50, 120, 30, 125);
    ctx2.quadraticCurveTo(60, 120, 65, 100);
    ctx2.quadraticCurveTo(125, 100, 125, 62.5);
    ctx2.quadraticCurveTo(125, 25, 75, 25);
    ctx2.stroke();

    ctx3.beginPath();
    ctx3.moveTo(75, 40);
    ctx3.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx3.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx3.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx3.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx3.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx3.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx3.fill();

    //color fillstyle
    for (var i = 0; i < 60; i++) {
        for (var j = 0; j < 60; j++) {
            ctx4.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i/10) + ', ' + Math.floor(255 - 42.5 * j/10) + ', 0)';
            ctx4.fillRect(j * 25/10, i * 25/10, 25/5, 25/5);
        }
    }

    // set transparency value
    // ctx.globalAlpha = 0.2;

    //gradient
    var radgrad = ctx5.createRadialGradient(45, 45, 10, 52, 50, 30);
    radgrad.addColorStop(0, '#A7D30C');
    radgrad.addColorStop(0.9, '#019F62');
    radgrad.addColorStop(1, 'rgba(1, 159, 98, 0)');
    
    var radgrad2 = ctx5.createRadialGradient(105, 105, 20, 112, 120, 50);
    radgrad2.addColorStop(0, '#FF5F98');
    radgrad2.addColorStop(0.75, '#FF0188');
    radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');
  
    var radgrad3 = ctx5.createRadialGradient(95, 15, 15, 102, 20, 40);
    radgrad3.addColorStop(0, '#00C9FF');
    radgrad3.addColorStop(0.8, '#00B5E2');
    radgrad3.addColorStop(1, 'rgba(0, 201, 255, 0)');
  
    var radgrad4 = ctx5.createRadialGradient(0,150, 50, 0, 140, 90);
    radgrad4.addColorStop(0, '#F4F201');
    radgrad4.addColorStop(0.8, '#E4C700');
    radgrad4.addColorStop(1, 'rgba(228, 199, 0, 0)');
    
    // draw shapes
    ctx5.fillStyle = radgrad4;
    ctx5.fillRect(0, 0, 150, 150);
    ctx5.fillStyle = radgrad3;
    ctx5.fillRect(0, 0, 150, 150);
    ctx5.fillStyle = radgrad2;
    ctx5.fillRect(0, 0, 150, 150);
    ctx5.fillStyle = radgrad;
    ctx5.fillRect(0, 0, 150, 150);

    ctx6.beginPath(); 
    ctx6.arc(50, 50, 40, 0, Math.PI * 2, true);
    ctx6.arc(50, 50, 30, 0, Math.PI * 2, true);
    ctx6.arc(50, 50, 15, 0, Math.PI * 2, true);
    ctx6.arc(50, 50, 7, 0, Math.PI * 2, true);
    ctx6.fill('evenodd');
    // ctx6.fill('nonzero');

    //Text Design
    //fillText && strokeText
    // font = text style / textAlign = start, end, left, right or center / direction = ltr, rtl, inherit
    // textBaseline = top, hanging, middle, alphabetic, ideographic, bottom
    // ctx.measureText('foo') = text ==> text.width = 16
    ctx7.font = '48px serif';
    ctx7.textBaseline = 'middle';
    ctx7.strokeText('Hellow world', 10, 50); 

    const img8 = new Image();
    img8.onload = function() {
        ctx8.drawImage(img8, 0, 0);
        ctx8.beginPath();
        ctx8.moveTo(30, 96);
        ctx8.lineTo(70, 66);
        ctx8.lineTo(103, 76);
        ctx8.lineTo(170, 15);
        ctx8.stroke();
    };
    img8.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';

    //drawImage(start, extra) if put extra, it could be slice the picture

    //animation
    var sun = new Image();
    var moon = new Image();
    var earth = new Image();
    function init() {
        sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
        moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
        earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
        window.requestAnimationFrame(draw);
    }

    function draw() {
        ctx9.globalCompositeOperation = 'destination-over';
        ctx9.clearRect(0, 0, 300, 300); // clear canvas

        ctx9.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx9.strokeStyle = 'rgba(0, 153, 255, 0.4)';
        ctx9.save();
        ctx9.translate(150, 150);

        // Earth
        var time = new Date();
        ctx9.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
        ctx9.translate(105, 0);
        ctx9.fillRect(0, -12, 40, 24); // Shadow
        ctx9.drawImage(earth, -12, -12);

        // Moon
        ctx9.save();
        ctx9.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
        ctx9.translate(0, 28.5);
        ctx9.drawImage(moon, -3.5, -3.5);
        ctx9.restore();

        ctx9.restore();
        
        ctx9.beginPath();
        ctx9.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
        ctx9.stroke();
        
        ctx9.drawImage(sun, 0, 0, 300, 300);

        window.requestAnimationFrame(draw);
    }

    init();

    // var raf;

    // var ball = {
    // x: 100,
    // y: 100,
    // vx: 5,
    // vy: 2,
    // radius: 25,
    // color: 'blue',
    // draw: function() {
    //         ctx10.beginPath();
    //         ctx10.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    //         ctx10.closePath();
    //         ctx10.fillStyle = this.color;
    //         ctx10.fill();
    //     }
    // };

    // function draw() {
    //     ctx10.clearRect(0,0, canvas10.width, canvas10.height);
    //     ball.draw();
    //     ball.x += ball.vx;
    //     ball.y += ball.vy;
    //     raf = window.requestAnimationFrame(draw);
    // }

    // canvas10.addEventListener('mouseover', function(e) {
    //     raf = window.requestAnimationFrame(draw);
    // });

    // canvas10.addEventListener('mouseout', function(e) {
    //     window.cancelAnimationFrame(raf);
    // });

    // ball.draw();
}