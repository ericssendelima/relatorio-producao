import React, { useContext } from "react";
import { RelatorioFinalContext } from "../contexts/RelatorioFinalContext";

import { VisorInfo, SectionsTituloRel, LinhasInfo } from "./style";

const ObsExpo = () => {
  const { relatorioFinal } = useContext(RelatorioFinalContext);
  
  return (
    <VisorInfo>
      <LinhasInfo $textSize="25px" $justifyContent="center">
        Observações
      </LinhasInfo>

      <SectionsTituloRel $textSize="18px" $positions="auto" $comprimento="98%">
        {relatorioFinal[0].observacao}
      </SectionsTituloRel>
    </VisorInfo>
  );
};

export default ObsExpo;
