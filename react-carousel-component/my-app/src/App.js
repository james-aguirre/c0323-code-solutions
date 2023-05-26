import Carousel from './CarouselComponent';
import './App.css';
const images = [
  {
    id: 0,
    src: '/images/001.png',
  },
  {
    id: 1,
    src: '/images/004.png',
  },
  {
    id: 2,
    src: '/images/007.png',
  },
  {
    id: 3,
    src: '/images/025.png',
  },
  {
    id: 4,
    src: '/images/039.png',
  },
];

function App() {
  return <Carousel images={images} />;
}

export default App;
