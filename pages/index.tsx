import type { NextPage } from 'next';
import Cases from '../components/organisms/cases';
import OurServicesOnePage from '../components/organisms/ourServicesOnePage';
import OurCustomers from '../components/organisms/ourCustomers';

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