import type { NextPage } from 'next';
import { useEffect } from 'react';
import AllCasesPage from '../../../components/organisms/AllCasesPage';



//http://localhost:3000/pt/AllCases

const AllCases: NextPage = () => {
  // make page refresh on top
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    }
  });

  return (
    <>
      <AllCasesPage />
    </>
  );
};

export default AllCases;