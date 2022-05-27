import { AsideStyled, BlackBg, BlackLineStyled, ContainerStyled, ContentStyled, CustomersContainer, DivStyled, HeaderStyled, ParagraphStyled, PhraseStyled, SubtitleStyled, TitleStyled} from "./styled";
import CaseList from "../../molecules/CaseList";
import React from "react";
import i18next from 'i18next';
import LineAnimation from "../../atoms/LineAnimation";
import { colors } from "../../../styles/colors";
import CustomersList from "../../molecules/CustomersList";
import OutSourcing from "../../atoms/OutSourcing";


const Cases = () => {
  const  {t}  = i18next;
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
      info: t('cases.weHelped'), 
      image: "./images/capa-memories-up.jpg", 
      alt: t('cases.alt.coverMemoriesUp'), 
      link: "#1", 
      hover: memoriesUpHover 
    },
    {   
      number: "02", 
      title: "Mais Acesso", 
      info: t('cases.webApp'), 
      image: "./images/capa-mais-acesso.jpg", 
      alt: t('cases.alt.coverMoreAccess'), 
      link: "#2", 
      hover: maisAcessoHover 
    },
    { 
      number: "03", 
      title: "Tô Parado", 
      info: t('cases.providers'), 
      image: "./images/capa-to-parado.jpg", 
      alt: t('cases.alt.ImStopped'), 
      link: "#3", 
      hover: toParadoHover 
    },
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
        <CaseList cases={cases} />
      </ContentStyled>
      <BlackBg />
    </ContainerStyled>
   
  );
};
export default Cases;