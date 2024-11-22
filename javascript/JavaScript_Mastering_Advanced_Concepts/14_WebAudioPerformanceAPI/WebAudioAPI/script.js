/**
 * Web Audio API
 * Allows for the processing and synthesizing of audio in web applications.
 *
 * const audioContext = new AudioContext();
 * const oscillator = audioContext.createOscillator();
 * oscillator.type = 'sine';
 * oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
 * oscillator.connect(audioContext.destination);
 * oscillator.start();
 * oscillator.stop(audioContext.currentTime + 1);
 *
 * *** Real Examples ***
 *  - https://sonoport.github.io/synthesising-sounds-webaudio.html
 *
 *  - https://www.sitepoint.com/web-audio-api-add-sound-to-web-page/
 *
 *  - https://mmontag.github.io/dx7-synth-js/
 */

const context = new AudioContext();
const slider = document.querySelector("#freqSlider");
const playBtn = document.querySelector("#playBtn");
const stopBtn = document.querySelector("#stopBtn");
const freqLabel = document.querySelector("#freqLabel");

let oscillator = null;
playBtn.addEventListener("click", () => {
  oscillator = context.createOscillator();
  oscillator.type = "sawtooth";
  oscillator.frequency.value = slider.value;
  oscillator.connect(context.destination);
  oscillator.start();
});

slider.addEventListener("input", (e) => {
  const frequency = e.target.value;
  freqLabel.textContent = `Frequency: ${frequency}Hz`;
  if (oscillator) {
    oscillator.frequency.value = frequency;
  }
});

stopBtn.addEventListener("click", () => {
  if (oscillator) {
    oscillator.stop();
    oscillator = null;
  }
});
