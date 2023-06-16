import { useState } from 'react';

export default function ValidationForm() {
  const [password, setPassword] = useState('');
  function handleChange(e) {
    setPassword(e.target.value);
  }
  let val = password.length >= 8 ? 'is-valid' : 'is-invalid';
  let txt = 'A password is required';
  if (password.length < 8 && password.length !== 0) {
    txt = 'Your password is too short';
  }
  if (password.length >= 8) {
    txt = '';
  }

  return (
    <div>
      <form className="form-group position relation needs-validation">
        <label>
          <input
            type="password"
            className={`form-control ${val}`}
            value={password}
            onChange={handleChange}
            required></input>
        </label>
      </form>
      <span style={{ color: 'red', fontSize: '1.2rem' }}>{txt}</span>
    </div>
  );
}
