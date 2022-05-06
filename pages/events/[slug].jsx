import { Layout } from '@/components';
import { API_URL } from '@/config/index';
import axios from 'axios';
import styles from '@/styles/Event.module.css';
import Link from 'next/link';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Event = ({
   event: {
      id,
      name,
      date,
      time,
      image,
      performers,
      description,
      venue,
      address,
   },
}) => {
   const deleteEventHandler = () => {};

   return (
      <Layout title="Event Details">
         <div className={styles.event}>
            <div className={styles.controls}>
               <Link href={`/events/edit/${id}`}>
                  <a>
                     <FaPencilAlt /> Edit
                  </a>
               </Link>
               <a
                  href="#"
                  className={styles.delete}
                  onClick={deleteEventHandler}
               >
                  <FaTimes /> Delete
               </a>
            </div>
            <span>
               {date} at {time}
            </span>
            <h1>{name}</h1>
            {image && (
               <div className={styles.image}>
                  <Image src={image} width={960} height={600} alt={name} />
               </div>
            )}
            <h3>Performers:</h3>
            <p>{performers}</p>
            <h3>Description:</h3>
            <p>{description}</p>
            <h3>Venue: {venue}</h3>
            <p>{address}</p>
            <Link href="/events">
               <a className={styles.back}>{'<'} Go Back</a>
            </Link>
         </div>
      </Layout>
   );
};

export const getStaticPaths = async () => {
   const { data: events } = await axios.get(`${API_URL}/api/events`);
   const paths = events.map(({ slug }) => ({
      params: { slug },
   }));

   return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { slug } }) => {
   const { data: events } = await axios.get(`${API_URL}/api/events/${slug}`);

   return {
      props: { event: events[0], revalidate: 30 },
   };
};

export default Event;
