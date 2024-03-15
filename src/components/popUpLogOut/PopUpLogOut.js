import React , {useState} from "react";
import "./PopUpLogOut.css";

import { TbLogout2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import PoppupHistDados from "../popupHistDados/PoppupHistDados";

import { getAuth, signOut } from "firebase/auth";


const PopUpLogOut = ({ openPopUpUser, checkLog }) => {
  const [isHistOn, setIsHistOn] = useState(false);
  const auth = getAuth();
  
  
  const sair = () => {
    signOut(auth)
      .then(() => {
        checkLog()
      })
      .catch((error) => {
        alert(error);
      });
  };
  
  return (
    <div id="PopUpLogOutContainer">
      <div id="popuphuserheader">
        <div id="userPopUpInfo">
          <h4>Teste</h4>
          <p>teste@teste.com</p>
        </div>
        <button onClick={() => openPopUpUser()}><IoClose /></button>
      </div>
      <div id="historico">
      <button id="histDados" onClick={()=> setIsHistOn(!isHistOn)}>Histórico</button></div>
      <div id="signout">
        <button id="logout" onClick={() => sair()}>
          <TbLogout2 />
          <span>Logout</span>
        </button>
      </div>
      {isHistOn && <PoppupHistDados histOn={{isHistOn, setIsHistOn}}/>}
    </div>
  );
};

export default PopUpLogOut;
