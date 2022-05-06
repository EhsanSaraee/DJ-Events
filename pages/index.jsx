import Layout from '@/components/Layout';
import axios from 'axios';
import { API_URL } from '@/config/index';

const Home = ({ data }) => {
   console.log(data);
   return (
      <Layout>
         <h1>Upcoming Events</h1>
      </Layout>
   );
};

export const getStaticProps = async () => {
   const { data } = await axios.get(`${API_URL}/api/events`);

   return {
      props: { data },
      revalidate: 30,
   };
};

export default Home;
