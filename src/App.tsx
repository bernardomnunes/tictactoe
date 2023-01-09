import { useState } from "react";
import "./App.css";

function App() {
  const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1);

  const handleClickIndex = (index: number) => {
    if (gameData[index] !== 0) {
      return;
    }

    setGameData((prevState) => {
      const newGameData = [...prevState];
      newGameData[index] = turn;
      return newGameData;
    });

    setTurn((prevState) => (prevState === 1 ? 2 : 1));
  };
  return (
    <>
      <div className="board-game">
        {gameData.map((value, index) => (
          <span key={index} onClick={() => handleClickIndex(index)}>
            {value === 1 && "X"}
            {value === 2 && "O"}
          </span>
        ))}
      </div>
    </>
  );
}

export default App;
