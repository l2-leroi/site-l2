import type { NextPage } from 'next';
import { useEffect } from 'react';

const About: NextPage = () => {
  // make page refresh on top
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  });

  return <h1>Em produção...</h1>;
};

export default About;
