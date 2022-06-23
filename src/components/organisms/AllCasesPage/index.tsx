import { 
  AsideStyled,
  AsideStyledbutton,
  ContainerStyled,
  ContentStyled, 
  DivStyled, 
  LanguageStyled, 
  MainDivStyled, 
  ParagraphStyled, 
  PhraseStyled, 
  TitleStyled} from "./styled";
import AllCaseList from "../../molecules/AllCaseList";
import AllCaseListCopy from "../../molecules/AllCaseListCopy"; 
import AllCaseListCopy_2 from "../../molecules/AllCaseListCopy_2";
import React from "react";
import i18next from 'i18next';
import { Typography } from "../../../styles/typography";
import Link from "next/link";

const Cases = () => {
  const  {t}  = i18next;
  const memoriesUpHover = [
    "/images/memories-up-1.jpg", 
    "/images/memories-up-2.jpg", 
    "/images/memories-up-3.jpg", 
    "/images/memories-up-4.jpg"
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
    "/images/fila-de-trabalho-1.jpg", 
    "/images/fila-de-trabalho-2.jpg", 
    "/images/fila-de-trabalho-3.jpg", 
    "/images/fila-de-trabalho-4.jpg"
  ];
  const Testehelo = [
    "/images/fila-de-trabalho-1.jpg", 
    "/images/fila-de-trabalho-2.jpg", 
    "/images/fila-de-trabalho-3.jpg", 
    "/images/fila-de-trabalho-4.jpg"
  ];

  const allCases = [
    { 
      number: "01", 
      title: "Memories Up", 
      info: t('allCases.weHelped'), 
      image: "/images/capa-memories-up.jpg", 
      alt: t('allCases.alt.coverMemoriesUp'), 
      link: "#1", 
      hover: memoriesUpHover 
    },
    {   
      number: "02", 
      title: "Mais Acesso", 
      info: t('allCases.webApp'), 
      image: "/images/capa-mais-acesso.jpg", 
      alt: t('allCases.alt.coverMoreAccess'), 
      link: "#2", 
      hover: maisAcessoHover 
    },
    { 
      number: "03", 
      title: "Tô Parado", 
      info: t('allCases.providers'), 
      image: "/images/capa-to-parado.jpg",
      alt: t('allCases.alt.coverImStopped'), 
      link: "#3", 
      hover: toParadoHover 
    },
    { 
      number: "04", 
      title: "Fila de Trabalho", 
      info: t('allCases.educationalCredit'), 
      image: "/images/capa-fila-de-trabalho-1.jpg", 
      alt: t('allCases.alt.coverWorkQueue'), 
      link: "#4", 
      hover: FilaDeTrabalho 
    },
    { 
      number: "05", 
      title: "Teste 5", 
      info: t('allCases.providers'), 
      image: "/images/capa-to-parado.jpg",
      alt: t('allCases.alt.coverImStopped'), 
      link: "#5", 
      hover: Testehelo 
    },
    { 
      number: "06", 
      title: "Teste 6", 
      info: t('allCases.providers'), 
      image: "/images/capa-to-parado.jpg",
      alt: t('allCases.alt.coverImStopped'), 
      link: "#6", 
      hover: Testehelo 
    },
    { 
      number: "07", 
      title: "Teste 7", 
      info: t('allCases.providers'), 
      image: "/images/capa-to-parado.jpg",
      alt: t('allCases.alt.coverImStopped'), 
      link: "#7", 
      hover: Testehelo 
    }/*,
    { 
      number: "08", 
      title: "Teste 8", 
      info: t('allCases.providers'), 
      image: "/images/capa-to-parado.jpg",
      alt: t('allCases.alt.coverImStopped'), 
      link: "#4", 
      hover: Testehelo 
    },
    { 
      number: "09", 
      title: "Teste 9", 
      info: t('allCases.providers'), 
      image: "/images/capa-to-parado.jpg",
      alt: t('allCases.alt.coverImStopped'), 
      link: "#5", 
      hover: Testehelo 
    },
    { 
      number: "10", 
      title: "Teste 10", 
      info: t('allCases.providers'), 
      image: "/images/capa-to-parado.jpg",
      alt: t('allCases.alt.coverImStopped'), 
      link: "#10", 
      hover: Testehelo 
    },
    { 
      number: "07", 
      title: "7 Teste helo 8", 
      info: t('allCases.providers'), 
      image: "/images/capa-to-parado.jpg",
      alt: t('allCases.alt.coverImStopped'), 
      link: "#4", 
      hover: Testehelo 
    },
    { 
      number: "08", 
      title: "8 Teste helo 9", 
      info: t('allCases.providers'), 
      image: "/images/capa-to-parado.jpg",
      alt: t('allCases.alt.coverImStopped'), 
      link: "#5", 
      hover: Testehelo 
    },
    { 
      number: "09", 
      title: "9 Teste helo 9", 
      info: t('allCases.providers'), 
      image: "/images/capa-to-parado.jpg",
      alt: t('allCases.alt.coverImStopped'), 
      link: "#6", 
      hover: Testehelo 
    },*/
  ];

  return (
  
    <ContainerStyled id="allCases">
      <ContentStyled>
        <MainDivStyled>
        <DivStyled>
          <TitleStyled>{t('allCases.ourCases')}</TitleStyled>
          <AsideStyled>
            <ParagraphStyled>&lt;LA CREAM&gt;</ParagraphStyled>
          </AsideStyled>
          <AsideStyledbutton>
          <LanguageStyled>
            <Typography tag='button' size="xxsmall" letterSpacing="space1" className="typography">
              <Link href='/pt/all-cases' locale='pt' scroll={false}>PT</Link>
            </Typography>
            <Typography tag='button' size="xxsmall" letterSpacing="space1" className="typography">
              <Link href='/en/all-cases' locale='en' scroll={false}>EN</Link>
            </Typography>
          </LanguageStyled>
          </AsideStyledbutton>
        </DivStyled>
        </MainDivStyled>
        <PhraseStyled>{t('allCases.weDoWell')}</PhraseStyled>

        {/*<AllCaseList cases={allCases} />*/}
        {/*<AllCaseListCopy cases={allCases} />*/}
       
        <AllCaseListCopy_2 cases={allCases} />
      </ContentStyled>
    </ContainerStyled>
    
  );
};
export default Cases;