import React, { useContext } from "react";
import { ListaContext } from "../contexts/ListaContext";
import { RelatorioFinalContext } from "../contexts/RelatorioFinalContext";

import { BsSendPlusFill } from "react-icons/bs";

import {
  RelatorioForm,
  TituloRelatorio,
  AddInfo,
  InputText,
  H1Relatorio,
  AddButton,
  AddSelected,
  AddOptions,
  Sections,
  LinhasInfo,
  Campos,
  Comentarios,
  EnviarObs,
  NormalDiv,
  ObsExpo,
} from "./style";

const Addinfos = () => {
  const { lista, setLista } = useContext(ListaContext);
  const { relatorioFinal, setRelatorioFinal } = useContext(
    RelatorioFinalContext
  );




  const doIt = (e) => {
    e.preventDefault();

    let obj = {
      id: Date.now(),
      cabine: document.getElementById("cabine").value,
      cliente: document.getElementById("cliente").value.toUpperCase(),
      secao: document.getElementById("secao").value,
      torre: document.getElementById("torre").value,
      situacao: document.getElementById("situacao").value,
      equipe: document.getElementById("equipe").value,
    };

    let objFinal = {
      turno: "Turno C",
      data: document
        .getElementById("data")
        .value.split("-")
        .reverse()
        .join("/"),
    };

    setLista([...lista, obj]);
    setRelatorioFinal([objFinal, [...lista, obj]]);

    
  };

  const addObs = () => {
    let relOne = relatorioFinal[0];
    relOne.observacao = document.getElementById("observacao").value;
    setRelatorioFinal([relOne, lista]);
    // console.log(relatorioFinal);
  };

  return (
    <>
      <TituloRelatorio>
        <H1Relatorio>Relatório de produção</H1Relatorio>
      </TituloRelatorio>

      <AddInfo>
        <RelatorioForm onSubmit={doIt}>
          <Sections $positions="100px" $justify="column" $paddings="7px">
            <LinhasInfo $justifyContent="space-between">
              <Campos $largura="50%">
                Cabine:
                <AddSelected id="cabine" required>
                  <AddOptions value=""></AddOptions>
                  <AddOptions value="Jato 01">Jato 01</AddOptions>
                  <AddOptions value="Jato 02">Jato 02</AddOptions>
                  <AddOptions value="Jato 03">Jato 03</AddOptions>
                  <AddOptions value="Metalização">Metalização</AddOptions>
                </AddSelected>
              </Campos>
              <Campos>
                Data:
                <InputText
                  id="data"
                  type="date"
                  $comprimento="100px"
                  required
                />
              </Campos>
            </LinhasInfo>
            <LinhasInfo>
              <Campos $largura="95%">
                Cliente/Projeto:
                <InputText
                  id="cliente"
                  $comprimento="15%"
                  type="text"
                  $textForm="uppercase"
                  required
                />
              </Campos>
            </LinhasInfo>
            <LinhasInfo $justifyContent="space-between">
              <Campos>
                Seção:
                <AddSelected id="secao" required>
                  <AddOptions value=""></AddOptions>
                  <AddOptions value="S1">S1</AddOptions>
                  <AddOptions value="S2">S2</AddOptions>
                  <AddOptions value="S3">S3</AddOptions>
                  <AddOptions value="S4">S4</AddOptions>
                  <AddOptions value="S5">S5</AddOptions>
                </AddSelected>
              </Campos>
              <Campos $largura="60%">
                Torre:
                <InputText
                  id="torre"
                  $comprimento="20%"
                  type="number"
                  required
                />
              </Campos>
            </LinhasInfo>
          </Sections>

          <Sections $positions="80px" $justify="row" $paddings="10px">
            <NormalDiv $justify="column">
              <LinhasInfo>
                <Campos>
                  Situação:
                  <InputText id="situacao" $comprimento="215px" required />
                </Campos>
              </LinhasInfo>
              <LinhasInfo $altura="25px">
                <Campos>
                  Equipe:
                  <InputText id="equipe" $comprimento="215px" required />
                </Campos>
              </LinhasInfo>
            </NormalDiv>

            <AddButton type="submit" value="+" />
          </Sections>
        </RelatorioForm>
      </AddInfo>
      <ObsExpo>
        <Comentarios
          id="observacao"
          placeholder="Observações"
          autoCapitalize="on"
        ></Comentarios>

        <EnviarObs onClick={addObs}>
          <BsSendPlusFill />
        </EnviarObs>
      </ObsExpo>
    </>
  );
};

export default Addinfos;
