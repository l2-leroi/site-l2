import i18next from 'i18next';

import {
  ContainerStyled,
  TechnologyContainerStyled,
  TechnologyIcon,
} from './styled';

import { Typography } from '../../../styles/typography';

// PropsTechnologies
interface Technologies {
  alt: string;
  src: string;
}

interface PropsTechnologies {
  technologies: Technologies[];
}

export default function ProfileTechnologies(props: PropsTechnologies) {
  const { t } = i18next;

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
        {t('Profile.technologies')}
      </Typography>

      <TechnologyContainerStyled>
        {props.technologies.map((item) => {
          return <TechnologyIcon src={item.src} />;
        })}
      </TechnologyContainerStyled>
    </ContainerStyled>
  );
}
