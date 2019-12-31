var ws;

function webSocketOpen() {
    if ("WebSocket" in window) {
        ws = new WebSocket("ws://127.0.0.1:5500/echo/echoWs");

        ws.onopen = function () {
            alert("Web Socket is connected");
        }

        ws.onclose = function() {
            alert("Web Socket is closed");
        }
    } else {
        alert("Web Socket NOT supported by your browser!")
    }
}

function webSocketClose() {
    ws.close();
}