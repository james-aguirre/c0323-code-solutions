import DrawerComponent from './DrawerComponent';
import './App.css';

const items = [
  {
    number: '001',
    name: 'About',
  },
  {
    number: '002',
    name: 'Get Started',
  },
  {
    number: '003',
    name: 'Sign in',
  },
];
const heading = 'Menu';

function App() {
  return <DrawerComponent items={items} heading={heading} />;
}

export default App;
