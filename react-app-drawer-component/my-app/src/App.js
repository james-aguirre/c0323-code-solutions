import DrawerComponent from './DrawerComponent';
import { useState } from 'react';

const items = ['About', 'foo', 'bar'];
const heading = 'Menu';

function App() {
  const [item, setItem] = useState('noMenuSelected');
  return (
    <div>
      <DrawerComponent onSelect={setItem} items={items} heading={heading} />
      <h1>{item}</h1>
    </div>
  );
}

export default App;
