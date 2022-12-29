import { t } from 'i18next';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import Profile from '../../../../components/organisms/Profile';

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

  const FotoPerfil = '/images/ProfileIcons/vanessa.jpg';
  const feminino = '/assets/icons/gender/feminino.svg';
  const bandeira = '/assets/icons/flags/Demi.svg';
  const Insignia1 = '/assets/icons/badges/10projetos.svg';
  const Insignia2 = '/assets/icons/badges/10projetos.svg';
  const Insignia3 = '/assets/icons/badges/10projetos.svg';
  const css = '/assets/icons/technologies/css.svg';
  const java = '/assets/icons/technologies/java.svg';
  const html = '/assets/icons/technologies/html.svg';
  const pwa = '/assets/icons/technologies/pwa.svg';

  // Technologies
  const Technologies = [
    { alt: 'CSS', src: css },
    { alt: 'Java', src: java },
    { alt: 'HTML', src: html },
    { alt: 'PWA', src: pwa },
    { alt: 'CSS', src: css },
    { alt: 'Java', src: java },
    { alt: 'HTML', src: html },
    { alt: 'PWA', src: pwa },
  ];

  const PersonalIcons = [
    { alt: 'icon', src: feminino },
    { alt: 'icon', src: bandeira },
  ];

  const InsigniasL2 = [
    { alt: 'icon', src: Insignia1 },
    { alt: 'icon', src: Insignia2 },
    { alt: 'icon', src: Insignia3 },
  ];

  const deaderProps = {
    nome: 'Vanessa Mattos (Saki)',
    cargo: 'UX / UI Designer',
    email: 'vanessa.mattos@l2code.com.br',
    fotoPerfil: FotoPerfil,
    profileIcons: PersonalIcons,
    insigniasL2: InsigniasL2,
    technologies: Technologies,
  };

  return <Profile headerProfile={deaderProps} />;
};

export default Perfil;
