import { useState } from "react";
import { Star } from "./components/Star";

function App() {
  const totalStars = 7; // Easily change the number of stars
  const [starsState, setStarsState] = useState(Array(totalStars).fill(false));
  const [prevState, setPrevState] = useState(starsState);
  const [isClicked, setIsClicked] = useState(false);

  // When hover on a star
  function hoverOverStar(starIndex) {
    if (!isClicked) {
      setStarsState(starsState.map((_, index) => index <= starIndex));
    }
  }

  // When hover ends
  function hoverEndWithoutClick() {
    if (!isClicked) {
      setStarsState(prevState);
    }
  }

  // When click on a star
  function clickOnStar(starIndex) {
    setIsClicked(true);
    setStarsState(starsState.map((_, index) => index <= starIndex));
    setPrevState(starsState.map((_, index) => index <= starIndex)); // Save clicked state
  }

  return (
    <div className="w-screen h-screen bg-purple-500 flex justify-center items-center">
      {starsState.map((starState, index) => (
        <Star
          key={index}
          index={index}
          state={starState}
          onHoverFunc={() => hoverOverStar(index)}
          onHoverEndFunc={hoverEndWithoutClick}
          onClickFunc={() => clickOnStar(index)}
        />
      ))}
    </div>
  );
}

export default App;
