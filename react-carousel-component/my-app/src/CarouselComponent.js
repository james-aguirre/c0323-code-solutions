import { useState, useEffect } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaRegCircle,
} from 'react-icons/fa';
import './CarouselComponent.css';

export default function Carousel({ images }) {
  const [activeIndex, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((activeIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  function handleNextClick() {
    setIndex((activeIndex + 1) % images.length);
  }
  function handlePreviousClick() {
    setIndex((activeIndex - 1 + images.length) % images.length);
  }
  function handleClick(e) {
    setIndex(e);
  }

  return (
    <>
      <div className="carousel-container">
        <PrevButton onCustomClick={handlePreviousClick} />
        <div className="carousel-image-container">
          <img
            src={images[activeIndex].src}
            className="carousel-image"
            alt="pokemon"
          />
        </div>
        <NextButton onCustomClick={handleNextClick} />
      </div>
      <div className="carousel-progress">
        <Indicators
          count={images.length}
          onSelect={handleClick}
          activeIndex={activeIndex}
        />
      </div>
    </>
  );
}

function NextButton({ onCustomClick }) {
  return (
    <div className="carousel-control">
      <FaChevronRight onClick={onCustomClick} />
    </div>
  );
}

function PrevButton({ onCustomClick }) {
  return (
    <div className="carousel-control">
      <FaChevronLeft onClick={onCustomClick} />
    </div>
  );
}
function CustomButton({ bkgColor = 'white', onCustomClick }) {
  return (
    <FaRegCircle
      onClick={onCustomClick}
      style={{ backgroundColor: bkgColor }}
    />
  );
}

function Indicators({ count, onSelect, activeIndex }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <CustomButton
        key={i}
        onCustomClick={() => onSelect(i)}
        bkgColor={activeIndex === i && 'black'}
      />
    );
  }
  return <div>{buttons}</div>;
}
