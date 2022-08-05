//Setting Variables
let heads = 0;
let headsPercent = 0;
let tails = 0;
let tailsPercent = 0;
let total = heads + tails;

document.addEventListener("DOMContentLoaded", function () {
  //Flip Button
  document.querySelector("#flip").addEventListener("click", function () {
    let flipResult = Math.random();
    console.log(flipResult);
    if (flipResult < 0.495) {
      //Flipping Heads
      document.querySelector("#penny-image").src =
        "./assets/images/penny-heads.jpg";
      document.querySelector("#message").textContent = "You Flipped Heads!";
      heads++;
      total++;
      document.querySelector("#heads").textContent = heads;
      headsPercent = Math.round((heads / total) * 100);
      if (heads > 0) {
        tailsPercent = Math.round((tails / total) * 100);
        document.querySelector("#tails-percent").textContent =
          tailsPercent + "%";
      }
      document.querySelector("#heads-percent").textContent = headsPercent + "%";
    } else {
      //Flipping Tails
      document.querySelector("#penny-image").src =
        "./assets/images/penny-tails.jpg";
      document.querySelector("#message").textContent = "You Flipped Tails!";
      tails++;
      total++;
      document.querySelector("#tails").textContent = tails;
      tailsPercent = Math.round((tails / total) * 100);
      if (tails > 0) {
        headsPercent = Math.round((heads / total) * 100);
        document.querySelector("#heads-percent").textContent =
          headsPercent + "%";
      }
      document.querySelector("#tails-percent").textContent = tailsPercent + "%";
    }
  });
  //Clear Button
  document.querySelector("#clear").addEventListener("click", function () {
    heads = 0;
    tails = 0;
    headsPercent = 0;
    tailsPercent = 0;
    total = heads + tails;
    document.querySelector("#heads").textContent = heads;
    document.querySelector("#tails").textContent = tails;
    document.querySelector("#heads-percent").textContent = headsPercent + "%";
    document.querySelector("#tails-percent").textContent = tailsPercent + "%";
    document.querySelector("#message").textContent = "Let's Get Flipping!";
    document.querySelector("#penny-image").src =
      "./assets/images/penny-heads.jpg";
  });
});
