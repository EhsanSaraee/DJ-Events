import { Layout } from '@/components';
import Link from 'next/link';
import styles from '@/styles/NotFound.module.css';

const NotFound = () => {
   return (
      <Layout title="Page Not Found">
         <div className={styles.error}>
            <h1>404</h1>
            <h4>Sorry, there is nothing here</h4>
            <Link href="/">Go Back Home</Link>
         </div>
      </Layout>
   );
};

export default NotFound;
