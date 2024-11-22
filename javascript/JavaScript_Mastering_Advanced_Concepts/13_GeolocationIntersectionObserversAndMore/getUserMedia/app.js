/**
 * MediaStream (getUserMedia)
 * 
 * mdn
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
 * 
 * Accesses the user’s camera and microphone.
 * 
 * async function getMediaStream() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    const videoElement = document.querySelector('video');
    videoElement.srcObject = stream;
  } catch (error) {
    console.error('Error accessing media devices.', error);
  }
}
getMediaStream();
 */

// document.querySelector("#startStream").addEventListener("click", async () => {
//   try {
//     const stream = await navigator.mediaDevices.getUserMedia({
//       video: true,
//     });

//     const videoElement = document.querySelector("#videoElement");
//     videoElement.srcObject = stream;
//   } catch (err) {
//     console.log(err);
//     document.querySelector("#errText").textContent = err.message;
//   }
// });
