import { Dispatch, SetStateAction } from "react";

type CellProps = {
  id: number;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  cell: string;
  winningMessage: string;
};

const Cell = ({
  go,
  setGo,
  id,
  cells,
  setCells,
  cell,
  winningMessage,
}: CellProps) => {
  const handleClick = (e) => {
    if (winningMessage) {
      return;
    }
    const notTaken = !cells[id];

    if (notTaken) {
      if (go === "circle") {
        handleCellChange("circle");
        setGo("cross");
      } else if (go === "cross") {
        handleCellChange("cross");
        setGo("circle");
      }
    }
  };

  const handleCellChange = (cellToChange: string) => {
    let copyCells = [...cells];
    copyCells[id] = cellToChange;
    setCells(copyCells);
  };

  return (
    <div className="square" onClick={handleClick}>
      <div className={cell}>{cell ? (cell === "circle" ? "O" : "X") : ""}</div>
    </div>
  );
};

export default Cell;
