import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function DrawerComponent({ heading, items }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen(e) {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <FaBars onClick={toggleOpen} className="menu-icon" />
      <Backdrop isActive={isOpen} />
      <Menu />
    </>
  );
}

function Backdrop({ isActive, className }) {
  if (isActive) {
    className = `is-drawn`;
  }
  return <div className={`menu-shade ${className}`}></div>;
}

function Menu({ onShow, isActive, className }) {
  if (isActive) {
    className = `is-open`;
  }
  return <div className={`menu-drawer ${className}`} isActive={onShow}></div>;
}

// function listItems({onShow}){
//   return (
//     <h3 class='menu-items'
//   )
// }
