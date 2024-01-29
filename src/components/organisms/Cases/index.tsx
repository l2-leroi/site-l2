import React from 'react';
import i18next from 'i18next';
import {
  AsideStyled,
  ContainerStyled,
  ContentStyled,
  DivStyled,
} from './styled';
import CaseList from '../../molecules/CaseList';
import { Typography } from '../../../styles/typography';

function Cases() {
  const { t } = i18next;
  const language = i18next.language.substring(0, 2);
  const memoriesUpHover = [
    '/images/memories-up-1.jpg',
    '/images/memories-up-2.jpg',
    '/images/memories-up-3.jpg',
    '/images/memories-up-4.jpg',
  ];
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

  const cases = [
    {
      number: '01',
      title: 'Memories Up',
      info: t('cases.weHelped'),
      image: '/images/capa-memories-up.jpg',
      alt: t('cases.alt.coverMemoriesUp'),
      link: `/${language}/nossos-cases/memories-up`,
      hover: memoriesUpHover,
    },
    {
      number: '02',
      title: 'Mais Acesso',
      info: t('cases.webApp'),
      image: '/images/capa-mais-acesso.jpg',
      alt: t('cases.alt.coverMoreAccess'),
      link: `/${language}/nossos-cases/mais-acesso`,
      hover: maisAcessoHover,
    },
    {
      number: '03',
      title: 'Tô Parado',
      info: t('cases.providers'),
      image: '/images/capa-to-parado.jpg',
      alt: t('cases.alt.coverImStopped'),
      link: `/${language}/nossos-cases/to-parado`,
      hover: toParadoHover,
    },
  ];

  return (
    <ContainerStyled id="cases">
      <ContentStyled>
        <DivStyled>
          <Typography
            tag="h2"
            size="medium"
            fontFamily="font1"
            lineHeight="line90"
            fontWeight="weight3"
          >
            {t('cases.ourCases')}
          </Typography>

          <AsideStyled>
            <Typography tag="p" size="xxsmall" letterSpacing="space1">
              &lt;LA CREAM&gt;
            </Typography>
          </AsideStyled>
        </DivStyled>

        <Typography tag="p">{t('cases.weDoWell')}</Typography>

        <CaseList cases={cases} />
      </ContentStyled>
    </ContainerStyled>
  );
}
export default Cases;
