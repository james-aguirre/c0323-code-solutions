import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    alert(`Clicked ${text}`);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CustomButton
          onCustomClick={handleCustomClick}
          text="Foo"
          message="bar"
          className="CustomButton-buttonOne"
        />
        <CustomButton
          onCustomClick={handleCustomClick}
          text="Bar"
          message="Baz"
          className="CustomButton-buttonTwo"
        />
        <CustomButton
          onCustomClick={handleCustomClick}
          text="Baz"
          message="Qux"
          className="CustomButton-buttonThree"
        />
      </header>
    </div>
  );
}

export default App;
