import React, { useState } from "react";

const Login = (props) => {
  const [inputId, setInputId] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <input
          type="text"
          name="input_id"
          value={inputId}
          onChange={handleInputId}
        />
        <input
          type="text"
          name="input_password"
          value={inputPassword}
          onChange={handleInputPassword}
        />
      </div>
    </div>
  );
};

export default Login;
