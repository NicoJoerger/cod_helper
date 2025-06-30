import React, { useState, useEffect } from 'react';
import CitadelleSymbol from './CitadelleSymbol';

function CitadelleDesMorts() {
  const itemSymbols = {
    "Horn": ["up-triangle", "♈︎"],
    "Raven Skull": ["up-triangle-line", "♊︎"],
    "Rock Fish": ["down-triangle", "♓︎"],
    "Rock Scorpion": ["down-triangle", "♏︎"],
    "Jaw": ["up-triangle", "♌︎"],
    "Symboless Rock": ["up-triangle-line", "♐︎"],
  };

  const [selectedItem, setSelectedItem] = useState('');
  const [symbolType1, setSymbolType1] = useState(null);
  const [symbol2, setSymbol2] = useState('--');

  useEffect(() => {
    if (selectedItem && itemSymbols[selectedItem]) {
      setSymbolType1(itemSymbols[selectedItem][0]);
      setSymbol2(itemSymbols[selectedItem][1]);
    } else {
      setSymbolType1(null);
      setSymbol2('--');
    }
  }, [selectedItem]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Citadelle des Morts: Raven Sword Puzzle</h2>

      <div className="row mb-3 justify-content-center">
        <div className="col-md-6">
          <label htmlFor="itemSelect" className="form-label">Select Your Item:</label>
          <select
            id="itemSelect"
            className="form-select bg-dark text-white border-secondary"
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
          >
            <option value="">-- Select an Item --</option>
            {Object.keys(itemSymbols).map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h3 className="display-5">Resulting Symbols:</h3>
        <div className="d-flex justify-content-center mt-4 align-items-center">
          <div className="result-box mx-3 p-4 border rounded bg-secondary" style={{ minWidth: '150px' }}>
            {symbolType1 ? <CitadelleSymbol type={symbolType1} /> : <p className="display-4 font-weight-bold">--</p>}
          </div>
          <span className="display-4 font-weight-bold">+</span>
          <div className="result-box mx-3 p-4 border rounded bg-secondary" style={{ minWidth: '150px' }}>
            <p className="display-2 font-weight-bold">{symbol2}</p>
          </div>
        </div>
      </div>

      <div className="mb-5 mt-5">
        <h3 className="mb-3">Book Symbols Location Guide:</h3>
        <p>To solve the Book Symbols puzzle, locate the symbols for each trap at these specific in-game locations:</p>
        <ul>
          <li><strong>Trap 1:</strong> The symbol is found on a paper near the boxes.</li>
          <li><strong>Trap 2:</strong> The symbol is on a page near the beds.</li>
          <li><strong>Trap 3:</strong> The symbol is on a page near the TV or sofa.</li>
          <li><strong>Trap 4:</strong> The symbol is on a page in the hallway.</li>
        </ul>
      </div>
    </div>
  );
}

export default CitadelleDesMorts;
