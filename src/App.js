import "./App.css";
import { useState } from "react";
import React from "react";

function Square({ value }) {
  return <button className="square">{value}</button>;
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null)); //9개의 엘리먼트를 만들고 그 안에 null삽입
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

export default App;
