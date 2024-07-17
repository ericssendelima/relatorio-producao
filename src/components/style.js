import { styled } from "styled-components";

export const TituloRelatorio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 95%;
  border-radius: 15px 15px 0 0;

  font-weight: bold;
  background-color: #011525;

  box-shadow: rgba(0, 0, 0, 0.5) 0px 8px 20px;
  border-radius: 10px;
`;

export const H1Relatorio = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-shadow: 0.1em 0.1em 20px black;
  color: #f2dcc2;
  /* background-color: blueviolet; */
  width: 100%;
  font-size: 26px;
`;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 260px;
  width: 95%;
  color: #011525;
  box-shadow: rgba(0, 0, 0) 0px 19px 38px, rgba(0, 0, 0) 0px 15px 12px;
  margin-top: 10px;
  border-radius: 10px 10px 0 0;
  background-color: #011525af;
`;

export const ObsExpo = styled(AddInfo)`
  background-color: transparent;
  box-shadow: none;
  height: 100px;
  /* position: relative; */
  flex-direction: row;
  padding-right: 3px;
  justify-content: space-around;
  width: ${(props) => props.$comprimento};
`;

export const VisorInfo = styled(AddInfo)`
  /* background-color: blueviolet; */
  border-radius: 0 0 10px 10px;
  justify-content: space-around;
  list-style: none;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  height: auto;
  margin: 8px 0 5px 0;
`;

export const InputText = styled.input`
  background-color: #f2dcc2;
  color: #011526;
  padding-left: 5px;
  border: none;
  box-shadow: rgb(0,0,0,0.4) 0px 5px 5px;
  border-radius: 5px;
  height: 20px;
  width: ${(props) => props.$comprimento};
  margin-left: 7px;
  text-transform: ${(props) => props.$textForm};

  outline: none;
  

  @media (max-width: 370px) {
    width: 100px;
  }
`;

export const AddSelected = styled.select`
  background-color: #f2522e;
  /* width: 15px; */
  font-weight: bold;
  border: none;
  margin-left: 5px;
  border-radius: 5px;
  height: 20px;
  box-shadow: rgb(0,0,0,0.4) 0px 5px 5px;
  outline: none;
`;

export const AddOptions = styled.option`
  background-color: #bfae99;
  color: #011526;
  border: none;
`;

export const Sections = styled.div`
  /* background-color: blue; */

  width: ${(props) => props.$widths};
  height: ${(props) =>
    props.$positions === "top"
      ? "37%"
      : props.$positions === "medium"
      ? "24%"
      : props.$positions === "bottom"
      ? "27%"
      : props.$positions};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => props.$justify};
  box-shadow: rgba(0, 0, 0) 0px 10px 20px;
  border-radius: 5px;
  background-color: #bfae99;
  margin-top: ${(props) => props.$paddings};
  margin-top: ${(props) => props.$marginsTop};
  margin-left: ${(props) => props.$marginsLeft};
`;

export const SectionsExpo = styled(Sections)`
  background-color: #f2dcc2;
  color: #011526;

  height: 100px;
  width: 300px;
  padding-bottom: 8px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const SectionsTituloRel = styled(Sections)`
  /* background-color: blueviolet; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$comprimento};
  font-weight: bold;
  font-size: ${(props) => props.$textSize};
  margin-bottom: 5px;
  white-space: pre-line;
  color: #011526;
  background-color: #f2dcc2;
  /* padding: 10px */
`;

export const LinhasInfo = styled.div`
  /* background-color: brown; */
  width: 96%;
  height: ${(props) => props.$altura};
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$justifyContent};
  font-weight: bold;
  margin: 5px 0 7px 0;
  font-size: ${(props) => props.$textSize};
`;

export const LinhasInfoExpo = styled(LinhasInfo)`
  /* background-color: brown; */
  margin: 5px 0 0px 5px;
  font-size: 13.5px;
`;

export const Campos = styled.div`
  /* background-color: darkseagreen; */
  font-size: 14.5px;
  width: ${(props) => props.$largura};
  margin-bottom: ${(props) => props.$marginBottom};
`;

export const NormalDiv = styled.div`
  /* background-color: violet; */
  width: 85%;
  height: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: 2px; */
`;

export const Comentarios = styled.textarea`
  background-color: #f2dcc2;
  box-shadow: rgba(0, 0, 0) 0px 10px 20px;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  line-height: 1.5;
  color: #011526;
  margin: 5px;
  resize: none;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  outline:none;
`;

export const RelatorioForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const AddButton = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2522e;

  color: #011526;
  font-size: 35px;
  box-shadow: rgba(0, 0, 0) 0px 10px 20px;
  border-radius: 10px;
  width: 65px;
  height: 70px;
  cursor: pointer;
  margin: 5px;
  font-weight: bold;

  @media (min-width: 450px) {
    &:hover {
      background-color: #f2522eaf;
      color: #f2dcc2;
    }
  }
`;

export const LimpezaTotal = styled(AddButton)`
  width: 160px;
  font-size: 20px;
  font-weight: bold;
  height: 40px;
  margin-top: 10px;

  @media (min-width: 450px) {
    &:hover {
      background-color: #f2522eaf;
      cursor: pointer;
      color: #f2dcc2;
    }
  }
`;

export const Enviar = styled(LimpezaTotal)`
  /* position: fixed; */
  bottom: 3px;
  right: 3px;
  width: 95px;
  height: 40px;
  font-size: 20px;
  background-color: #59de92;

  @media (max-width: 685px) {
    width: 55px;
    font-size: 15px;
  }

  @media (min-width: 450px) {
    &:hover {
      background-color: #59de9290;
      cursor: pointer;
      color: #111526;
    }
  }
`;

export const ExcluirRelatorio = styled.button`
  background-color: #f2522e;
  cursor: pointer;
  box-shadow: rgb(0,0,0,0.4) 0px 5px 5px;
  border-radius: 7px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  font-size: 15px;
  padding: 0;
  margin: 0;
`;

export const EnviarObs = styled(ExcluirRelatorio)`
  font-size: 25px;
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

export const Subir = styled(EnviarObs)`
  position: fixed;
  bottom: 8px;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #BFAE99;
  border: none;
  box-shadow: none;
`;
