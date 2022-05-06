import Link from 'next/link';

const About = () => {
   return (
      <div>
         <h1>About</h1>
         <p>This is an to find the latest DJ and other musical events</p>
         <p>version 1.0.0</p>
         <Link passHref href="/">
            Home
         </Link>
      </div>
   );
};

export default About;
