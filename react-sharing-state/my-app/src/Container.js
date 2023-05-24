import React from 'react';
import { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work!
 */
export default function Container({ items }) {
  const [activeIndex, setIndex] = useState(0);
  function handleNextClick() {
    setIndex((activeIndex + 1) % items.length);
  }
  function handlePreviousClick() {
    setIndex((activeIndex - 1 + items.length) % items.length);
  }
  function handleSelect(e) {
    setIndex(e);
  }

  return (
    <div>
      <div>{items[activeIndex]}</div>
      <div>
        <CustomButton text="Prev" onCustomClick={handlePreviousClick} />
        <Indicators
          count={items.length}
          active={activeIndex}
          onSelect={handleSelect}
        />
        <CustomButton text="Next" onCustomClick={handleNextClick} />
      </div>
    </div>
  );
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 *
 * TODO: Make the background color a prop, default white.
 * TODO: When clicked, the parent needs to be notified.
 */
function CustomButton({ text, bkgColor = 'white', onCustomClick }) {
  return (
    <button onClick={onCustomClick} style={{ backgroundColor: bkgColor }}>
      {text}
    </button>
  );
}

/**
 * An array of indicators (buttons).
 * Props:
 *   count: The number of indicators to display
 *
 * TODO: When an indicator is selected, the active item in the Container
 *       should switch to the index of the selected indicator.
 *       To avoid confusion, use `onSelect` for the event prop name.
 * TODO: Highlight the active indicator lightblue.
 */

function Indicators({ count, onSelect, active }) {
  const buttons = [];

  for (let i = 0; i < count; i++) {
    buttons.push(
      <CustomButton
        key={i}
        text={i}
        onCustomClick={() => onSelect(i)}
        bkgColor={active === i && 'lightblue'}
      />
    );
  }
  return <div>{buttons}</div>;
}
