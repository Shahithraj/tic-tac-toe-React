import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Square from './Square';
import { Patterns } from './Patterns.jsx';

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('O');
  const [result, setResult] = useState({
    winner: '',
    state: '',
  });
  useEffect(() => {
    checkWin();
    if (player == 'X') {
      setPlayer('O');
    } else {
      setPlayer('X');
    }
  }, [board]);

  useEffect(() => {
    if (result.winner != '') {
      alert(`Game Finished! Winning Player : ${result.winner}`);
      setBoard(['', '', '', '', '', '', '', '', '']);
      setPlayer("O")
    }
  }, [result]);

  const chooseSquare = (square) => {
    if (board[square] == '') {
      let newPlayer = board.map((val, i) => {
        if (i == square && val == '') {
          console.log(i);
          return player;
        }
        console.log(val);
        return val;
      });
      console.log(newPlayer);
      setBoard(newPlayer);
    }
  };

  const checkWin = () => {
    Patterns.forEach((currentPattern, i) => {
      // console.log(currentPattern)
      let firstPlayer = board[currentPattern[0]]; // "X"
      let gameFinished = true;
      if (firstPlayer == '') {
        return;
      }
      currentPattern.forEach((ind) => {
        if (board[ind] != firstPlayer) {
          // "X" != "X"
          gameFinished = false;
        }
      });
      // console.log(firstPlayer)
      if (gameFinished) {
        setResult((prev) => {
          return {
            ...prev,
            winner: player,
            state: 'Won',
          };
        });
      } else {
    checkDraw()
      }
    });
  };

  const checkDraw = () => {
    console.log("hiii")
    let filled = true
    board.forEach((square) => {
      if(square == "") {
        filled = false
      }
    })
    if(filled) {
      setResult((prev) => {
        return {
          ...prev,
          winner: "No one",
          state: 'Tie',
        };
      });
    }
  }
  return (
    <div className="App">
    <h1>Tic Tac Toe</h1>
      <div className="board">
        <div className="row">
          <Square value={board[0]} chooseSqaure={() => chooseSquare(0)} />
          <Square value={board[1]} chooseSqaure={() => chooseSquare(1)} />
          <Square value={board[2]} chooseSqaure={() => chooseSquare(2)} />
        </div>
        <div className="row">
          <Square value={board[3]} chooseSqaure={() => chooseSquare(3)} />
          <Square value={board[4]} chooseSqaure={() => chooseSquare(4)} />
          <Square value={board[5]} chooseSqaure={() => chooseSquare(5)} />
        </div>
        <div className="row">
          <Square value={board[6]} chooseSqaure={() => chooseSquare(6)} />
          <Square value={board[7]} chooseSqaure={() => chooseSquare(7)} />
          <Square value={board[8]} chooseSqaure={() => chooseSquare(8)} />
        </div>
      </div>
    </div>
  );
}

export default App;
