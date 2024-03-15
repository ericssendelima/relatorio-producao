import React, { useContext } from "react";
import { ListaContext } from "../contexts/ListaContext";

import { LinhasInfoExpo, SectionsExpo, ExcluirRelatorio } from "./style";

import { ImBin } from "react-icons/im";
import { RelatorioFinalContext } from "../contexts/RelatorioFinalContext";


const Card = (props) => {
  const { lista, setLista } = useContext(ListaContext);
  const { relatorioFinal, setRelatorioFinal } = useContext(RelatorioFinalContext);


  const { id, cabine, cliente, secao, torre, situacao, equipe } = props;



  const doIt = () => {
    const newLista = lista.filter((relatorio) =>
      relatorio.id !== id ? relatorio : ""
    );
    setLista(newLista);
    setRelatorioFinal([relatorioFinal[0], [...newLista]])
  };

  return (
    <SectionsExpo $justify="column">
      <LinhasInfoExpo $justifyContent="space-between">
        {cabine}
        <ExcluirRelatorio onClick={doIt}><ImBin /></ExcluirRelatorio>
      </LinhasInfoExpo>
      <LinhasInfoExpo>
        {cliente} {secao}T{torre}
      </LinhasInfoExpo>
      <LinhasInfoExpo>{situacao}</LinhasInfoExpo>
      <LinhasInfoExpo>Equipe: {equipe}</LinhasInfoExpo>
    </SectionsExpo>
  );
};

export default Card;
