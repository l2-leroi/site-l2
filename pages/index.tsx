import type { NextPage } from 'next';
import Cases from '../components/organisms/cases';
import OurServicesOnePage from '../components/organisms/ourServicesOnePage';


const Home: NextPage = () => {
  return (
    <>
      <OurServicesOnePage />
      <Cases />
    </>
  );
};

export default Home;

