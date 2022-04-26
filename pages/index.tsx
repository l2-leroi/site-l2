import type { NextPage } from 'next';
import Cases from '../components/organisms/Cases';
import OurCustomersTemp from '../components/organisms/ourCustomersTemp';
import OurServices from '../components/organisms/OurServices';
import OurServicesOnePage from '../components/organisms/OurServicesOnePage';


const Home: NextPage = () => {
  return (
    <>
      {/* <OurServicesOnePage /> */}
      <OurServices />
      <Cases />
      <OurCustomersTemp />
    </>
  );
};

export default Home;

