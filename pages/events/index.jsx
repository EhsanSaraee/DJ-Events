import { Layout, EventItem } from '@/components';
import { API_URL } from '@/config/index';
import axios from 'axios';

const Events = ({ events }) => {
   return (
      <Layout>
         <h1>Events</h1>
         {events.length === 0 && <h3>No events to show</h3>}
         {events.map((event) => (
            <EventItem key={event.id} {...event} />
         ))}
      </Layout>
   );
};

export const getStaticProps = async () => {
   const { data: events } = await axios.get(`${API_URL}/api/events`);

   return {
      props: { events },
      revalidate: 30,
   };
};

export default Events;
