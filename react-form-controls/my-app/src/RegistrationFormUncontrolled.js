export default function UncontrolledForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password } = Object.fromEntries(formData.entries());
    console.log({ username, password });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input type="text" name="username"></input>
      </label>
      <label>
        Password
        <input type="password" name="password"></input>
      </label>
      <button>Submit</button>
    </form>
  );
}
