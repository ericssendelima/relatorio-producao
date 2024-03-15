import React, { useContext } from "react";
import { RelatorioFinalContext } from "../contexts/RelatorioFinalContext";

import { VisorInfo, SectionsTituloRel, LinhasInfo } from "./style";

const ObsExpo = () => {
  const { relatorioFinal } = useContext(RelatorioFinalContext);
  
  return (
    <VisorInfo>
      <LinhasInfo $textSize="23px" $justifyContent="center" style={{color: "#f2dcc2"}}>
        Observações
      </LinhasInfo>

      <SectionsTituloRel $textSize="15px" $positions="auto" $comprimento="98%" style={{padding:"10px"}}>
        {relatorioFinal[0].observacao}
      </SectionsTituloRel>
    </VisorInfo>
  );
};

export default ObsExpo;
