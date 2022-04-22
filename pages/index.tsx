import type { NextPage } from 'next';
import Cases from '../components/organisms/cases';
import OurCustomers from '../components/organisms/ourCustomers';

const Home: NextPage = () => {
  return (
    <>
      <Cases />
      <OurCustomers />
    </>
  );
};

export default Home;
