import i18next, { t } from 'i18next';
import { Typography } from '../../../styles/typography';
import InternalPageHeader from '../../molecules/InternalPageHeader';
import InternalProfileHeader from '../../molecules/InternalProfileHeader';

// interface Case {
//   number: string;
//   title: string;
//   info: string;
//   image: string;
//   alt: string;
//   link: string;
//   hover: string[];
// }
interface Header {
  nome: string;
  cargo: string;
  apelido: string;
  email: string;
  pageName: string;
  fotoPerfil: string;
  ProfileIcons: Icons[];
}
interface Icons {
  alt: string;
  src: string;
}
interface HeaderProfile {
  headerProfile: Header;
}

// const deaderProps = {
//   nome: 'Vanessa Müller Mattos',
//   cargo: 'UX / UI Designer',
//   apelido: 'Saki',
//   email: 'vanessa.mattos@l2code.com.br',
//   pageName: t('cases.pageName'),
// };

export default function Profile(props: HeaderProfile) {
  return <InternalProfileHeader internalHeader={props.headerProfile} />;
}
