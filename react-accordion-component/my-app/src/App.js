import './App.css';
import Accordian from './Accordian.js';

const topics = [
  {
    number: '001',
    txt: 'Lorem ipsum HTML sit amet, consectetur adipiscing',
    name: 'html',
  },
  {
    number: '002',
    txt: 'Lorem ipsum CSS sit amet, consectetur adipiscing elit',
    name: 'css',
  },
  {
    number: '003',
    txt: 'Lorem ipsum JavaScript sit amet, consectetur adi',
    name: 'javascript',
  },
];

function App() {
  return <Accordian topics={topics}></Accordian>;
}

export default App;
