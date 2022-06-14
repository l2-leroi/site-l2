import { AsideStyled, ContainerStyled, ContentStyled, DivStyled, ParagraphStyled, PhraseStyled, TitleStyled} from "./styled";
import CaseList from "../../molecules/CaseList";
import React from "react";

const Cases = () => {
  const memoriesUpHover = [
    "./images/memories-up-1.jpg", 
    "./images/memories-up-2.jpg", 
    "./images/memories-up-3.jpg", 
    "./images/memories-up-4.jpg"
  ];
  const maisAcessoHover = [
    "./images/mais-acesso-1.jpg", 
    "./images/mais-acesso-2.jpg", 
    "./images/mais-acesso-3.jpg", 
    "./images/mais-acesso-4.jpg"
  ];
  const toParadoHover = [
    "./images/to-parado-1.jpg", 
    "./images/to-parado-2.jpg", 
    "./images/to-parado-3.jpg", 
    "./images/to-parado-4.jpg"
  ];

  const cases = [
    { 
      number: "01", 
      title: "Memories Up", 
      info: "Ajudamos start-up americana a definir seu negócio e lançamos seu produto.", 
      image: "./images/capa-memories-up.jpg", 
      alt: "Capa Memories Up", 
      link: "#1", 
      hover: memoriesUpHover 
    },
    {   
      number: "02", 
      title: "Mais Acesso", 
      info: "Um Webapp que facilita a obtenção de crédito estudantil para jovens de todo brasil.", 
      image: "./images/capa-mais-acesso.jpg", 
      alt: "Capa Mais Acesso", 
      link: "#2", 
      hover: maisAcessoHover 
    },
    { 
      number: "03", 
      title: "Tô Parado", 
      info: "Prestadores de serviço crescem na vida com o app Android que criamos para Startup brasileira.", 
      image: "./images/capa-to-parado.jpg", 
      alt: "Capa Tô Parado", 
      link: "#3", 
      hover: toParadoHover 
    },
  ];

  return (
    <ContainerStyled id="cases">
      <ContentStyled>
        <DivStyled>
          <TitleStyled>NOSSOS CASES SELECIONADOS</TitleStyled>
          <AsideStyled>
            <ParagraphStyled>&lt;LA CREAM&gt;</ParagraphStyled>
          </AsideStyled>
        </DivStyled>
        <PhraseStyled>Fazemos muito bem porque nos preocupamos com qualidade, estética e, acima de tudo, com resultados.</PhraseStyled>
        <CaseList cases={cases} />
      </ContentStyled>
    </ContainerStyled>
  );
};
export default Cases;