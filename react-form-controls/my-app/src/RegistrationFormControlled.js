import { useState } from 'react';

export default function UncontrolledForm() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ username, password });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label for="username">
        Username
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}></input>
      </label>
      <label for="password">
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
