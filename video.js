function hasGetUserMedie() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

if(hasGetUserMedie()) {

} else {
    alert('getUserMedia() is not supported by your browser');
}

const constraints = {video: true};
// const video = document.querySelector('video#record');
// navigator.mediaDevices.getUserMedia(constraints).then((stream)=>{video.srcObject = stream});

// const hdConstraints = {video: {width: {min:1280}, height: {min:720}}};
// navigator.mediaDevices.getUserMedia(hdConstraints).then(stream=>{video.srcObject = stream});

// const vgaConstraints = {video: {width: {exact: 640}, height: {exact: 480}}};
// navigator.mediaDevices.getUserMedia(vgaConstraints).then(stream=>{video.srcObject = stream});

// const videoElement = document.querySelector('video#record');
// const audioSelect = document.querySelector('select#audioSource');
// const videoSelect = document.querySelector('select#videoSource');

// navigator.mediaDevices.enumerateDevices()
//   .then(gotDevices).then(getStream).catch(handleError);

// audioSelect.onchange = getStream;
// videoSelect.onchange = getStream;

function gotDevices(deviceInfos) {
//   for (let i = 0; i !== deviceInfos.length; ++i) {
//     const deviceInfo = deviceInfos[i];
    // const option = document.createElement('option');
    // option.value = deviceInfo.deviceId;
//     if (deviceInfo.kind === 'audioinput') {
//       option.text = deviceInfo.label ||
//         'microphone ' + (audioSelect.length + 1);
//       audioSelect.appendChild(option);
//     } else if (deviceInfo.kind === 'videoinput') {
//       option.text = deviceInfo.label || 'camera ' +
//         (videoSelect.length + 1);
//       videoSelect.appendChild(option);
//     } else {
//       console.log('Found another kind of device: ', deviceInfo);
//     }
//   }
}

function getStream() {
  if (window.stream) {
    window.stream.getTracks().forEach(function(track) {
      track.stop();
    });
  }

  const constraints = {
    audio: {
      deviceId: {exact: audioSelect.value}
    },
    video: {
      deviceId: {exact: videoSelect.value}
    }
  };

  navigator.mediaDevices.getUserMedia(constraints).
    then(gotStream).catch(handleError);
}

function gotStream(stream) {
  window.stream = stream; // make stream available to console
  videoElement.srcObject = stream;
}

function handleError(error) {
//   console.error('Error: ', error);
}



//take snapshot

const video = document.querySelector('video#record');
const captureVideoButton = document.querySelector('#takeVideo');
const screenshotButton = document.querySelector('#takePhoto');
const cssFilterButton = document.querySelector('#applyCSS');

const img = document.querySelector('#snapshot');

const canvasSnapshot = document.createElement('canvas');

let filterIndex = 0;
const filters = [
    'grayscale',
    'sepia',
    'blur',
    'brightness',
    'contrast',
    'hue-rotate',
    'hue-rotate2',
    'hue-rotate3',
    'saturate',
    'invert',
    ''
];

captureVideoButton.onclick = function() {
  navigator.mediaDevices.getUserMedia(constraints).
    then(handleSuccess).catch(handleError);
};

screenshotButton.onclick = video.onclick = function() {
  canvasSnapshot.width = video.videoWidth;
  canvasSnapshot.height = video.videoHeight;
  canvasSnapshot.getContext('2d').drawImage(video, 0, 0);
  // Other browsers will fall back to image/png
  img.src = canvasSnapshot.toDataURL('image/webp');
};

cssFilterButton.onclick = video.onclick = function() {
    video.className = filters[filterIndex++ % filters.length];
}

function handleSuccess(stream) {
  screenshotButton.disabled = false;
  video.srcObject = stream;
}