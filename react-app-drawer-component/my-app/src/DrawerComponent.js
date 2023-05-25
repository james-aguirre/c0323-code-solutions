import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './DrawerComponent.css';

export default function DrawerComponent({ heading, items, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }
  function displayItem(item) {
    toggleOpen();
    onSelect(item);
  }

  return (
    <>
      <FaBars onClick={toggleOpen} className="menu-icon" />
      <Backdrop isActive={isOpen} onClick={toggleOpen} />
      <Menu isOpen={isOpen}>
        <h3 className="menu-heading">{heading}</h3>
        <ul className="menu-items">
          {items.map((item) => (
            <li
              key={item}
              className="menu-item"
              onClick={() => displayItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      </Menu>
    </>
  );
}

function Backdrop({ isActive, onClick }) {
  const className = isActive ? 'menu-shade is-drawn' : 'menu-shade';
  return <div className={className} onClick={onClick}></div>;
}

function Menu({ isOpen, children }) {
  const className = isOpen ? 'menu-drawer is-open' : 'menu-drawer';
  return <div className={className}>{children}</div>;
}
