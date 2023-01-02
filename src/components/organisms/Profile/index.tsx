import i18next, { t } from 'i18next';
import { Typography } from '../../../styles/typography';
import InternalPageHeader from '../../molecules/InternalPageHeader';
import InternalProfileHeader from '../../molecules/InternalProfileHeader';
import LineAnimation from '../../atoms/LineAnimation';
import { colors } from '../../../styles/colors';
import ProfileSocialNetwork from '../ProfileSocialNetwork';
import Footer from '../Footer';
import ProfileTechnologies from '../ProfileTechnologies';
import ProfileData from '../ProfileData';

interface Header {
  nome: string;
  cargo: string;
  email: string;
  fotoPerfil: string;
  profileIcons: Icons[];
  insigniasL2: IconsInsigniasL2[];
  technologies: IconsTechnologies[];
  tweet: string;
  resumo: string;
  softSkills: string;
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

interface HeaderProfile {
  headerProfile: Header;
}
// ProfileTechnologies
export default function Profile(props: HeaderProfile) {
  return (
    <>
      <InternalProfileHeader internalHeader={props.headerProfile} />

      <LineAnimation bottomBgColor={colors.gray} topBgColor={colors.black}>
        <ProfileData data={props.headerProfile} />
      </LineAnimation>

      <LineAnimation bottomBgColor={colors.purple} topBgColor={colors.gray}>
        <Footer />
      </LineAnimation>
    </>
  );
}
