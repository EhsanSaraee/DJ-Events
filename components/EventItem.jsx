import styles from '@/styles/EventItem.module.css';
import Image from 'next/image';
import Link from 'next/link';

const EventItem = ({ attributes }) => {
   const { name, image, date, time, slug } = attributes;

   return (
      <div className={styles.event}>
         <div className={styles.img}>
            <Image
               src={
                  image
                     ? image?.data?.attributes?.formats?.thumbnail?.url
                     : '/images/event-default.png'
               }
               width={170}
               height={100}
               alt={name}
               priority
            />
         </div>
         <div className={styles.info}>
            <span>
               {new Date(date).toLocaleDateString('en-US')} at {time}
            </span>
            <h3>{name}</h3>
         </div>
         <div className={styles.link}>
            <Link passHref href={`/events/${slug}`}>
               <a className="btn">Details</a>
            </Link>
         </div>
      </div>
   );
};

export default EventItem;
