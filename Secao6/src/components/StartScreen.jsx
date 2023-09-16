import "./StartScreen.css";

const StartScreen = () => {
  return (
    <div className="startScreen">
      <h1>Secret Word</h1>
      <div className="selectContainer">
        <p>Click in the button to start game</p>
        <button>Start Game</button>
      </div>
    </div>
  );
};

export default StartScreen;
