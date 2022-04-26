import type { NextPage } from 'next';
import Cases from '../components/organisms/Cases/index';
// import OurCustomersTemp from '../components/organisms/OurCustomersTemp/index';
import OurServices from '../components/organisms/OurServices';
import OurServicesOnePage from '../components/organisms/OurServicesOnePage/index';


const Home: NextPage = () => {
  return (
    <>
      {/* <OurServicesOnePage /> */}
      <OurServices />
      <Cases />
      {/* <OurCustomersTemp /> */}
    </>
  );
};

export default Home;

