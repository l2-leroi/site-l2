import { AsideStyled, ContentStyled, ParagraphStyled, PhraseStyled, TitleStyled } from "./styled";
import memoriesUp from "../../../assets/images/capa-memories-up.svg";
import maisAcesso from "../../../assets/images/capa-mais-acesso.svg";
import toParado from "../../../assets/images/capa-to-parado.svg";
import CaseList from "../../molecules/CaseList";

const Cases = () => {
  const cases = [
    { number: "01", title: "Memories Up", info: "Ajudamos start-up americana a definir seu negócio e lançamos seu produto.", image: memoriesUp, alt: "Capa Memories Up", link:"#1" },
    { number: "02", title: "Mais Acesso", info: "Um Webapp que facilita a obtenção de crédito estudantil para jovens de todo brasil.", image: maisAcesso, alt: "Capa Mais Acesso", link:"#2" },
    { number: "03", title: "Tô Parado", info: "Prestadores de serviço crescem na vida com o app Android que criamos para Startup brasileira", image: toParado, alt: "Capa Tô Parado", link:"#3" },
  ];

  return (
    <ContentStyled>
      <AsideStyled>
        <ParagraphStyled>&lt;LA CREAM&gt;</ParagraphStyled>
      </AsideStyled>
      <TitleStyled>NOSSOS CASES SELECIONADOS</TitleStyled>
      <PhraseStyled>Fazemos muito bem porque nos preocupamos com qualidade, estética e, acima de tudo, com resultados.</PhraseStyled>
      <CaseList cases={cases} linkBtn="#4" />
    </ContentStyled>
  );
};
export default Cases;