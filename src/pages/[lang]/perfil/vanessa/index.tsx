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
  const img1 = '/images/ProfileIcons/img1.jpg';
  const img2 = '/images/ProfileIcons/img2.jpg';
  const img3 = '/images/ProfileIcons/img3.jpg';
  const img4 = '/images/ProfileIcons/img4.jpg';

  const Technologies = [
    { alt: 'CSS', src: css },
    { alt: 'Java', src: java },
    { alt: 'HTML', src: html },
    { alt: 'PWA', src: pwa },
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

  const photoCarousel = [
    { alt: 'img1', src: img1 },
    { alt: 'img2', src: img2 },
    { alt: 'img3', src: img3 },
    { alt: 'img4', src: img4 },
  ];

  const characters = [
    { name: 'Ravena', where: 'Os jovens titãs' },
    { name: 'Sebastian', where: 'Kuroshitsuji' },
    { name: 'Rikka', where: 'Chuunibyou' },
    { name: 'Miko', where: 'Mieruko-chan' },
    { name: 'Hanajima', where: 'Fruits Basket' },
    { name: 'Alucard', where: 'Castlevania e tbm de Helsing' },
    { name: 'Ryuk', where: 'Death Note' },
    { name: 'Ulquiorra', where: 'Bleach' },
    { name: 'e outros.', where: '' },
  ];

  const movies = [
    { name: 'Marvel e DC' },
    { name: 'animes' },
    { name: 'filmes de terror' },
    { name: 'suspense' },
    { name: 'fantasia' },
    { name: 'e alguns de comédia e drama também.' },
  ];

  const games = [
    { name: 'League of Legends' },
    { name: 'New World' },
    { name: 'Lost Ark' },
    { name: 'Genshin Impact' },
    { name: 'Dungeons and Dragons 5e' },
  ];

  const deaderProps = {
    nome: 'Vanessa Mattos (Saki)',
    cargo: 'UX / UI Designer',
    email: 'vanessa.mattos@l2code.com.br',
    fotoPerfil: FotoPerfil,
    profileIcons: PersonalIcons,
    insigniasL2: InsigniasL2,
    technologies: Technologies,
    personagens: characters,
    filmes: movies,
    jogos: games,
    tweet:
      // eslint-disable-next-line max-len
      'No tempo livre eu jogo, assisto animes, séries e filmes, e faço ilustração digital (inclusive meu apelido é também meu nome artístico, Saki Myuuraa). Gosto de animais, tenho 3 cachorras e uma calopsita. Sedentária, não costumo sair muito, mas gosto de ir a eventos de anime com os amigos.',
    resumo:
      // eslint-disable-next-line max-len
      'Fascinada pelas áreas de criação, é tecnóloga em design gráfico e bacharela em moda, ambos formada pela Universidade Feevale, e em UX, UI e Product Design pelo programa UX Unicórnio. ● Já trabalhou como designer gráfico, designer de superfície, ilustradora freelancer, e hoje atua na área de UX / UI.',
    softSkills:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet finibus libero, ac imperdiet ex vulputate sed.',
    carousel: photoCarousel,
  };

  return <Profile headerProfile={deaderProps} />;
};

export default Perfil;
