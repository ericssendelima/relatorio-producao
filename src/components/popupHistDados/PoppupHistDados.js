import React, { useEffect, useState } from "react";
import "./PopupHistDados.css";

import { onValue, ref, remove, update } from "firebase/database";

import { db } from "../../firebase/config";

import { CgClose } from "react-icons/cg";
import { MdSearch } from "react-icons/md";
import { ImBin } from "react-icons/im";
import { TbEdit } from "react-icons/tb";
import { BsFillSendCheckFill } from "react-icons/bs";

const PoppupHistDados = ({ histOn }) => {
  const [relatorios, setRelatorios] = useState({});
  const [atualDate, setAtualDate] = useState("");
  const [isEditing, setIsEditing] = useState({ editing: false, atualRel: "" });

  const [cabine, setCabine] = useState("");
  const [secao, setSecao] = useState("");
  const [torre, setTorre] = useState("");
  const [situacao, setSituacao] = useState("");
  const [cliente, setCliente] = useState("");
  const [equipe, setEquipe] = useState("");

  let arrChaves = [];
  let texto = "";

  //READ

  useEffect(() => {
    onValue(
      ref(db, `relatorios/`),
      (snapshot) => {
        setRelatorios([]);
        const data = snapshot.val();

        if (data !== undefined) {
          setRelatorios({ ...data });
        } else {
          setRelatorios([]);
        }
      },
      (error) => alert(error)
    );
  }, []);

  if (relatorios.hasOwnProperty(atualDate)) {
    arrChaves = [...Object.keys(relatorios[atualDate].dados)];
  }

  const editar = (rel) => {
    setCabine(relatorios[atualDate].dados[rel].cabine);
    setCliente(relatorios[atualDate].dados[rel].cliente);
    setEquipe(relatorios[atualDate].dados[rel].equipe);
    setSecao(relatorios[atualDate].dados[rel].secao);
    setSituacao(relatorios[atualDate].dados[rel].situacao);
    setTorre(relatorios[atualDate].dados[rel].torre);

    setIsEditing({ editing: true, atualRel: rel });
  };

  const cancelarEdit = () => {
    setIsEditing({ editing: false, atualRel: "" });

    setCabine("");
    setCliente("");
    setEquipe("");
    setSecao("");
    setSituacao("");
    setTorre("");
  };

  const excluirRelCabine = (rel) => {
    remove(ref(db, `relatorios/${atualDate}/dados/${rel}`));
  };

  const excluirRelDia = () => {
    remove(ref(db, `relatorios/${atualDate}`));
  };

  const atualizar = (rel) => {
    update(ref(db, `relatorios/${atualDate}/dados/${rel}`), {
      cabine,
      cliente,
      secao,
      torre,
      situacao,
      equipe,
    }).then(cancelarEdit());
  };

  if (relatorios.hasOwnProperty(atualDate)) {
    texto = `${relatorios[atualDate].turno} - ${relatorios[atualDate].data.split("-").reverse().join("/")}
  `;
    arrChaves.map(
      (keysRel) =>
        (texto += `
    ${relatorios[atualDate].dados[keysRel].cabine}
    ${relatorios[atualDate].dados[keysRel].cliente}
    ${relatorios[atualDate].dados[keysRel].secao}T${relatorios[atualDate].dados[keysRel].torre}
    ${relatorios[atualDate].dados[keysRel].situacao}
    ${relatorios[atualDate].dados[keysRel].equipe}
    `)
    );
    texto += `
Observações:
${relatorios[atualDate].observacao}`;
  }

  let conteudo = encodeURIComponent(texto)
    .replace(/['()]/g, escape)
    .replace(/\*/g, "%2A")
    .replace(/%(?:7C|60|5E)/g, unescape);

  // const url = `https://wa.me//${n}?text=${conteudo}`;
  const url = "https://api.whatsapp.com/send?text=" + conteudo;

  const enviarRelatorio = () => {
    window.location.href = url;
  };

  return (
    <div id="PopupHistDadosContainer">
      <div id="buttonCloseContainer">
        <button
          id="fechar"
          onClick={() => histOn.setIsHistOn(!histOn.isHistOn)}
        >
          <CgClose />
        </button>
      </div>
      <div id="dataSeachContainer">
        <MdSearch />
        <input
          id="dateAtual"
          type="date"
          value={atualDate}
          onChange={(e) => {
            setAtualDate(e.target.value);
          }}
        />
      </div>
      <div id="dataExpo">
        <div id="tituloHist">
          {relatorios.hasOwnProperty(atualDate) && relatorios[atualDate].turno}{" "}
          - Data:{" "}
          {relatorios.hasOwnProperty(atualDate) &&
            relatorios[atualDate].data.split("-").reverse().join("/")}
        </div>
        <div id="bodyHist">
          <ul>
            {arrChaves.length > 0 &&
              arrChaves.map((rel) => (
                <div id="liAndButtons">
                  <li key={rel}>
                    {isEditing.editing && isEditing.atualRel === rel ? (
                      <>
                        <input
                          value={cabine}
                          onChange={(e) => setCabine(e.target.value)}
                        />
                        <div id="editingSecaoAndTorre">
                          <input
                            value={cliente}
                            onChange={(e) => setCliente(e.target.value)}
                          />
                          <input
                            value={secao}
                            onChange={(e) => setSecao(e.target.value)}
                          />
                          <input
                            value={torre}
                            onChange={(e) => setTorre(e.target.value)}
                          />
                        </div>
                        <input
                          value={situacao}
                          onChange={(e) => setSituacao(e.target.value)}
                        />
                        <input
                          value={equipe}
                          onChange={(e) => setEquipe(e.target.value)}
                        />
                      </>
                    ) : (
                      <>
                        <span>{relatorios[atualDate].dados[rel].cabine}</span>
                        <br />
                        <div id="editingSecaoAndTorre">
                          <span>
                            {relatorios[atualDate].dados[rel].cliente}
                          </span>
                          &nbsp;
                          <span>
                            {relatorios[atualDate].dados[rel].secao}T
                            {relatorios[atualDate].dados[rel].torre}
                          </span>
                        </div>
                        <br />
                        <span>{relatorios[atualDate].dados[rel].situacao}</span>
                        <br />
                        <span>{relatorios[atualDate].dados[rel].equipe}</span>
                        <br />
                        <br />
                      </>
                    )}
                  </li>
                  <div id="buttonsLi">
                    {isEditing.editing && isEditing.atualRel === rel ? (
                      <>
                        <button
                          id="cancelarEdit"
                          onClick={() => cancelarEdit()}
                        >
                          <CgClose />
                        </button>
                        <button
                          id="excluirRelCabine"
                          onClick={() => atualizar(rel)}
                        >
                          <BsFillSendCheckFill />
                        </button>
                      </>
                    ) : isEditing.editing ? (
                      ""
                    ) : (
                      <>
                        <button id="editRelCabine" onClick={() => editar(rel)}>
                          <TbEdit />
                        </button>

                        {arrChaves.length > 1 && (
                          <button
                            id="excluirRelCabine"
                            onClick={() => excluirRelCabine(rel)}
                          >
                            <ImBin />
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
          </ul>
          <span>
            Observações:
            <br />
            <br />
            {relatorios.hasOwnProperty(atualDate) &&
              relatorios[atualDate].observacao}
          </span>

          {arrChaves.length === 1 && (
            <button id="excluirRelDia" onClick={() => excluirRelDia()}>
              Apagar relatório
            </button>
          )}
          <div
            style={{
              width: "305px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {(relatorios[atualDate] !== "" && relatorios[atualDate] !== undefined ) && (
              <button id="enviarRelatorio" onClick={() => enviarRelatorio()}>
                Enviar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoppupHistDados;
