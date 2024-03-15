import React, { useState } from "react";
import "./login.css";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// eslint-disable-next-line
import { db } from "../../firebase/config";

const Login = ({ checkLog }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logando, setLogando] = useState(false);
  // const [userLog, setUserLog] = useState("");

  const auth = getAuth();

  const entrar = () => {
    setLogando(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        checkLog();
        // const user = userCredential.user;
        // const userSigned = auth.currentUser;
        setLogando(false);

      })
      .catch((error) => {
        // const errorCode = error.code;
        setLogando(false);

        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div id="loginContainer">
      <div id="topLogin">Login</div>
      <div id="formLogin">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div id="lembrar">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span id="lembrar">Lembrar</span>
      </div>

      {logando === false ? (
        <button id="entrar" onClick={() => entrar()}>
          Entrar
        </button>
      ) : (
        <button id="aguarde" disabled>
          ...Aguarde
        </button>
      )}
    </div>
  );
};

export default Login;
