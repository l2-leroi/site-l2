import i18next from 'i18next';
import { useState, useEffect } from 'react';
import InternalProfileHeader from '../../molecules/InternalProfileHeader';
import LineAnimation from '../../atoms/LineAnimation';
import { colors } from '../../../styles/colors';
import Footer from '../Footer';
import ProfileData from '../ProfileData';
import ProfilePreferences from '../ProfilePreferences';
import { Typography } from '../../../styles/typography';

interface Header {
  nome: string;
  cargo: string;
  email: string;
  fotoPerfil: string;
  profileIcons: Icons[];
  insigniasL2: IconsInsigniasL2[];
  technologies: IconsTechnologies[];
  personagens: CharacterList[];
  filmes: MovieList[];
  jogos: GameList[];
  tweet: string;
  resumo: string;
  softSkills: string;
  carousel: photoCarousel[];
}
interface Icons {
  alt: string;
  src: string;
}

interface IconsInsigniasL2 {
  alt: string;
  src: string;
}
interface IconsTechnologies {
  alt: string;
  src: string;
}

interface photoCarousel {
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

interface HeaderProfile {
  headerProfile: Header;
}
export default function Profile(props: HeaderProfile) {
  const { t } = i18next;
  const language = i18next.language.substring(0, 2);
  const [name, setName] = useState('');

  useEffect(() => {
    const fullName = props.headerProfile.nome.split(' ');
    setName(fullName[0]);
  }, []);
  return (
    <>
      <InternalProfileHeader internalHeader={props.headerProfile} />

      <LineAnimation bottomBgColor={colors.gray} topBgColor={colors.black}>
        <ProfileData data={props.headerProfile} />
      </LineAnimation>
      {/* <Typography
        tag="h1"
        size="xsmall"
        className="typography"
        fontFamily="font2"
        letterSpacing="space1"
        fontWeight="weight2"
        lineHeight="line120"
      >
        {language == 'EN'
          ? name + t('Profile.preferences')
          : t('Profile.preferences') + name + t('Profile.endPreferences')}
      </Typography> */}
      <ProfilePreferences preferences={props.headerProfile} />

      <LineAnimation bottomBgColor={colors.purple} topBgColor={colors.gray}>
        <Footer />
      </LineAnimation>
    </>
  );
}
