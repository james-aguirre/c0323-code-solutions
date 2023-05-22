import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch({ label, className }) {
  const [isFlicked, setSwitch] = useState(false);
  function handleClick() {
    setSwitch(!isFlicked);
  }
  if (isFlicked) {
    label = 'off';
    className = 'off';
  }
  return (
    <div className={className}>
      {label}
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          onClick={handleClick}
        />
        <label className="label">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
}
