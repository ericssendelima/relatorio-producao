import React, { useContext } from "react";
import { VisorInfo, Sections } from "./style";
import { ListaContext } from "../contexts/ListaContext";

import Card from "./Card";

const ExpoInfo = () => {
  const { lista } = useContext(ListaContext);

  // const texto = `
  //   ${relatorio.cabine}
  //   ${relatorio.cliente} ${relatorio.secao}T${relatorio.torre}
  //   ${relatorio.situacao}
  //   Equipe: ${relatorio.equipe}
  // `;

  // console.log(texto);

  return (
    <VisorInfo>
      {lista.length > 0 ? (
        lista.map((relatorio) => {
          return (
            <li key={lista.indexOf(relatorio)}>
              <Card
                id={relatorio.id}
                cabine={relatorio.cabine}
                cliente={relatorio.cliente}
                secao={relatorio.secao}
                torre={relatorio.torre}
                situacao={relatorio.situacao}
                equipe={relatorio.equipe}
              />
            </li>
          );
        })
      ) : (
        <Sections $positions="350px"></Sections>
      )}
      
    </VisorInfo>
  );
};

export default ExpoInfo;
