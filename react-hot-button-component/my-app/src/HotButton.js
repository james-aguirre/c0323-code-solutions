import { useState } from 'react';
import './HotButton.css';
export default function HotButton({ text, className }) {
  let [index, setIndex] = useState(0);
  function handleClick() {
    setIndex((index += 1));
  }
  if (index < 3) {
    className = 'cold';
  } else if (index < 6) {
    className = 'warm';
  } else if (index < 9) {
    className = 'tepid';
  } else if (index < 12) {
    className = 'hot';
  } else if (index < 15) {
    className = 'flaming';
  } else if (index > 15 && index !== 0) {
    className = 'nuclear';
  }
  return (
    <button onClick={handleClick} className={className}>
      {text}
    </button>
  );
}
