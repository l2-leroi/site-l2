import i18next, { t } from 'i18next';
import { Typography } from '../../../styles/typography';
import InternalPageHeader from '../../molecules/InternalPageHeader';
import InternalProfileHeader from '../../molecules/InternalProfileHeader';

const deaderProps = {
  nome: 'Vanessa Müller Mattos',
  cargo: 'UX / UI Designer',
  apelido: 'Saki',
  email: 'vanessa.mattos@l2code.com.br',
  pageName: t('cases.pageName'),
};
export default function Profile() {
  return <InternalProfileHeader internalHeader={deaderProps} />;
}
