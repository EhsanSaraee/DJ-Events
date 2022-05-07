import { Layout } from '@/components';
import { API_URL } from '@/config/index';
import axios from 'axios';
import styles from '@/styles/Event.module.css';
import Link from 'next/link';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Event = ({ event: { id, attributes } }) => {
   const { name, date, time, image, performers, description, venue, address } =
      attributes;

   console.log(attributes);

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
               {new Date(date).toLocaleDateString('en-US')} at {time}
            </span>
            <h1>{name}</h1>
            {image && (
               <div className={styles.image}>
                  <Image
                     src={image?.data?.attributes?.formats?.medium?.url}
                     width={960}
                     height={600}
                     alt={name}
                  />
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
   const { data } = await axios.get(`${API_URL}/api/dj-events`);
   const paths = data.data.map(({ attributes: { slug } }) => ({
      params: { slug },
   }));

   return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { slug } }) => {
   const { data } = await axios.get(`${API_URL}/api/dj-events?slug=${slug}`);

   return {
      props: { event: data.data[0], revalidate: 30 },
   };
};

export default Event;
