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
        fontWeight="weight2"
        color="black"
        letterSpacing="space1"
        size="small"
        lineHeight="line120"
        fontFamily="font2"
        tag="h3"
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
