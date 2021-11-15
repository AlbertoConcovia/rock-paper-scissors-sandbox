const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  
  const getOutcome = (moveOne, moveTwo) => {
    if (moveOne === moveTwo) {
      return "It's a draw!";
    }
  
    if (
      (moveOne === "scissors" && moveTwo === "paper") ||
      (moveOne === "rock" && moveTwo === "scissors") ||
      (moveOne === "paper" && moveTwo === "rock")
    ) {
      return "Player One wins!";
    }
  
    return "Player Two wins!";
  };
  
  // Removing elements (nodes) from the DOM
  const resetGame = () => {
    if (document.getElementById("outcome")) {
      const outcome = document.body.lastChild;
      document.body.removeChild(outcome);
    }
  };
  
  const playGame = () => {
    resetGame();
    const playerOneMove = getRandomMove();
    const playerTwoMove = getRandomMove();
    const outcome = getOutcome(playerOneMove, playerTwoMove);
    updateDOM(playerOneMove, playerTwoMove, outcome);
  };
  
  const updateDOM = (moveOne, moveTwo, outcome) => {
    // TODO Implement this method to update the DOM

    // find div move one and two
    let playerOneMove = document.querySelector("#player-one-move");
    console.log(playerOneMove);
    let playerTwoMove = document.querySelector("#player-two-move");
    console.log(playerTwoMove);

    // update image into
    let playerOneMoveImg = document.querySelector("#player-one-move__img");
    let playerTwoMoveImg = document.querySelector("#player-two-move__img");
    playerOneMoveImg.img = moveOne;
    playerTwoMoveImg.img = moveTwo;
    // There are some images you can use in the images directory

    // add result message
    const newResult = document.createElement("p");
    newResult.textContent = `The result is: ${outcome}`;
    let section = document.querySelector("section");
    section.append(newResult);
  };
  
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", playGame);
  