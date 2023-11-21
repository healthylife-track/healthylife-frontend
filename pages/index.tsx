import GeneralLayout from '@/layout/general-layout';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1>Healthy Life Track</h1>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <GeneralLayout pageTitle="Home">{page}</GeneralLayout>;
};

export default Home;
