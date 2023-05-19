import './CustomButton.css';

export default function CustomButton({ text, className, message }) {
  function handleClick() {
    window.alert(message);
  }
  return (
    <button onClick={handleClick} className={className}>
      {text}
    </button>
  );
}
