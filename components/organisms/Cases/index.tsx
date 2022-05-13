import { AsideStyled, ContainerStyled, ContentStyled, DivStyled, ParagraphStyled, PhraseStyled, TitleStyled} from "./styled";
import CaseList from "../../molecules/CaseList";
import React from "react";
//translation
import { useTranslations } from 'next-intl'
import { t } from "i18next";


const Cases = () => {
  //translation
  const t = useTranslations('cases');

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
      title: t('memoriesUp'), 
      info: t('weHelp'), 
      image: "./images/capa-memories-up.jpg", 
      alt: "Capa Memories Up", 
      link: "#1", 
      hover: memoriesUpHover 
    },
    {   
      number: "02", 
      title: t('moreAccess'), 
      info: t('webApp'), 
      image: "./images/capa-mais-acesso.jpg", 
      alt: "Capa Mais Acesso", 
      link: "#2", 
      hover: maisAcessoHover 
    },
    { 
      number: "03", 
      title: t('stopped'), 
      info: t('providers'), 
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
          <TitleStyled>{t('ourCases')}</TitleStyled>
          <AsideStyled>
            <ParagraphStyled>&lt;LA CREAM&gt;</ParagraphStyled>
          </AsideStyled>
        </DivStyled>
        <PhraseStyled>{t('weDoWell')}</PhraseStyled>
        <CaseList cases={cases} />
      </ContentStyled>
    </ContainerStyled>
  );
};
export default Cases;