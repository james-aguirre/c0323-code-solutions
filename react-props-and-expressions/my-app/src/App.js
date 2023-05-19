import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CustomButton text="I" className="buttonOne" />
        <CustomButton text="Know" className="buttonTwo" />
        <CustomButton text="React!" className="buttonThree" />
      </header>
    </div>
  );
}

export default App;
