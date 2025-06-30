import React from 'react';

const Symbol = ({ symbol, isPortrait }) => {
  const viewBoxValue = isPortrait ? "0 0 90 90" : "0 0 100 100";
  switch (symbol) {
    case 0:
      // A single, non-filled circle
      return <svg width="100" height="100" viewBox={viewBoxValue}><circle cx="50" cy="50" r="40" stroke="white" strokeWidth="5" fill="transparent" /></svg>;
    case 11:
      // A filled circle with a non-filled circle offset up and to the right
      return <svg width="100" height="100" viewBox={viewBoxValue}><g><circle cx="40" cy="50" r="30" fill="white" /><circle cx="60" cy="30" r="25" stroke="white" strokeWidth="5" fill="transparent" /></g></svg>;
    case 10:
      // A filled circle with a non-filled circle below it
      return <svg width="100" height="100" viewBox={viewBoxValue}><g><circle cx="50" cy="40" r="30" fill="white" /><circle cx="50" cy="70" r="25" stroke="white" strokeWidth="5" fill="transparent" /></g></svg>;
    case 22:
      // A filled oval (top-left to bottom-right) and a non-filled oval (bottom-left to top-right) crossing
      return <svg width="100" height="100" viewBox={viewBoxValue}><g><ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(45 50 50)" fill="white" /><ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(-45 50 50)" stroke="white" strokeWidth="5" fill="transparent" /></g></svg>;
    case 21:
      // A non-filled oval (top-left to bottom-right) and a filled oval (bottom-left to top-right) crossing
      return <svg width="100" height="100" viewBox={viewBoxValue}><g><ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(45 50 50)" stroke="white" strokeWidth="5" fill="transparent" /><ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(-45 50 50)" fill="white" /></g></svg>;
    case 20:
      // Two ovals forming a cross, filled for left to right and non filled for up/down
      return <svg width="100" height="100" viewBox={viewBoxValue}><g><ellipse cx="50" cy="50" rx="40" ry="15" fill="white" /><ellipse cx="50" cy="50" rx="15" ry="40" stroke="white" strokeWidth="5" fill="transparent" /></g></svg>;
    default:
      return null;
  }
};

export default Symbol;