import { AsideStyled, ContentStyled, ParagraphStyled, PhraseStyled, TitleStyled } from "./styled";
import CaseList from "../../molecules/CaseList";

const Cases = () => {
  const memoriesUpHover = ["/memories-up-1.jpg"];
  const maisAcessoHover = [""];
  const toParadoHover = [""];

  const cases = [
    { number: "01", title: "Memories Up", info: "Ajudamos start-up americana a definir seu negócio e lançamos seu produto.", image: "/capa-memories-up.jpg", alt: "Capa Memories Up", link: "#1", hover: memoriesUpHover },
    { number: "02", title: "Mais Acesso", info: "Um Webapp que facilita a obtenção de crédito estudantil para jovens de todo brasil.", image: "/capa-mais-acesso.jpg", alt: "Capa Mais Acesso", link: "#2", hover: maisAcessoHover },
    { number: "03", title: "Tô Parado", info: "Prestadores de serviço crescem na vida com o app Android que criamos para Startup brasileira", image: "/capa-to-parado.jpg", alt: "Capa Tô Parado", link: "#3", hover: toParadoHover },
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