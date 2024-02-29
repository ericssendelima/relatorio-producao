import React, { useContext } from "react";
import { LinhasInfo, SectionsTituloRel, VisorInfo } from "./style";
import { RelatorioFinalContext } from "../contexts/RelatorioFinalContext";

const TituloExpo = () => {
  const { relatorioFinal } = useContext(RelatorioFinalContext);
  return (
    <VisorInfo>
      <LinhasInfo $textSize="30px" $justifyContent="center">Relatório</LinhasInfo>
      <SectionsTituloRel $positions="35px" $marginsTop="2px" $comprimento="45%" $textSize="20px">
        {relatorioFinal[0].turno}
      </SectionsTituloRel>
      <SectionsTituloRel $positions="35px" $marginsTop="2px" $comprimento="45%" $textSize="20px">
        {relatorioFinal[0].data}
      </SectionsTituloRel>
    </VisorInfo>
  );
};

export default TituloExpo;
