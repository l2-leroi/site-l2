import { t } from 'i18next';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import LineAnimation from '../../../components/atoms/LineAnimation';
import Footer from '../../../components/organisms/Footer';
import Profile from '../../../components/organisms/Profile';
import { colors } from '../../../styles/colors';

const Perfil: NextPage = () => {
  // make page refresh on top
  useEffect(() => {
    const nav = document.querySelector('.nav');
    nav?.classList.add('black');

    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = () => {
        window.scrollTo(0, 0);
      };
    }
  }, []);

  // const FundacredLogo = '/images/OurCustomers/fundacred-logo.svg';
  // const customers = [
  //   { alt: 'Tô Parado Logo', src: ToParadoLogo },

  const FotoPerfil = '/images/profile/vanessa.jpg';
  const feminino = '/images/ProfileIcons/feminino.svg';
  const bandeira = '/images/ProfileIcons/bandeira-demi.svg';

  const icons = [
    { alt: 'icon', src: bandeira },
    { alt: 'icon', src: feminino },
  ];
  // ProfileIcons
  const deaderProps = {
    nome: 'Vanessa Müller Mattos',
    cargo: 'UX / UI Designer',
    apelido: 'Saki',
    email: 'vanessa.mattos@l2code.com.br',
    pageName: t('cases.pageName'),
    fotoPerfil: FotoPerfil,
    ProfileIcons: icons,
  };

  return (
    <>
      <Profile headerProfile={deaderProps} />
      <LineAnimation bottomBgColor={colors.purple} topBgColor={colors.gray}>
        <Footer />
      </LineAnimation>
    </>
  );
};

export default Perfil;
