import type { NextPage } from 'next';
import Cases from '../components/organisms/Cases_/index';
import OurCustomersTemp from '../components/organisms/OurCustomersTemp_/index';
import OurServicesOnePage from '../components/organisms/OurServicesOnePage_/index';


const Home: NextPage = () => {
  return (
    <>
      <OurServicesOnePage />
      <Cases />
      <OurCustomersTemp />
    </>
  );
};

export default Home;

