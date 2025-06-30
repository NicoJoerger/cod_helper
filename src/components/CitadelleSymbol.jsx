import React from 'react';

const CitadelleSymbol = ({ type }) => {
  const size = 80; // Keep overall SVG size, adjust internal triangle points
  const color = 'white'; // Adjust color as needed
  const strokeWidth = 5; // For outline

  const renderSymbol = () => {
    // Adjust triangle points to make them slightly smaller within the 100x100 viewBox
    const upTrianglePoints = "50,10 90,90 10,90"; // Smaller up-triangle
    const downTrianglePoints = "10,10 90,10 50,90"; // Smaller down-triangle

    switch (type) {
      case 'up-triangle':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100">
            <polygon points={upTrianglePoints} fill="none" stroke={color} strokeWidth={strokeWidth} />
          </svg>
        );
      case 'down-triangle':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100">
            <polygon points={downTrianglePoints} fill="none" stroke={color} strokeWidth={strokeWidth} />
          </svg>
        );
      case 'up-triangle-line':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100">
            <polygon points={upTrianglePoints} fill="none" stroke={color} strokeWidth={strokeWidth} />
            <line x1="5" y1="50" x2="95" y2="50" stroke={color} strokeWidth={strokeWidth} /> {/* Longer and higher line */}
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      {renderSymbol()}
    </div>
  );
};

export default CitadelleSymbol;