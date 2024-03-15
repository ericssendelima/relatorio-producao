import React, { useContext } from "react";
import { LinhasInfo, SectionsTituloRel, VisorInfo } from "./style";
import { RelatorioFinalContext } from "../contexts/RelatorioFinalContext";

const TituloExpo = () => {
  const { relatorioFinal } = useContext(RelatorioFinalContext);
  return (
    <VisorInfo>
      <LinhasInfo $textSize="24px" $justifyContent="center" style={{color: "#f2dcc2"}}>Relatório</LinhasInfo>
      <SectionsTituloRel $positions="35px" $marginsTop="2px" $comprimento="45%" $textSize="18px">
        {relatorioFinal[0].turno}
      </SectionsTituloRel>
      <SectionsTituloRel $positions="35px" $marginsTop="2px" $comprimento="45%" $textSize="18px">
        {relatorioFinal[0].data !== undefined && relatorioFinal[0].data.split("-").reverse().join("/")}
      </SectionsTituloRel>
    </VisorInfo>
  );
};

export default TituloExpo;

//.split("-").reverse().join("/")