import { AsideStyled, ContainerStyled, ContentStyled, DivStyled, ParagraphStyled, PhraseStyled, TitleStyled} from "./styled";
import CaseList from "../../../molecules/CaseList";
import React from "react";
import i18next from 'i18next';


import Button from "../../../atoms/Button";

const CasesMemoriesUp = () => {
  const  {t}  = i18next;

  
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
  const filaDeTrabalhoHover = [
    "../images/memories-up-2-copy.jpg",
    "../images/mais-acesso-3-copy.jpg", 
    "../images/to-parado-4-copy.jpg", 
    "../images/memories-up-3-copy.jpg"
  ];
 

  const cases = [
    { 
      number: "02", 
      title: "Mais Acesso", 
      info: t('cases.webApp'), 
      image: "../images/capa-mais-acesso.jpg",  
      alt: t('cases.alt.coverMoreAccess'), 
      link: "#1", 
      hover: maisAcessoHover  
    },
    {   
      number: "03", 
      title: "Tô Parado",
      info: t('cases.providers'),
      image: "../images/capa-to-parado.jpg", 
      alt: t('cases.alt.coverImStopped'), 
      link: "#2", 
      hover: toParadoHover 
    },
    { 
      number: "04", 
      title: "Fila de Trabalho", 
      info: t('cases.weHelpedThousands'), 
      image: "../images/capa-fila-de-trabalho.jpg", 
      alt: t('cases.alt.coverWorkQueue'), 
      link: "#1", 
      hover: filaDeTrabalhoHover 
    },
  ];

  return (
    <ContainerStyled id="cases">
      <ContentStyled>
        <DivStyled>
          <TitleStyled>{t('cases.ourCasesMemoriesUp')}</TitleStyled>
          {/* <AsideStyled>
            <ParagraphStyled>&lt;LA CREAM&gt;</ParagraphStyled>
          </AsideStyled> */}
        </DivStyled>
        {/* <PhraseStyled>{t('cases.weDoWell')}</PhraseStyled> */}
        <CaseList cases={cases} />
      </ContentStyled>
      <Button linkBtn={t('cases.seeAllCases')} text={"VEJA TODOS OS CASES"}></Button>
    </ContainerStyled>
  );
};
export default CasesMemoriesUp;