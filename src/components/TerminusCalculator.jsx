import { useState, useEffect } from 'react';

const useScreenOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isPortrait;
};
import Symbol from './Symbol';

function TerminusCalculator() {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [z, setZ] = useState(null);
  const [ans1, setAns1] = useState('--');
  const [ans2, setAns2] = useState('--');
  const [ans3, setAns3] = useState('--');

  const isPortrait = useScreenOrientation();

  const symbols = [
    { name: 'Symbol 1', value: 0 },
    { name: 'Symbol 2', value: 11 },
    { name: 'Symbol 3', value: 10 },
    { name: 'Symbol 4', value: 22 },
    { name: 'Symbol 5', value: 21 },
    { name: 'Symbol 6', value: 20 },
  ];

  useEffect(() => {
    if (x !== null && y !== null && z !== null) {
      const valX = parseInt(x);
      const valY = parseInt(y);
      const valZ = parseInt(z);

      if (!isNaN(valX) && !isNaN(valY) && !isNaN(valZ)) {
        const resultX = 2 * valX + 11;
        const resultY = (2 * valZ + valY) - 5;
        const resultZ = Math.abs(valY + valZ - valX);

        setAns1(String(resultX).padStart(2, '0'));
        setAns2(String(resultY).padStart(2, '0'));
        setAns3(String(resultZ).padStart(2, '0'));
      }
    } else {
      setAns1('--');
      setAns2('--');
      setAns3('--');
    }
  }, [x, y, z]);

  const renderSelectorRow = (coord, value, setter, isPortrait) => {
    if (isPortrait) {
      // Mobile (Portrait) - Adapted 9er grid concept
      return (
        <div className="row align-items-center mb-4">
          {/* Label column */}
          <div className="col-3 col-sm-2 text-center">
            <h2 className="display-4">{coord.toUpperCase()}</h2>
          </div>

          {/* Symbols container */}
          <div className="col-9 col-sm-10">
            <div className="row">
              {symbols.map((symbol) => (
                <div key={symbol.value} className="col-4 col-sm-2"> {/* col-4 for very small, col-sm-2 for small */}
                  <div
                    className={`symbol-card border rounded ${String(value) === String(symbol.value) ? 'border-primary' : 'border-secondary'}`}
                    onClick={() => setter(String(symbol.value))}
                  >
                    <div className="symbol-content">
                      <Symbol symbol={symbol.value} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      // Desktop (Landscape) - Keep the 11er grid concept
      return (
        <div className="row align-items-center mb-4">
          {/* Two empty columns at the start */}
          <div className="col-1"></div>
          <div className="col-1"></div>

          {/* Label column */}
          <div className="col-1 text-center">
            <h2 className="display-4">{coord.toUpperCase()}</h2>
          </div>

          {/* Symbols in columns (6 symbols, each col-1) */}
          {symbols.map((symbol) => (
            <div key={symbol.value} className="col-1"> {/* Each symbol takes 1 column */}
              <div
                className={`symbol-card border rounded ${String(value) === String(symbol.value) ? 'border-primary' : 'border-secondary'}`}
                onClick={() => setter(String(symbol.value))}
              >
                <div className="symbol-content">
                  <Symbol symbol={symbol.value} isPortrait={isPortrait} />
                </div>
              </div>
            </div>
          ))}

          {/* Two empty columns at the end */}
          <div className="col-1"></div>
          <div className="col-2"></div> {/* To make total 12 columns */}
        </div>
      );
    }
  };

  return (
    <div className="container-fluid bg-dark text-white d-flex flex-column">
      <div className="container">
        <h1 className="text-center mb-5 display-4 font-weight-bold">Terminus Coordinate Calculator</h1>
        
        {renderSelectorRow('x', x, setX, isPortrait)}
        {renderSelectorRow('y', y, setY, isPortrait)}
        {renderSelectorRow('z', z, setZ, isPortrait)}

        <div className="mt-5 text-center">
          <h2 className="display-5">Results</h2>
          <div className="d-flex justify-content-center mt-4">
            <div className="result-box mx-3 p-4 border rounded bg-secondary">
              <h3 className="font-weight-light">X</h3>
              <p id="ans1" className="display-4 font-weight-bold">{ans1}</p>
            </div>
            <div className="result-box mx-3 p-4 border rounded bg-secondary">
              <h3 className="font-weight-light">Y</h3>
              <p id="ans2" className="display-4 font-weight-bold">{ans2}</p>
            </div>
            <div className="result-box mx-3 p-4 border rounded bg-secondary">
              <h3 className="font-weight-light">Z</h3>
              <p id="ans3" className="display-4 font-weight-bold">{ans3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TerminusCalculator;
