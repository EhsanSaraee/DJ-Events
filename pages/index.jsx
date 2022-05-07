import { EventItem, Layout } from '@/components';
import axios from 'axios';
import { API_URL } from '@/config/index';
import Link from 'next/link';

const Home = ({ events }) => {
   return (
      <Layout>
         <h1>Upcoming Events</h1>
         {events.length === 0 && <h3>No events to show</h3>}
         {events.map((event) => (
            <EventItem key={event.id} {...event} />
         ))}
         {events.length > 0 && (
            <Link href="/events">
               <a className="btn-secondary">View All Events</a>
            </Link>
         )}
      </Layout>
   );
};

export const getStaticProps = async () => {
   const { data } = await axios.get(`${API_URL}/api/dj-events?populate=*`);

   return {
      props: { events: data.data },
      revalidate: 30,
   };
};

export default Home;
