import type { NextPage } from 'next';
import OurServices from '../components/organisms/ourServices';
import Cases from '../components/organisms/cases';


const Home: NextPage = () => {
  return (
    <>

      <OurServices />

      <Cases />

    </>
  );
};

export default Home;

