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
        fontWeight="weight2"
        color="black"
        letterSpacing="space1"
        size="small"
        lineHeight="line120"
        fontFamily="font2"
        tag="h3"
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
