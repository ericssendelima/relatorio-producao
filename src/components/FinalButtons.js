import React, { useContext, useEffect, useState } from "react";
import { uid } from "uid";

import { Enviar, VisorInfo, Subir } from "./style";
import { LimpezaTotal } from "./style";

import { ListaContext } from "../contexts/ListaContext";
import { RelatorioFinalContext } from "../contexts/RelatorioFinalContext";

import { LuArrowUpToLine } from "react-icons/lu";

import { ref, set, onValue } from "firebase/database";
import { db } from "../firebase/config";

const FinalButtons = () => {
  const { setLista } = useContext(ListaContext);

  const { relatorioFinal } = useContext(RelatorioFinalContext);

  const [hasTodayData, setHasTodayData] = useState(false);

  const doIt = () => {
    setLista([]);
  };

  useEffect(() => {
    onValue(
      ref(db, `relatorios/`),
      (snapshot) => {
        const date = new Date(Date.now())
          .toLocaleDateString(["pt-br"])
          .split("/")
          .reverse()
          .join("-");
        setHasTodayData(snapshot.hasChild(date));
      },
      (error) => alert(error)
    );
  }, []);


  const salvar = () => {
    if (!hasTodayData) {
      set(ref(db, `relatorios/${relatorioFinal[0].data}/`), {
        data: relatorioFinal[0].data,
        turno: relatorioFinal[0].turno,
        observacao: relatorioFinal[0].observacao,
      }).then(alert("Relatório salvo com sucesso!"));

      // eslint-disable-next-line
      relatorioFinal[1].map((obj) => {
        let rUid = uid(25);

        set(ref(db, `relatorios/${relatorioFinal[0].data}/dados/${rUid}/`), {
          cabine: obj.cabine,
          secao: obj.secao,
          torre: obj.torre,
          equipe: obj.equipe,
          situacao: obj.situacao,
          cliente: obj.cliente,
        });
      });
    }else{
      // eslint-disable-next-line
      relatorioFinal[1].map((obj) => {
        let rUid = uid(25);

        set(ref(db, `relatorios/${relatorioFinal[0].data}/dados/${rUid}/`), {
          cabine: obj.cabine,
          secao: obj.secao,
          torre: obj.torre,
          equipe: obj.equipe,
          situacao: obj.situacao,
          cliente: obj.cliente,
        });
      });
    }
    subir()
    doIt()
  };

  const subir = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <VisorInfo>
      <LimpezaTotal type="submit" value="Excluir tudo" onClick={doIt} />
      <Enviar type="submit" value="Salvar" onClick={() => salvar()} />
      <Subir onClick={subir}>
        <LuArrowUpToLine />
      </Subir>
    </VisorInfo>
  );
};

export default FinalButtons;
