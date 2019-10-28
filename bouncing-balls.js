// Implement adding bouncing balls to the viewport that bounce off of the bottom of the screen
// The balls are created at the point the user clicks

// Add the makeBouncingBall function to the click event listener
el.addEventListener("click", (event) => {
  makeBouncingBall(event);
});

// Add a bouncing ball at the point the user clicked
function makeBouncingBall(event) {
  const newBouncingBall = document.createElement("div");
  newBouncingBall.classList.add("bouncingBall");
  let startingBallX = event.clientX;
  let startingBallY = event.clientY;
  document.body.appendChild(newBouncingBall);

}

function moveBouncingBall(currentBouncingBall, startingX, startingY) {

}
