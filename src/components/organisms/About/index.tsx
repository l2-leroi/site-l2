import React from 'react';
import Link from 'next/link';
// import i18next from 'i18next';
import { Typography } from '../../../styles/typography';
import {
  ContainerStyledAbout,
  SectionStyled,
  HeaderStyled,
  TitleGroupStyled,
  TitleStyled,
  LanguageStyled,
  SubTitleStyled,
} from './styled';

export default function About() {
  //   const { t } = i18next;
  return (
    <ContainerStyledAbout>
      <SectionStyled>
        <HeaderStyled>
          <TitleGroupStyled>
            <TitleStyled>
              <h1>SOMOS A L2CODE</h1>
              <Typography
                tag="p"
                color="gray"
                fontFamily="font2"
                size="xxsmall"
              >
                &lt;O QUE SOMOS&gt;
              </Typography>
              <h2>
                Criamos soluções tecnológicas de forma humanizada e inovadora,
                pois acreditamos que inovar é aprender e ensinar sem fronteiras.
              </h2>

              <LanguageStyled>
                <Typography
                  tag="button"
                  size="xxsmall"
                  letterSpacing="space1"
                  color="gray"
                >
                  <Link href="/pt/nossas-carreiras" locale="pt" scroll={false}>
                    PT
                  </Link>
                </Typography>
                <Typography
                  tag="button"
                  size="xxsmall"
                  letterSpacing="space1"
                  color="gray"
                >
                  <Link href="/en/nossas-carreiras" locale="en" scroll={false}>
                    EN
                  </Link>
                </Typography>
              </LanguageStyled>
            </TitleStyled>
            <SubTitleStyled>
              <h1>Transformamos ideias em soluções</h1>
              <p>
                Somos uma empresa de consultoria especializada em Tecnologia e
                já conseguimos grandes feitos com a forma humanizada de lidar
                com clientes e colaboradores. A ideia é criar o senso de
                comunidade, assim tudo flui melhor!
              </p>

              <h2>Nosso propósito é:</h2>
              <ul>
                <li>Conectar e desenvolver pessoas;</li>
              </ul>
            </SubTitleStyled>
          </TitleGroupStyled>
        </HeaderStyled>
      </SectionStyled>
    </ContainerStyledAbout>
  );
}
