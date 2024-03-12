import React from 'react';
import Layout from '../../components/Layouts/layout';
import './Home.scss';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

function Home() {
  return (
   <>
     <Layout>
      {/* Banner Section Start */} 
       <Section1/>
      {/* Banner Section End */} 

      {/* Features Section Start */}
      <Section2/>
      {/* Features Section End */}

      {/* Menu Section Start */}
      <Section3/>
      {/* Menu Section End */}

      {/* Promotion Section Start */}
      <Section4/>
      {/* Promotion Section End */}

      {/* Shop & Brand Section Start */} 
      <Section5/>
      {/* Shop & Brand Section End */} 

      {/* Review Section Start */}
      <Section6/>
      {/* Review Section End */}

      {/* Contact Information Section Start */}
      <Section7/>
      {/* Contact Information Section Emd */}
      </Layout> 
   </>
  )
}

export default Home;