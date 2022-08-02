import React from 'react';
import Link from 'next/link';
// import i18next from 'i18next';
import Button from '../../atoms/Button';
// import { colors } from '../../../styles/colors';
import { Typography } from '../../../styles/typography';
import {
  ContainerStyledAbout,
  SectionStyled,
  HeaderStyled,
  TitleGroupStyled,
  TitleStyled,
  ParagraphStyled,
  AsideStyled,
  DivSubTitleStyled,
  LanguageStyled,
  SubTitleStyled,
  DivCardStyled,
  SpinningIconStyled,
  SpinnerImage,
} from './styled';

export default function About() {
  // const { t } = i18next;
  return (
    <ContainerStyledAbout>
      <SectionStyled>
        <HeaderStyled>
          <TitleGroupStyled>
            <TitleStyled>
              <Typography
                tag="h1"
                fontFamily="font2"
                fontWeight="weight3"
                size="large"
                color="gray"
              >
                SOMOS A L2CODE
              </Typography>
            </TitleStyled>
            <ParagraphStyled>
              <Typography tag="h2" color="gray">
                Criamos soluções tecnológicas de forma humanizada e inovadora,
                pois acreditamos que inovar é aprender e ensinar sem fronteiras.
              </Typography>
            </ParagraphStyled>
          </TitleGroupStyled>

          <AsideStyled>
            <Typography
              color="gray"
              tag="p"
              size="xxsmall"
              letterSpacing="space1"
            >
              &lt;O QUE SOMOS&gt;
            </Typography>
          </AsideStyled>
          <LanguageStyled>
            <Typography
              tag="button"
              size="xxsmall"
              letterSpacing="space1"
              color="gray"
            >
              <Link href="/pt/sobre" locale="pt" scroll={false}>
                PT
              </Link>
            </Typography>
            <Typography
              tag="button"
              size="xxsmall"
              letterSpacing="space1"
              color="gray"
            >
              <Link href="/en/sobre" locale="en" scroll={false}>
                EN
              </Link>
            </Typography>
          </LanguageStyled>
        </HeaderStyled>
        <DivSubTitleStyled>
          <SubTitleStyled>
            <Typography
              tag="h1"
              size="small"
              fontWeight="weight2"
              letterSpacing="space1"
              lineHeight="line90"
              color="gray"
            >
              Transformamos ideias em soluções
            </Typography>
            <Typography tag="p" color="gray" fontWeight="weight2">
              Somos uma empresa de consultoria especializada em Tecnologia e já
              conseguimos grandes feitos com a forma humanizada de lidar com
              clientes e colaboradores. ● A ideia é criar o senso de comunidade,
              assim tudo flui melhor!
            </Typography>

            <Typography tag="h2" color="gray">
              Nosso propósito é:
            </Typography>
            <Typography tag="ul" color="gray">
              <li>Conectar e desenvolver pessoas;</li>
              <li>Inovar a organização digital de empresas;</li>
              <li>Defender a diversidade de ideias;</li>
              <li>E transformar estratégias digitais em resultados reais.</li>
            </Typography>
          </SubTitleStyled>
        </DivSubTitleStyled>
        <DivCardStyled>
          <SpinningIconStyled>
            <SpinnerImage src="/images/spinner.png" />
          </SpinningIconStyled>
          <div className="cards">
            <Typography
              tag="h1"
              color="gray"
              size="small"
              letterSpacing="space1"
            >
              Missão
            </Typography>
            <Typography tag="p" color="gray">
              Criar soluções tecnológicas de forma humanizada, inovadora e
              divertida. ● Desenvolver ideias e profissionais é o nosso
              horizonte, afinal, unimos pessoas através da tecnologia e a união
              faz a inovação!
            </Typography>
          </div>
          <div className="cards">
            <Typography
              tag="h1"
              color="gray"
              size="small"
              letterSpacing="space1"
            >
              Visão
            </Typography>
            <Typography tag="p" color="gray">
              A L2Code deseja romper barreiras, pois a disrupção nos move para
              criar e o nosso sonho é humanizar ainda mais soluções em
              tecnologia para pessoas e empresas.
            </Typography>
          </div>
          <div className="cards">
            <Typography
              tag="h1"
              color="gray"
              size="small"
              letterSpacing="space1"
            >
              Valores
            </Typography>
            <Typography tag="p" color="gray">
              Acreditamos em um mundo onde as pessoas tem liberdade para se
              manifestar e compartilhar suas ideias. Nossos valores e princípios
              estão manifestados no nosso{' '}
              <Typography tag="a" color="green">
                manifesto L2.
              </Typography>
            </Typography>
          </div>
        </DivCardStyled>
        <DivSubTitleStyled>
          <SubTitleStyled>
            {' '}
            <Typography
              tag="h1"
              size="small"
              fontWeight="weight2"
              letterSpacing="space1"
              lineHeight="line90"
              color="gray"
            >
              Super poderes que fazem a diferença
            </Typography>
            <Typography tag="p" color="gray" fontWeight="weight2">
              Somos feitos de pessoas brilhantes, magos da tecnologia, somos os
              Lcoders! ● Mas claro, com grandes poderes, vem grandes
              responsabilidades. Por isso utilizamos nossos super poderes para
              ajudar pessoas e melhorar o mundo. ● São eles: o poder da
              colaboração, pluralidade, diversão, empatia, criatividade,
              aprendizagem, comunicação e, como resultado, temos também o poder
              da evolução!
            </Typography>
          </SubTitleStyled>

          <div className="button">
            <Button linkBtn="#" text="CONHEÇA A NOSSA EQUIPE" />
          </div>
        </DivSubTitleStyled>
      </SectionStyled>
    </ContainerStyledAbout>
  );
}
