import { styled } from "styled-components";

export const TituloRelatorio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 95%;
  border-radius: 15px 15px 0 0;

  font-weight: bold;
  background-color: #111316;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 8px 20px;
  border-radius: 10px;
`;

export const H1Relatorio = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-shadow: 0.1em 0.1em 20px black;
  color: #f9b17a;
  /* background-color: blueviolet; */
  width: 100%;
  font-size: 26px;
`;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 310px;
  width: 95%;
  color: #f9b17a;
  box-shadow: rgba(0, 0, 0) 0px 19px 38px, rgba(0, 0, 0) 0px 15px 12px;
  margin-top: 10px;
  border-radius: 10px 10px 0 0;
  background-color: #111316;
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
  background-color: #35383d;
  color: #f9b17a;

  border: none;
  box-shadow: rgba(0, 0, 0) 0px 10px 20px;
  border-radius: 5px;
  height: 20px;
  width: ${(props) => props.$comprimento};
  margin-left: 7px;
  text-transform: ${(props) => props.$textForm};

  @media (max-width: 370px) {
    width: 100px;
  }
`;

export const AddSelected = styled.select`
  background-color: #f9b17a;
  /* width: 15px; */
  font-weight: bold;
  margin-left: 5px;
  border-radius: 5px;
  height: 20px;
  box-shadow: rgba(0, 0, 0) 0px 10px 20px;
`;

export const AddOptions = styled.option`
  background-color: #1c1f24;
  color: #f9b17a;
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
  background-color: #1c1f24;
  margin-top: ${(props) => props.$paddings};
  margin-top: ${(props) => props.$marginsTop};
  margin-left: ${(props) => props.$marginsLeft};
`;

export const SectionsExpo = styled(Sections)`
  background-color: #35383d;
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
`;

export const Campos = styled.div`
  /* background-color: darkseagreen; */
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
  background-color: #1c1f24;
  box-shadow: rgba(0, 0, 0) 0px 10px 20px;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  line-height: 1.5;
  color: #f9b17a;
  margin: 5px;
  resize: none;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
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
  background-color: #f9b17a;
  color: #1c1f24;
  font-size: 35px;
  box-shadow: rgba(0, 0, 0) 0px 10px 20px;
  border-radius: 10px;
  width: 65px;
  height: 70px;
  cursor: pointer;
  margin: 5px;
  font-weight: bold;
  &:hover {
    background-color: #ffdcc4;
  }
`;

export const LimpezaTotal = styled(AddButton)`
  width: 160px;
  font-size: 20px;
  font-weight: bold;
  height: 40px;
  margin-top: 10px;
  position: relative;
  bottom: 5px;
  &:hover {
    background-color: red;
  }
`;

export const Enviar = styled(LimpezaTotal)`
  position: fixed;
  bottom: 3px;
  right: 3px;
  width: 95px;
  height: 40px;
  font-size: 20px;
  background-color: #37aac0;

  @media (max-width: 685px) {
    width: 55px;
    font-size: 15px;
  }

  &:hover {
    background-color: #f9b17a;
  }
`;

export const ExcluirRelatorio = styled.button`
  background-color: #f9b17a;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0) 0px 10px 20px;
  border-radius: 7px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  font-size: 15px;
  padding: 0;
  margin: 0;
  &:hover {
    background-color: red;
  }
`;

export const EnviarObs = styled(ExcluirRelatorio)`
  font-size: 25px;
  width: 40px;
  height: 40px;
  margin-right: 5px;
  &:hover {
    background-color: #ffdcc4;
  }
`;

export const Subir = styled(EnviarObs)`
  position: fixed;
  bottom: 8px;
  left: 5px;
  border-radius: 50%;
`;
