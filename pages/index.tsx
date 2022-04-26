import type { NextPage } from 'next';
import Cases from '../components/organisms/Cases';
import OurCustomersTemp from '../components/organisms/OurCustomersTemp';
import OurServicesOnePage from '../components/organisms/OurServicesOnePage';


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

