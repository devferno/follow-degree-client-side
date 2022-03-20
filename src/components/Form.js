import React from "react";

const FormSignin = ({ signin, user, handleChange }) => {
  return (
    <form id="signin-form" onSubmit={signin}>
      <h1>Signin</h1>
      <input
        type="text"
        name="login"
        onChange={handleChange}
        value={user.login}
        placeholder="login"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
        value={user.password}
      />
      <button type="submit">signin</button>
    </form>
  );
};

export default FormSignin;
