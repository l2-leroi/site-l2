import { AsideStyled, BlackBg, ContainerStyled, ContentStyled, DivStyled, ParagraphStyled, PhraseStyled, TitleStyled} from "./styled";
import AllCaseList from "../../molecules/AllCaseList";
import React from "react";
import i18next from 'i18next';

const Cases = () => {
  const  {t}  = i18next;
  const memoriesUpHover = [
    "../images/memories-up-1.jpg", 
    "../images/memories-up-2.jpg", 
    "../images/memories-up-3.jpg", 
    "../images/memories-up-4.jpg"
  ];
  const maisAcessoHover = [
    "../images/mais-acesso-1.jpg", 
    "../images/mais-acesso-2.jpg", 
    "../images/mais-acesso-3.jpg", 
    "../images/mais-acesso-4.jpg"
  ];
  const toParadoHover = [
    "../images/to-parado-1.jpg", 
    "../images/to-parado-2.jpg", 
    "../images/to-parado-3.jpg", 
    "../images/to-parado-4.jpg"
  ];
  const FilaDeTrabalho = [
    "../images/mais-acesso-1.jpg", 
    "../images/mais-acesso-2.jpg", 
    "../images/mais-acesso-3.jpg", 
    "../images/mais-acesso-4.jpg"
  ];

  const allCases = [
    { 
      number: "01", 
      title: "Memories Up", 
      info: t('allCases.weHelped'), 
      image: "../images/capa-memories-up.jpg", 
      alt: t('allCases.alt.coverMemoriesUp'), 
      link: "#1", 
      hover: memoriesUpHover 
    },
    { 
      number: "04", 
      title: "Fila de Trabalho", 
      info: t('allCases.educationalCredit'), 
      image: "../images/capa-fila-de-trabalho-1.jpg", 
      alt: t('allCases.alt.coverWorkQueue'), 
      link: "#4", 
      hover: FilaDeTrabalho 
    },
    {   
      number: "02", 
      title: "Mais Acesso", 
      info: t('allCases.webApp'), 
      image: "../images/capa-mais-acesso.jpg", 
      alt: t('allCases.alt.coverMoreAccess'), 
      link: "#2", 
      hover: maisAcessoHover 
    },
    { 
      number: "03", 
      title: "Tô Parado", 
      info: t('allCases.providers'), 
      image: "../images/capa-to-parado.jpg",
      alt: t('allCases.alt.coverImStopped'), 
      link: "#3", 
      hover: toParadoHover 
    }
  ];

  return (
  
    <ContainerStyled id="allCases">
      <ContentStyled>
        <DivStyled>
          <TitleStyled>{t('allCases.ourCases')}</TitleStyled>
          <AsideStyled>
            <ParagraphStyled>&lt;LA CREAM&gt;</ParagraphStyled>
          </AsideStyled>
        </DivStyled>
        <PhraseStyled>{t('allCases.weDoWell')}</PhraseStyled>
        <AllCaseList cases={allCases} />
      </ContentStyled>
      <BlackBg />
    </ContainerStyled>
  );
};
export default Cases;