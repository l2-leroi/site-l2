import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import HeaderCases from '../../../components/organisms/Header/HeaderCases';
import ProcessesCases from '../../../components/organisms/ProcessesCases';
import DesignsCases from '../../../components/organisms/DesignsCases';
import AllCases from '../../../components/organisms/Cases/AllCases';



const MemoriesUp: NextPage = () => {
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  });

  const [space, setSpace] = useState(0);

  const setSpaceForSpinner = (spaceForSet) => {
    setSpace(spaceForSet);
  };

  return (
    <>
      <HeaderCases />
      <ProcessesCases />
      <DesignsCases />
      <AllCases />
    </>
  );
};

export default MemoriesUp;
