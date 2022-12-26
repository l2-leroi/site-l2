import type { NextPage } from 'next';
import { useEffect } from 'react';
import LineAnimation from '../../../components/atoms/LineAnimation';
import Footer from '../../../components/organisms/Footer';
import Profile from '../../../components/organisms/Profile';
import ProfileSocialNetwork from '../../../components/organisms/ProfileSocialNetwork';
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

  return (
    <>
      <Profile />
      <ProfileSocialNetwork
        socialNetwork={[
          { name: 'facebook', link: 'https://facebook.com' },
          { name: 'instagram', link: 'https://instagram.com' },
          { name: 'linkedin', link: 'https://linkedin.com' },
          { name: 'twitter', link: 'https://twitter.com' },
        ]}
      />
      <LineAnimation bottomBgColor={colors.purple} topBgColor={colors.gray}>
        <Footer />
      </LineAnimation>
    </>
  );
};

export default Perfil;
