import React, { useState, useEffect } from 'react';

function ShatteredVeil() {
  const boards = [
    ["OSTUHJLD", "QPGAFR", "YZKWX", "NI", "ECVB", "M"],
    ["E", "BCDSTVWXZ", "KLMNPQR", "OUY", "FGHJ", "AI"],
    ["AIOUY", "QX", "BCDEFGH", "S", "LMNPRTVW", "JKZ"],
    ["BCDEF", "XYZ", "GHILNO", "M", "JKQU", "APRSTVW"]
  ];

  const words = ["WORM", "MOTH", "CRAB", "YETI"];

  const [selectedBoardFirstString, setSelectedBoardFirstString] = useState('');
  const [selectedWord, setSelectedWord] = useState('');
  const [resultNumberString, setResultNumberString] = useState('--');

  useEffect(() => {
    if (selectedBoardFirstString && selectedWord) {
      const boardIndex = boards.findIndex(board => board[0] === selectedBoardFirstString);
      if (boardIndex === -1) {
        setResultNumberString('Error: Board not found');
        return;
      }

      const currentBoard = boards[boardIndex];
      let number_str = "";

      for (let j = 0; j < selectedWord.length; j++) {
        for (let i = 0; i < currentBoard.length; i++) {
          let board_str = currentBoard[i].toUpperCase();
          let letter = selectedWord[j].toUpperCase();

          if (board_str.includes(letter)) {
            number_str += String(currentBoard[i].length);
            break;
          }
        }
      }
      setResultNumberString(number_str);
    } else {
      setResultNumberString('--');
    }
  }, [selectedBoardFirstString, selectedWord]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Shattered Veil Easter Egg Solver</h2>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="boardSelect" className="form-label">Select Board:</label>
          <small className="form-text text-muted mb-2">Select the board based on the text in its top-left corner.</small>
          <select
            id="boardSelect"
            className="form-select bg-dark text-white border-secondary"
            value={selectedBoardFirstString}
            onChange={(e) => setSelectedBoardFirstString(e.target.value)}
          >
            <option value="">-- Select a Board --</option>
            {boards.map((board, index) => (
              <option key={index} value={board[0]}>
                Board {index + 1} ({board[0]}...)
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="wordSelect" className="form-label">Select Word:</label>
          <select
            id="wordSelect"
            className="form-select bg-dark text-white border-secondary"
            value={selectedWord}
            onChange={(e) => setSelectedWord(e.target.value)}
          >
            <option value="">-- Select a Word --</option>
            {words.map((word, index) => (
              <option key={index} value={word}>
                {word}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h3 className="display-5">Resulting Number String:</h3>
        <div className="result-box mx-auto p-4 border rounded bg-secondary" style={{ maxWidth: '300px' }}>
          <p className="display-4 font-weight-bold">{resultNumberString}</p>
        </div>
      </div>
    </div>
  );
}

export default ShatteredVeil;