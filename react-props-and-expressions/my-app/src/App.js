import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CustomButton text="I" className="CustomButton-buttonOne" />
        <CustomButton text="Know" className="CustomButton-buttonTwo" />
        <CustomButton text="React!" className="CustomButton-buttonThree" />
      </header>
    </div>
  );
}

export default App;
