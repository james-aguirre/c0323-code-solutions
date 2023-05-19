import './CustomButton.css';

export default function CustomButton({ text, className }) {
  return <button className={className}>{text}</button>;
}
