import React from 'react';
import i18next from 'i18next';
import { ContainerStyled, ContentStyled } from './styled';
import AllCaseList from '../../molecules/AllCaseList';
import InternalPageHeader from '../../molecules/InternalPageHeader';

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
      link: '#1',
      hover: memoriesUpHover,
    },
    {
      number: '02',
      title: 'Mais Acesso',
      info: t('cases.webApp'),
      image: '/images/capa-mais-acesso.jpg',
      alt: t('cases.alt.coverMoreAccess'),
      link: '#2',
      hover: maisAcessoHover,
    },
    {
      number: '03',
      title: 'Tô Parado',
      info: t('cases.providers'),
      image: '/images/capa-to-parado.jpg',
      alt: t('cases.alt.coverImStopped'),
      link: '#3',
      hover: toParadoHover,
    },
    {
      number: '04',
      title: 'Fila de Trabalho',
      info: t('cases.educationalCredit'),
      image: '/images/capa-fila-de-trabalho-1.jpg',
      alt: t('cases.alt.coverWorkQueue'),
      link: '#4',
      hover: FilaDeTrabalho,
    },
  ];

  const deaderProps  = {
    title: t('cases.seeSomeCases'),
    text: t('cases.weDoWell'),
    sideTag: t('cases.laCream'),
    pageName: t('cases.pageName'),
  };

  return (
    <>
      <InternalPageHeader internalHeader={deaderProps} />
      <ContainerStyled id="allCases">
        <ContentStyled>
          <AllCaseList cases={allCases} />
        </ContentStyled>
      </ContainerStyled>
    </>
  );
}
export default Cases;
