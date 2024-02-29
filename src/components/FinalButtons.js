import React, { useContext } from "react";

import { Enviar, VisorInfo } from "./style";
import { LimpezaTotal } from "./style";

import { ListaContext } from "../contexts/ListaContext";
import { RelatorioFinalContext } from "../contexts/RelatorioFinalContext";

const FinalButtons = () => {
  const { setLista } = useContext(ListaContext);

  const { relatorioFinal } = useContext(RelatorioFinalContext);

  let texto = `${relatorioFinal[0].turno} - ${relatorioFinal[0].data}
  `;

  const doIt = () => {
    setLista([]);
  };
  const enviar = () => {
    relatorioFinal[1].map(
      (obj) =>
        (texto += `
    ${obj.cabine}
    ${obj.cliente}
    ${obj.secao}T${obj.torre}
    ${obj.situacao}
    ${obj.equipe}
    `)
    );

    texto += `
${relatorioFinal[0].observacao}`;

    let conteudo = encodeURIComponent(texto)
      .replace(/['()]/g, escape)
      .replace(/\*/g, "%2A")
      .replace(/%(?:7C|60|5E)/g, unescape);


    // const url = `https://wa.me//${n}?text=${conteudo}`;
  const url = "https://api.whatsapp.com/send?text=" + conteudo;


    window.location.href = url;

    // console.log(texto);
  };

  return (
    <VisorInfo>
      <LimpezaTotal type="submit" value="Excluir tudo" onClick={doIt} />
      <Enviar type="submit" value="Enviar" onClick={enviar} />
    </VisorInfo>
  );
};

export default FinalButtons;
