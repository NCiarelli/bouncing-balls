// Implement adding bouncing balls to the viewport that bounce off of the bottom of the screen
// The balls are created at the point the user clicks

// Add the makeBouncingBall function to the click event listener
const bodyElement = document.querySelector("body")
bodyElement.addEventListener("click", (event) => {
  makeBouncingBall(event);
});

// Add a bouncing ball at the point the user clicked
function makeBouncingBall(event) {
  const newBouncingBall = document.createElement("div");
  const windowHeight = bodyElement.clientHeight;
  newBouncingBall.classList.add("bouncingBall");

  const ballSize = 20;

  // Set the starting positon
  const startingBallX = event.clientX - ballSize / 2;
  const startingBallY = event.clientY - ballSize / 2;
  newBouncingBall.style.top = `${startingBallY}px`;
  newBouncingBall.style.left = `${startingBallX}px`;
  newBouncingBall.style.height = `${ballSize}px`;
  newBouncingBall.style.width = `${ballSize}px`;

  const movementInterval = Math.floor(0.1 * (windowHeight - startingBallY - (ballSize / 2)));

  document.body.appendChild(newBouncingBall);

  // Setup bounce movement
  let moveDown = true;
  const intervalTimer = setInterval(() => {
    currentY = parseInt(newBouncingBall.style.top);
    // Moving Down
    if (moveDown) {
      // Check if full movement would overlap end of window and just stop there if so
      if ((currentY + movementInterval + ballSize) > windowHeight) {
        newBouncingBall.style.top = `${windowHeight - ballSize}px`;
        moveDown = false;
      } else {
        // Otherwise just add the movement interval
        newBouncingBall.style.top = `${currentY + movementInterval}px`;
      }
    } else {
      // Moving up
      // Check if full movement would go past the starting point and just go there if so
      if ((currentY + ballSize / 2 - movementInterval) < startingBallY) {
        newBouncingBall.style.top = `${startingBallY}px`;
        moveDown = true;
      } else {
        // Otherwise just subtract the movement interval
        newBouncingBall.style.top = `${currentY - movementInterval}px`;
      }
    }
  }, 100);



}


// function moveBouncingBall(currentBouncingBall, startingX, startingY) {

//   const currentTop = currentBouncingBall.style.top;
//   if ((currentTop + (windowHeight - startingY) * 0.1) > windowHeight) {
//     // transform: translateY(-50 %);
//   }
// }
