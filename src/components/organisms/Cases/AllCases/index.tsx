import React from 'react';
import i18next from 'i18next';
import { useRouter } from 'next/router';
import { defaultLanguage, languages } from '../../../../i18n';
import {
  ContainerStyled,
  ContentStyled,
  DivStyled,
  TitleStyled,
} from './styled';
import CaseList from '../../../molecules/CaseList';

import Button from '../../../atoms/Button';
import { colors } from '../../../../styles/colors';

function AllCases() {
  const { t } = i18next;

  const maisAcessoHover = [
    '/images/mais-acesso-1.jpg',
    '/images/mais-acesso-2.jpg',
    '/images/mais-acesso-3.jpg',
    '/images/mais-acesso-4.jpg',
  ];
  const toParadoHover = [
    '/images/to-parado-1.jpg',
    '/images/to-parado-2.jpg',
    '/images/to-parado-3.jpg',
    '/images/to-parado-4.jpg',
  ];
  const filaDeTrabalhoHover = [
    '/images/memories-up-2-copy.jpg',
    '/images/mais-acesso-3-copy.jpg',
    '/images/to-parado-4-copy.jpg',
    '/images/memories-up-3-copy.jpg',
  ];

  const cases = [
    {
      number: '02',
      title: 'Mais Acesso',
      info: t('cases.webApp'),
      image: '/images/capa-mais-acesso.jpg',
      alt: t('cases.alt.coverMoreAccess'),
      link: '#1',
      hover: maisAcessoHover,
    },
    {
      number: '03',
      title: 'Tô Parado',
      info: t('cases.providers'),
      image: '/images/capa-to-parado.jpg',
      alt: t('cases.alt.coverImStopped'),
      link: '#2',
      hover: toParadoHover,
    },
    {
      number: '04',
      title: 'Fila de Trabalho',
      info: t('cases.weHelpedThousands'),
      image: '/images/capa-fila-de-trabalho.jpg',
      alt: t('cases.alt.coverWorkQueue'),
      link: '#1',
      hover: filaDeTrabalhoHover,
    },
  ];
  const router = useRouter();
  const { asPath, query } = router;
  const slug = asPath.split('/')[1];
  const langSlug = languages.includes(slug) && slug;
  const language = query.lang || langSlug || defaultLanguage;

  return (
    <ContainerStyled id="cases">
      <ContentStyled>
        <DivStyled>
          <TitleStyled>{t('cases.seeSomeCases')}</TitleStyled>
        </DivStyled>
        <CaseList cases={cases} />
      </ContentStyled>
      <Button
        linkBtn={`/${language}/${t('cases.pageName')}`}
        text="VEJA TODOS OS CASES"
        fill={`${colors.black}`}
        fontSize="large"
      />
    </ContainerStyled>
  );
}
export default AllCases;
