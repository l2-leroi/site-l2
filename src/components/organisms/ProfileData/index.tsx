import i18next, { t } from 'i18next';
import { useEffect, useState } from 'react';
import { Typography } from '../../../styles/typography';
import { StyledScrollCircle } from '../OurCareersPage/styled';
import ProfilePreferences from '../ProfilePreferences';
import ProfileSocialNetwork from '../ProfileSocialNetwork';
import ProfileTechnologies from '../ProfileTechnologies';
import ProfileCarousel from '../../molecules/ProfileCarousel';

import {
  ArrowSpinnerComponentStyled,
  ArrowSpinnerContainerStyled,
  ContainerStyledProfileData,
  IconContainerStyled,
  ParagraphStyled,
  SectionStyled,
  SectionStyledProfileData,
  TitleStyled,
  PreferencesContainerStyled,
  DivStyled,
} from './styled';
// props: HeaderProfile

interface Data {
  nome: string;
  tweet: string;
  resumo: string;
  softSkills: string;
  technologies: IconsTechnologies[];
  carousel: photoCarousel[];
  personagens: CharacterList[];
  filmes: MovieList[];
  jogos: GameList[];
}

interface ProfileData {
  data: Data;
}

interface IconsTechnologies {
  alt: string;
  src: string;
}

interface CharacterList {
  name: string;
  where: string;
}

interface MovieList {
  name: string;
}

interface GameList {
  name: string;
}

interface photoCarousel {
  alt: string;
  src: string;
}

export default function ProfileData(props: ProfileData) {
  return (
    <SectionStyled>
      <DivStyled>
        <div>
          <div className="scrollCircleDiv">
            <div>
              <StyledScrollCircle
                blackImage={`${t('images.spinnerBlack')}`}
                whiteImage={`${t('images.spinnerWhite')}`}
              />
            </div>
          </div>
        </div>
        <SectionStyledProfileData>
          <ContainerStyledProfileData>
            <TitleStyled>
              <Typography
                tag="h1"
                size="small"
                className="typography"
                fontFamily="font2"
                letterSpacing="space1"
                fontWeight="weight2"
                lineHeight="line120"
              >
                {t('Profile.tweet')}
              </Typography>
            </TitleStyled>
            <ParagraphStyled>
              <Typography
                tag="p"
                size="xsmall"
                className="typography"
                fontFamily="font2"
                letterSpacing="space2"
                fontWeight="weight1"
                lineHeight="line140"
              >
                &quot;{props.data.tweet} &quot;
              </Typography>
            </ParagraphStyled>
            <div className="line" />
            <TitleStyled>
              <Typography
                tag="h1"
                size="small"
                className="typography"
                fontFamily="font2"
                letterSpacing="space1"
                fontWeight="weight2"
                lineHeight="line120"
              >
                {t('Profile.photos')}
              </Typography>
            </TitleStyled>

            <ProfileCarousel cards={props.data.carousel} />

            <div className="line" />
            <TitleStyled>
              <Typography
                tag="h1"
                size="small"
                className="typography"
                fontFamily="font2"
                letterSpacing="space1"
                fontWeight="weight2"
                lineHeight="line120"
              >
                {t('Profile.resume')}
              </Typography>
            </TitleStyled>
            <ParagraphStyled>
              <Typography
                tag="p"
                size="xsmall"
                className="typography"
                fontFamily="font2"
                letterSpacing="space2"
                fontWeight="weight1"
                lineHeight="line140"
              >
                {props.data.resumo}
              </Typography>
            </ParagraphStyled>
            <div className="line" />
            <IconContainerStyled>
              <ProfileSocialNetwork
                socialNetwork={[
                  { name: 'facebook', link: 'https://facebook.com' },
                  { name: 'instagram', link: 'https://instagram.com' },
                  { name: 'linkedin', link: 'https://linkedin.com' },
                  { name: 'twitter', link: 'https://twitter.com' },
                ]}
              />

              <ProfileTechnologies technologies={props.data.technologies} />
            </IconContainerStyled>
            <div className="line" />
            <TitleStyled>
              <Typography
                tag="h1"
                size="small"
                className="typography"
                fontFamily="font2"
                letterSpacing="space1"
                fontWeight="weight2"
                lineHeight="line120"
              >
                {t('Profile.softSkills')}
              </Typography>
            </TitleStyled>
            <ParagraphStyled>
              <Typography
                tag="p"
                size="xsmall"
                className="typography"
                fontFamily="font2"
                letterSpacing="space2"
                fontWeight="weight1"
                lineHeight="line140"
              >
                {props.data.softSkills}
              </Typography>
            </ParagraphStyled>
          </ContainerStyledProfileData>
        </SectionStyledProfileData>
      </DivStyled>
    </SectionStyled>
  );
}
