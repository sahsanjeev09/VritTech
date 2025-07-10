import React, { useState, useEffect } from "react";
import "../styles/TaskFour.css";

const ROWS = 9;
const COLS = 26;

const patterns = [
  [
    [0, 3], [1, 7], [2, 5], [3, 17], [4, 21], [5, 23], [6, 25], [7, 22], [8, 19]
  ],
  [
    [0, 19], [1, 7], [2, 19], [3, 20], [4, 21], [5, 1], [6, 25], [7, 13], [8, 1]
  ],
  [
    [0, 15], [1, 10], [2, 21], [3, 18], [4, 22], [5, 10], [6, 22], [7, 15], [8, 13]
  ],
  [
    [0, 24], [1, 21], [2, 19], [3, 2], [4, 5], [5, 13], [6, 0], [7, 24], [8, 7]
  ]
];

const generatePatternGrid = (pattern) => {
  const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
  pattern.forEach(([row, col]) => {
    grid[row][col] = true;
  });
  return grid;
};

const TaskFour = () => {
  const [gridIndex, setGridIndex] = useState(0);
  const [grid, setGrid] = useState(generatePatternGrid(patterns[0]));

  useEffect(() => {
    const interval = setInterval(() => {
      setGridIndex((prev) => (prev + 1) % patterns.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setGrid(generatePatternGrid(patterns[gridIndex]));
  }, [gridIndex]);

  return (
    <div className="container">
      <div className="grid">
        {grid.map((row, rowIndex) =>
          row.map((isActive, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${isActive ? "active" : ""}`}
            ></div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskFour;
