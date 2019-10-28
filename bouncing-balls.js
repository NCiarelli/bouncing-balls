// Implement adding bouncing balls to the viewport that bounce off of the bottom of the screen
// The balls are created at the point the user clicks

// Add the makeBouncingBall function to the click event listener
el.addEventListener("click", (event) => {
  makeBouncingBall(event);
});

// Global Settings
const movementStepPortion = 0.1;

// Add a bouncing ball at the point the user clicked
function makeBouncingBall(event) {
  const newBouncingBall = document.createElement("div");
  const windowHeight = documentElement.clientHeight;
  newBouncingBall.classList.add("bouncingBall");

  // Set the starting positon
  let startingBallX = event.clientX - 10;
  let startingBallY = event.clientY - 10;
  newBouncingBall.style.top = `${startingBallY}px`;
  newBouncingBall.style.left = `${startingBallX}px`;

  document.body.appendChild(newBouncingBall);

  // Setup bounce movement
  let moveDown = true;
  const intervalTimer = setInterval(() => {
    if (moveDown) {

    }
  }, 200);



}


// function moveBouncingBall(currentBouncingBall, startingX, startingY) {

//   const currentTop = currentBouncingBall.style.top;
//   if ((currentTop + (windowHeight - startingY) * 0.1) > windowHeight) {
//     // transform: translateY(-50 %);
//   }
// }
