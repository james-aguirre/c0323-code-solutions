import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  let [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    console.log(isClicked, 'val of isclicked before usestate');
    setIsClicked(!isClicked);
  }
  console.log(isClicked, 'This is the value returned by useState');
  return (
    <button
      onClick={handleClick}
      {...(isClicked ? (color = 'white') : color)}
      style={{ backgroundColor: color }}>
      {isClicked ? (text = `${text} white`) : text + color}
    </button>
  );
}
