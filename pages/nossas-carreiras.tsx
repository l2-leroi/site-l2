import type { NextPage } from 'next'

import SectionTitle from '../components/organisms/sectionTitle';
import Registration from '../components/organisms/registration';
import TraineeImg from '../components/organisms/trainee-img';

const NossasCarreiras: NextPage = () => {
  return (
    <>
    <SectionTitle />
    <Registration text='Faça sua candidatura agora e receba resposta primeiro. Fique tranquila, você pode atualizar seus dados depois.'/>
    <TraineeImg />
    </>
  );       
}

export default NossasCarreiras;