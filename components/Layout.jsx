import Head from 'next/head';
import styles from '@/styles/Layout.module.css';
import { useRouter } from 'next/router';
import { Footer, Header, Showcase } from './index';

const Layout = ({ title, description, keywords, children }) => {
   const { pathname } = useRouter();

   return (
      <div>
         <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
         </Head>
         <Header />
         {pathname === '/' && <Showcase />}
         <div className={styles.container}>{children}</div>
         <Footer />
      </div>
   );
};

Layout.defaultProps = {
   title: 'DJ Events | Find the hottest parties',
   description: 'Find the latest DJ and other musical events',
   keywords: 'music, dj, edm, events',
};

export default Layout;
