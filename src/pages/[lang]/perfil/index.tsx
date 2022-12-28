import { t } from 'i18next';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import Profile from '../../../components/organisms/Profile';

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
  const feminino = '/images/ProfileIcons/genero/feminino.svg';
  const bandeira = '/images/ProfileIcons/bandeiras/Demi.svg';
  const Insignia1 = '/images/ProfileIcons/InsigniasL2/Insignia3.svg';
  const Insignia2 = '/images/ProfileIcons/InsigniasL2/Insignia2.svg';
  const Insignia3 = '/images/ProfileIcons/InsigniasL2/Insignia3.svg';
  const css = '/images/ProfileIcons/Tecnologias/css.svg';
  const java = '/images/ProfileIcons/Tecnologias/java.svg';
  const html = '/images/ProfileIcons/Tecnologias/html.svg';
  const pwa = '/images/ProfileIcons/Tecnologias/pwa.svg';

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
