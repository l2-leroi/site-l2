import i18next from 'i18next';

import {
  ContainerStyled,
  SocialNetworkIconStyled,
  SocialMediaLinkStyled,
  SocialNetworkContainerStyled,
} from './styled';

import { Typography } from '../../../styles/typography';

export default function ProfileSocialNetwork({ socialNetwork }) {
  const { t } = i18next;

  const socialNetworkIcons = {
    facebook: 'facebook.svg',
    instagram: 'instagram.svg',
    linkedin: 'linkedin.svg',
    twitter: 'twitter.svg',
  };
  return (
    <ContainerStyled>
      <Typography
        tag="h1"
        size="xsmall"
        className="typography"
        fontFamily="font2"
        letterSpacing="space1"
        fontWeight="weight2"
        lineHeight="line120"
      >
        {t('Profile.socialNetwork')}
      </Typography>
      <SocialNetworkContainerStyled>
        {socialNetwork.map((item) => {
          return (
            <SocialMediaLinkStyled href={item.link} target="_blank">
              <SocialNetworkIconStyled
                src={`/assets/icons/social_networks/${
                  socialNetworkIcons[item.name]
                }`}
              />
            </SocialMediaLinkStyled>
          );
        })}
      </SocialNetworkContainerStyled>
    </ContainerStyled>
  );
}
