import type { NextPage } from 'next';
import { useEffect } from 'react';

// import TraineeImg from '../../../components/organisms/trainee-img';
// import TextCarroussel from '../../../components/organisms/text-carroussel';
import HeaderOurCareer from '../../../components/organisms/HeaderOurCareer';

const NossasCarreiras: NextPage = () => {
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = () => {
        window.scrollTo(0, 0);
      };
    }
  });

  const startDate = '20/07/2022';
  const endDate = '24/07/2022';
  const title = 'Inscrições até:';
  const subTitle = 'Resultado em:';
  const text =
    'Faça sua candidatura agora e receba resposta primeiro. Fique tranquila, você pode atualizar seus dados depois.';
  const textEnd = 'Aguarde o resultado. Iremos encaminhá-lo a você por e-mail.';
  const id = 1;
  return (
    <>
      <HeaderOurCareer
        startDate={startDate}
        endDate={endDate}
        title={title}
        subTitle={subTitle}
        text={text}
        textEnd={textEnd}
        id={id}
      />

      {/* <TraineeImg /> */}
      {/* <TextCarroussel /> */}
    </>
  );
};

export default NossasCarreiras;
