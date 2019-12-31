let w;

function startWorker() {
    if (typeof (Worker) !== "undefined") {
        if (typeof(w) == "undefined") {
            w = new Worker("timer_worker.js");
        }
        w.onmessage = function(evt) {
            document.getElementById("result").innerHTML = evt.data;
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry! No Web Worker support!"
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}

document.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        toggleFullScreen();
    }
    if (e.keyCode === 97) {
        window.history.back();
    }
    if (e.keyCode === 100) {
        window.history.forward();
    }
    if (e.keyCode === 113) {
        window.history.go(-2);
    }

}, false);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
    } else {
        if(document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}