/**
 *
 *  *** Real examples ***
 *  - https://codepen.io/ge1doot/details/LZdOwj
 *  - https://codepen.io/akm2/pen/AGgarW
 *  - https://codepen.io/jackrugile/details/kMWyeM
 *  - https://codepen.io/chasekaiser/pen/ogXmOK
 *  - https://codepen.io/alexzaworski/pen/mEZvrG
 *  - https://codepen.io/kennethcachia/details/nPbyoR
 *  - https://codepen.io/PavelDoGreat/pen/zdWzEL  (super)
 */

/***  Basic canvas ***/
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "rgba(255,0,0,0.5)";
// ctx.fillRect(0, 0, 200, 80); // => (xAxis: 100, yAxis: 100, width: 40, height: 80)
// ctx.fillStyle = "rgba(0,255,0,0.5)";
// ctx.fillRect(100, 50, 200, 130);

/*** Canvas Strokes ***/
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "rgba(0, 255, 0,0.5)"; // this color is not used by stroke
// ctx.fillRect(50, 50, 200, 200); // default color is black
// ctx.clearRect(50, 50, 100, 100);
// ctx.strokeStyle = "purple";
// ctx.lineWidth = 4;
// ctx.strokeRect(50, 50, 100, 100);

/*** Canvas lines ***/
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(100, 100);
// ctx.lineTo(200, 80);
// // ctx.fill();
// ctx.stroke();

// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "rgba(0,255,0)";
// const bigRectangle = new Path2D();
// bigRectangle.rect(0, 0, 200, 80);
// ctx.fill(bigRectangle);
// ctx.stroke(bigRectangle);
// ctx.fillStyle = "rgba(0,0, 255)";
// ctx.fillRect(200, 100, 80, 80);

// ctx.fillStyle = "rgba(255,0,0, 0.5)";
// ctx.beginPath();
// ctx.arc(145, 145, 50, 20, 2 * Math.PI);
// ctx.stroke();

// ctx.fillRect(0, 0, 200, 80);
// ctx.fillStyle = "rgba(0,255,0, 0.5)";
// ctx.fillRect(100, 50, 100, 130);
// ctx.fillRect(50, 50, 200, 200);
// ctx.clearRect(50, 50, 100, 100);
// ctx.strokeStyle = "purple";
// ctx.lineWidth = 4;
// ctx.strokeRect(50, 50, 100, 100);

// // ctx.beginPath();
// // ctx.moveTo(50, 50);
// // ctx.lineTo(100, 100);
// // ctx.lineTo(200, 80);
// // ctx.lineTo(200, 40);
// // ctx.stroke();
// // ctx.fill();

// // ctx.beginPath();
// // ctx.moveTo(200, 200);
// // ctx.lineTo(200, 100);
// // ctx.stroke();

// function draw() {
//   const canvas = document.getElementById("canvas");
//   if (canvas.getContext) {
//     const ctx = canvas.getContext("2d");

//     // Cubic curves example
//     ctx.beginPath();
//     ctx.moveTo(75, 40);
//     ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
//     ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
//     ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
//     ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
//     ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
//     ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
//     ctx.fill();
//   }
// }

// draw();
