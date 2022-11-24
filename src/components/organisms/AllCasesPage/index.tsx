import React from 'react';
import i18next from 'i18next';
import Link from 'next/link';
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
  TitleStyled,
} from './styled';
import AllCaseList from '../../molecules/AllCaseList';
import { Typography } from '../../../styles/typography';

function Cases() {
  const { t } = i18next;
  const memoriesUpHover = [
    '/images/memories-up-1.jpg',
    '/images/memories-up-2.jpg',
    '/images/memories-up-3.jpg',
    '/images/memories-up-4.jpg',
  ];
  const maisAcessoHover = [
    '../images/mais-acesso-1.jpg',
    '../images/mais-acesso-2.jpg',
    '../images/mais-acesso-3.jpg',
    '../images/mais-acesso-4.jpg',
  ];
  const toParadoHover = [
    '../images/to-parado-1.jpg',
    '../images/to-parado-2.jpg',
    '../images/to-parado-3.jpg',
    '../images/to-parado-4.jpg',
  ];
  const FilaDeTrabalho = [
    '/images/fila-de-trabalho-1.jpg',
    '/images/fila-de-trabalho-2.jpg',
    '/images/fila-de-trabalho-3.jpg',
    '/images/fila-de-trabalho-4.jpg',
  ];

  const allCases = [
    {
      number: '01',
      title: 'MemoriesUp',
      info: t('cases.weHelped'),
      image: '/images/capa-memories-up.jpg',
      alt: t('cases.alt.coverMemoriesUp'),
      link: '/nossos-cases/memories-up',
      hover: memoriesUpHover,
    },
    {
      number: '02',
      title: 'Mais Acesso',
      info: t('cases.webApp'),
      image: '/images/capa-mais-acesso.jpg',
      alt: t('cases.alt.coverMoreAccess'),
      link: '/nossos-cases/mais-acesso',
      hover: maisAcessoHover,
    },
    {
      number: '03',
      title: 'Tô Parado',
      info: t('cases.providers'),
      image: '/images/capa-to-parado.jpg',
      alt: t('cases.alt.coverImStopped'),
      link: '/nossos-cases/to-parado',
      hover: toParadoHover,
    },
    {
      number: '04',
      title: 'Fila de Trabalho',
      info: t('cases.educationalCredit'),
      image: '/images/capa-fila-de-trabalho-1.jpg',
      alt: t('cases.alt.coverWorkQueue'),
      link: '/nossos-cases/fila-de-trabalho',
      hover: FilaDeTrabalho,
    },
  ];

  return (
    <ContainerStyled id="allCases">
      <ContentStyled>
        <MainDivStyled>
          <DivStyled>
            <TitleStyled>{t('cases.seeSomeCases')}</TitleStyled>
            <AsideStyled>
              <ParagraphStyled>&lt;LA CREAM&gt;</ParagraphStyled>
            </AsideStyled>
            <AsideStyledbutton>
              <LanguageStyled>
                <Typography
                  tag="button"
                  size="xxsmall"
                  letterSpacing="space1"
                  className="typography"
                >
                  <Link href="/pt/nossos-cases" locale="pt" scroll={false}>
                    PT
                  </Link>
                </Typography>
                <Typography
                  tag="button"
                  size="xxsmall"
                  letterSpacing="space1"
                  className="typography"
                >
                  <Link href="/en/nossos-cases" locale="en" scroll={false}>
                    EN
                  </Link>
                </Typography>
              </LanguageStyled>
            </AsideStyledbutton>
          </DivStyled>
        </MainDivStyled>
        <PhraseStyled>{t('cases.weDoWell')}</PhraseStyled>
        <AllCaseList cases={allCases} />
      </ContentStyled>
    </ContainerStyled>
  );
}
export default Cases;
