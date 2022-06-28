import type { NextPage } from 'next';
import { useEffect } from 'react';

import TextCarroussel from '../../../components/organisms/text-carroussel';
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
  const id = 1;
  const li = [
    'headerOurCareer.desirable',
    'headerOurCareer.availability',
    'headerOurCareer.knowledge',
  ];
  return (
    <>
      <HeaderOurCareer
        startDate={startDate}
        endDate={endDate}
        id={id}
        li={li}
      />

      <TextCarroussel />
    </>
  );
};

export default NossasCarreiras;
