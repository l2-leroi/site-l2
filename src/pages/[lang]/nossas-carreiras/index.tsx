import type { NextPage } from 'next'
import { useEffect } from 'react';
import { GlobalStyle } from '../../../styles/global';
import SectionTitle from '../../../components/organisms/sectionTitle';
import Registration from '../../../components/organisms/registration';
import TraineeImg from '../../../components/organisms/trainee-img';
import TextCarroussel from '../../../components/organisms/text-carroussel';

const NossasCarreiras: NextPage = () => {

  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  });
  return (
    <>
    <SectionTitle />
    <Registration text='Faça sua candidatura agora e receba resposta primeiro. Fique tranquila, você pode atualizar seus dados depois.'/>
    <TraineeImg />
    <TextCarroussel />

    </>
  );       
}

export default NossasCarreiras;