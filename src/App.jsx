import './App.css';
import { Square } from './Square';

function App() {
  const playerMove = async (event) => {
    console.log('Hola');
  };

  const printBoard = () => {
    const squares = [];

    for (var i = 0; i < 8; i++) {
      let row = [];
      for (var j = 0; j < 8; j++) {
        const squareId = `${i}:${j}`;
        row.push(
          <Square
            key={squareId}
            id={squareId}
            color="#E8EEF5"
            squareType=""
            cursor=""
            onClick={playerMove}
          />
        );
      }
      squares.push(
        <div key={i} className="boardRow">
          {row}
        </div>
      );
    }
    return squares;
  };

  return (
    <div className="app">
      <h1 className="title">War horses</h1>
      <div className="board">{printBoard()}</div>
    </div>
  );
}

export default App;
