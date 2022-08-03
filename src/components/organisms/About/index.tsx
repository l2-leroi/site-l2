import React from 'react';
import Link from 'next/link';
import i18next from 'i18next';
import Button from '../../atoms/Button';
import { colors } from '../../../styles/colors';
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
  const { t } = i18next;
  const list = ['about.innovate', 'about.defend', 'about.transform'];
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
                {t('about.title')}
              </Typography>
            </TitleStyled>
            <ParagraphStyled>
              <Typography tag="h2" color="gray">
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
              {t('about.weTransform')}
            </Typography>
            <Typography tag="p" color="gray" fontWeight="weight2">
              {t('about.are')}
            </Typography>

            <Typography tag="h2" color="gray">
              {t('about.ourPurpose')}
            </Typography>
            <Typography tag="ul" color="gray">
              {list.map((item) => (
                <Typography
                  tag="li"
                  color="gray"
                  fontFamily="font2"
                  size="xsmall"
                  lineHeight="line140"
                >
                  {t(item)}
                </Typography>
              ))}
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
              {t('about.mission')}
            </Typography>
            <Typography tag="p" color="gray">
              {t('about.create')}
            </Typography>
          </div>
          <div className="cards">
            <Typography
              tag="h1"
              color="gray"
              size="small"
              letterSpacing="space1"
            >
              {t('about.vision')}
            </Typography>
            <Typography tag="p" color="gray">
              {t('about.desire')}
            </Typography>
          </div>
          <div className="cards">
            <Typography
              tag="h1"
              color="gray"
              size="small"
              letterSpacing="space1"
            >
              {t('about.values')}
            </Typography>
            <Typography tag="p" color="gray">
              {t('about.weBelieve')}{' '}
              <Typography tag="a" color="green">
                {t('about.manifestL2')}
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
              {t('about.superPowers')}
            </Typography>
            <Typography tag="p" color="gray" fontWeight="weight2">
              {t('about.weAreMade')}
            </Typography>
          </SubTitleStyled>

          <div className="button">
            <Button
              linkBtn="#"
              text="CONHEÇA A NOSSA EQUIPE"
              fill={`${colors.gray}`}
              fontSize="large"
            />
          </div>
        </DivSubTitleStyled>
      </SectionStyled>
    </ContainerStyledAbout>
  );
}
