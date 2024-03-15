import React, { useContext, useState } from "react";
import "./Addinfos.css";
import { ListaContext } from "../contexts/ListaContext";
import { RelatorioFinalContext } from "../contexts/RelatorioFinalContext";

import PopUpLogOut from "./popUpLogOut/PopUpLogOut";

import { TbDeviceIpadDown } from "react-icons/tb";
import { HiMenuAlt3 } from "react-icons/hi";

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

const Addinfos = ({ checkLog }) => {
  const [popUpUser, setPopUpUser] = useState(false);
  const atualDate = new Date(Date.now()).toLocaleDateString(["pt-br"]);

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
      turno: "TURNO C",
      // data: document.getElementById("data").value,
      data: atualDate.split("/").reverse().join("-"),
      observacao: document.getElementById("observacao").value,
    };
    //data: document.getElementById("data").value.split("-").reverse().join("/")

    setLista([...lista, obj]);
    setRelatorioFinal([objFinal, [...lista, obj]]);

    document.getElementById("cabine").value = "";
    document.getElementById("cliente").value = "";
    document.getElementById("secao").value = "";
    document.getElementById("torre").value = "";
    document.getElementById("situacao").value = "";
    document.getElementById("equipe").value = "";
  };

  const addObs = () => {
    let relOne = relatorioFinal[0];
    relOne.observacao = document.getElementById("observacao").value;
    setRelatorioFinal([relOne, lista]);
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  const openPopUpUser = () => {
    setPopUpUser(!popUpUser);
  };

  return (
    <>
      <TituloRelatorio>
        <H1Relatorio>Relatório de produção</H1Relatorio>
        <button id="perfilLog" onClick={() => openPopUpUser()}>
          <HiMenuAlt3 />
        </button>
        {popUpUser && (
          <PopUpLogOut checkLog={checkLog} openPopUpUser={openPopUpUser} />
        )}
      </TituloRelatorio>

      <AddInfo>
        <RelatorioForm onSubmit={doIt}>
          <Sections
            $positions="140px"
            $justify="column"
            $paddings="7px"
            $widths="98%"
          >
            <LinhasInfo $justifyContent="space-between">
              <Campos $largura="50%">
                Cabine:
                <AddSelected id="cabine" required>
                  <AddOptions value=""></AddOptions>
                  <AddOptions value="JATO 01">JATO 01</AddOptions>
                  <AddOptions value="JATO 02">JATO 02</AddOptions>
                  <AddOptions value="JATO 03">JATO 03</AddOptions>
                  <AddOptions value="METALIZAÇÃO">METALIZAÇÃO</AddOptions>
                  <AddOptions value="PINTURA 01">PINTURA 01</AddOptions>
                  <AddOptions value="PINTURA 02">PINTURA 02</AddOptions>
                  <AddOptions value="PINTURA 03">PINTURA 03</AddOptions>
                  <AddOptions value="PINTURA 04">PINTURA 04</AddOptions>
                </AddSelected>
              </Campos>
              <Campos>
                Data:<span>&nbsp;{atualDate}</span>
                {/* <InputText
                  id="data"
                  type="date"
                  $comprimento="100px"
                /> */}
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

          <ObsExpo $comprimento="100%">
            <Sections
              $positions="90px"
              $justify="row"
              $marginsLeft="5px"
              $widths="92%"
            >
              <NormalDiv $justify="column">
                <LinhasInfo>
                  <Campos>
                    Situação:
                    <InputText id="situacao" $comprimento="140px" required />
                  </Campos>
                </LinhasInfo>
                <LinhasInfo $altura="25px">
                  <Campos $marginBottom="5px">
                    Equipe:
                    <InputText id="equipe" $comprimento="140px" required />
                  </Campos>
                </LinhasInfo>
              </NormalDiv>
            </Sections>
            <AddButton type="submit" value="+" />
          </ObsExpo>
        </RelatorioForm>
      </AddInfo>
      <ObsExpo>
        <Comentarios
          id="observacao"
          placeholder="Observações"
          autoCapitalize="on"
        ></Comentarios>

        <EnviarObs onClick={addObs}>
          <TbDeviceIpadDown />
        </EnviarObs>
      </ObsExpo>
    </>
  );
};

export default Addinfos;
