import type { NextPage } from 'next';
import Cases from '../components/organisms/cases';
import OurCustomersTemp from '../components/organisms/ourCustomersTemp';

const Home: NextPage = () => {
  return (
    <>
      <Cases />
      <OurCustomersTemp />
    </>
  );
};

export default Home;
