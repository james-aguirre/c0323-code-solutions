import { useState } from 'react';

export default function ControlledForm() {
  // this works by storing the input in the cache with each key input, be sure to always set
  // useStates value to '' to avoid bugs
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ username, password });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}></input>
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
      </label>
      <button>Submit</button>
    </form>
  );
}
