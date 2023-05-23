import './App.css';
import UncontrolledForm from './RegistrationFormUncontrolled';
import ControlledForm from './RegistrationFormControlled';

function App() {
  return (
    <div>
      <UncontrolledForm>Uncontrolled form</UncontrolledForm>
      <ControlledForm>Controlled form</ControlledForm>
    </div>
  );
}

export default App;
