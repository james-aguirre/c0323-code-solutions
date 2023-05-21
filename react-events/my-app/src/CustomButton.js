import './CustomButton.css';

export default function CustomButton({
  text,
  className,
  message,
  onCustomClick,
}) {
  return (
    <button onClick={() => onCustomClick(text)} className={className}>
      {text}
    </button>
  );
}
