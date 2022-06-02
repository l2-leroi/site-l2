import { AsideStyled, ContainerStyled, ContentStyled, DivStyled, ParagraphStyled, PhraseStyled, TitleStyled} from "./styled";
import CaseList from "../../molecules/CaseList";
import React from "react";
import i18next from 'i18next';

import path from 'path';
import { DivItemStyled } from "../HeaderMemoriesUp/styled";
import Button from "../../atoms/Button";

const CasesMemoriesUp = () => {
  const  {t}  = i18next;
//   console.log('OI',)
  
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
    "../images/memories-up-2.jpg",
    "../images/mais-acesso-3.jpg", 
    "../images/to-parado-4.jpg", 
    "../images/memories-up-3.jpg"
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
      {/* <DivItemStyled className="link">
        <Button></Button>
        <Link>VEJA TODOS OS CASES </Link>
        <button>icon</button>
      </DivItemStyled> */}
    </ContainerStyled>
  );
};
export default CasesMemoriesUp;