import type { NextPage } from 'next';
import Cases from '../components/organisms/Cases/index';
import OurCustomersTemp from '../components/organisms/OurCustomersTemp/index';
import OurServicesOnePage from '../components/organisms/OurServicesOnePage/index';


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

