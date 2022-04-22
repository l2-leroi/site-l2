import type { NextPage } from 'next';
import Cases from '../components/organisms/cases';
import OurCustomersTemp from '../components/organisms/ourCustomersTemp';
import OurServicesOnePage from '../components/organisms/ourServicesOnePage';


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

