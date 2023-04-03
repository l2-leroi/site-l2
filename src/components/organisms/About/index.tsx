import React from 'react';
import i18next from 'i18next';
import Button from '../../atoms/Button';
import { colors } from '../../../styles/colors';
import { Typography } from '../../../styles/typography';
import {
  ContainerStyledAbout,
  SectionStyled,
  SubTitleGroupStyled,
  ParagraphSubTitleStyled,
  TextStyled,
  ListStyled,
  SubTitleStyled,
  DivCardStyled,
  StyledGroupCards,
  CardTitleStyled,
  CardParagraphStyled,
  SpinningIconStyled,
  SpinnerImage,
  TextStyledSuperPowers,
  SecondTitleGroupStyled,
} from './styled';
import { StyledScrollCircle } from '../OurCareersPage/styled';
import InternalPageHeader from '../../molecules/InternalPageHeader';

export default function About() {
  const { t } = i18next;
  const list = [
    'about.connect',
    'about.innovate',
    'about.defend',
    'about.transform',
  ];
  const headerProps = {
    title: t('about.title'),
    text: t('about.weCreated'),
    sideTag: t('about.whatWeAre'),
    pageName: t('about.pageName'),
  };
  return (
    <>
      <InternalPageHeader internalHeader={headerProps} />
      <ContainerStyledAbout>
        <SectionStyled>
          {/* <HeaderStyled>
          <TitleGroupStyled>
            <TitleStyled>
              <Typography
                tag="h1"
                fontFamily="font2"
                fontWeight="weight3"
                lineHeight="line90"
                size="large"
                color="gray"
              >
                {t('about.title')}
              </Typography>
            </TitleStyled>
            <ParagraphStyled>
              <Typography tag="h2" color="gray" lineHeight="line140">
                {t('about.weCreated')}
              </Typography>
            </ParagraphStyled>
          </TitleGroupStyled>

          <AsideStyled>
            <Typography color="gray" tag="p" letterSpacing="space1">
              &lt;{t('about.whatWeAre')}&gt;
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
        </HeaderStyled> */}

          <SubTitleGroupStyled>
            <SubTitleStyled>
              <Typography
                tag="h1"
                size="small"
                fontWeight="weight2"
                letterSpacing="space1"
                lineHeight="line90"
                color="gray"
              >
                {t('about.weTransform')}
              </Typography>
            </SubTitleStyled>
            <ParagraphSubTitleStyled>
              <Typography tag="p" color="gray" fontWeight="weight1">
                {t('about.are')}
              </Typography>
            </ParagraphSubTitleStyled>

            <TextStyled>
              <Typography
                tag="h2"
                color="gray"
                fontWeight="weight2"
                line-height="line140"
              >
                {t('about.ourPurpose')}
              </Typography>
            </TextStyled>

            <ListStyled>
              <Typography tag="ul" color="gray">
                {list.map((item) => (
                  <Typography
                    tag="li"
                    color="gray"
                    fontFamily="font2"
                    fontWeight="weight1"
                    size="xsmall"
                    lineHeight="line140"
                  >
                    {t(item)}
                  </Typography>
                ))}
              </Typography>
            </ListStyled>
          </SubTitleGroupStyled>
          <DivCardStyled>
            <SpinningIconStyled>
              <SpinnerImage src="/images/spinner.png" />
            </SpinningIconStyled>

            <StyledGroupCards>
              <div className="cards">
                <CardTitleStyled>
                  <Typography
                    tag="h1"
                    color="gray"
                    size="small"
                    letterSpacing="space1"
                  >
                    {t('about.mission')}
                  </Typography>
                </CardTitleStyled>

                <CardParagraphStyled>
                  <Typography tag="p" color="gray">
                    {t('about.create')}
                  </Typography>
                </CardParagraphStyled>
              </div>

              <div className="cards">
                <CardTitleStyled>
                  <Typography
                    tag="h1"
                    color="gray"
                    size="small"
                    letterSpacing="space1"
                  >
                    {t('about.vision')}
                  </Typography>
                </CardTitleStyled>
                <CardParagraphStyled>
                  <Typography tag="p" color="gray">
                    {t('about.desire')}
                  </Typography>
                </CardParagraphStyled>
              </div>
              <div className="cards">
                <CardTitleStyled>
                  <Typography
                    tag="h1"
                    color="gray"
                    size="small"
                    letterSpacing="space1"
                  >
                    {t('about.values')}
                  </Typography>
                </CardTitleStyled>
                <CardParagraphStyled>
                  <Typography tag="p" color="gray">
                    {t('about.weBelieve')}{' '}
                    <Typography tag="a" color="green">
                      {t('about.manifestL2')}
                    </Typography>
                  </Typography>
                </CardParagraphStyled>
              </div>
            </StyledGroupCards>
          </DivCardStyled>
          <SecondTitleGroupStyled>
            <div className="scrollCircleDiv">
              <div>
                <StyledScrollCircle
                  isWhiteImage
                  blackImage={`${t('images.spinnerBlack')}`}
                  whiteImage={`${t('images.spinnerWhite')}`}
                />
              </div>
            </div>

            <TextStyledSuperPowers>
              <SubTitleStyled>
                {' '}
                <Typography
                  tag="h1"
                  size="small"
                  fontWeight="weight2"
                  letterSpacing="space1"
                  lineHeight="line120"
                  color="gray"
                >
                  {t('about.superPowers')}
                </Typography>
              </SubTitleStyled>

              <ParagraphSubTitleStyled>
                <Typography
                  tag="p"
                  color="gray"
                  fontWeight="weight1"
                  letterSpacing="space2"
                  lineHeight="line140"
                >
                  {t('about.weAreMade')}
                </Typography>
                <div className="button">
                  <Button
                    linkBtn="#"
                    text="CONHEÇA A NOSSA EQUIPE"
                    fill={`${colors.green}`}
                    fontSize="large"
                  />
                </div>
              </ParagraphSubTitleStyled>
            </TextStyledSuperPowers>
          </SecondTitleGroupStyled>
        </SectionStyled>
      </ContainerStyledAbout>
    </>
  );
}
