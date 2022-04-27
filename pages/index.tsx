import type { NextPage } from 'next';
import Cases from '../components/organisms/Cases';
import OurServicesOnePage from '../components/organisms/OurServicesOnePage';
import OurCustomers from '../components/organisms/OurCustomers_';

const Home: NextPage = () => {
  return (
    <>
      <OurServicesOnePage />
      <Cases />
      <OurCustomers />
    </>
  );
};

export default Home;