import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

import Login from './pages/login/login';
import Dashboard from './pages/dashboard/Dashboard'

import { useState } from 'react'

function App() {
  const [isLogged, setIsLogged] = useState(false);//tem que ficar false quando estiver pronto
  // const [isLogged] = useState(false);//tem que ficar false quando estiver pronto

  const checkLog = () => {
    setIsLogged(!isLogged);
  }
  return (
    <div id="AppContainer">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              isLogged ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login checkLog={checkLog} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              isLogged ? (
                <Dashboard checkLog={checkLog} />
              ) : (
                <Login checkLog={checkLog} />
              )
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
