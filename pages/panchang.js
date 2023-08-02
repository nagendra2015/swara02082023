import Head from "next/head";
import { motion } from "framer-motion";

import CarouselList from "../components/CarouselList";
import Layout from "../components/Layout";
import { useEffect, useState } from 'react'
import AnimatedDivLeft from "../components/AnimatedDivLeft";

function Panchang() {

  const customAnimationVariantsLeft = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
   const customAnimationVariantsRight = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };


  const customAnimationVariantsspring = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    type: "spring",
    duration: 1,
    bounce: 0.3,
  };

  var x="10";    

const [mensen, setMensen] = useState([]);
const [location, setLocation] = useState();

const fetchApiData = async ({ latitude, longitude }) => {
    const res = await fetch(`https://openmensa.org/api/v2/canteens?near[lat]=${latitude}&near[lng]=${longitude}&near[dist]=50000`);
    const data = await res.json();
    setMensen(data);
};


useEffect(() => {
  if('geolocation' in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
          const { latitude, longitude } = coords;
          setLocation({ latitude, longitude });
          console.log("lat and long is -"+latitude +" langitude "+longitude);
      })
  }
}, []);

useEffect(() => {
  // Fetch data from API if `location` object is set
  if (location) {
      fetchApiData(location);
  }
}, [location]);







  return (
    <Layout
      mainTitle="PANCHANG"
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>Panchang Calculator swara yoga </title>
        <link rel="icon" href="/favicon.ico" />
        <meta content="Panchang Calculator" name="description" />
		<meta content="Swara Yoga Panchang, Panchang, Tithi, Vara, Days, Nakshatra, Karna, breath, breathing, ancient, swara, meditation, tantra, 24 hour Cycle of breath" name="keywords"/>
		<meta content="Charanashrith" name="copyright"/>
		<meta content="index" name="robots"/>
		<meta content="30 days" name="revisit"/>
        
      </Head>

      <div>
        <CarouselList></CarouselList>
        <div className="mt-3">


--------------


------------------


          <div className="card   ">
            <div className="card-header titlestrip">
              <motion.div
                initial={{ x: 300, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <h1>PANCHANG</h1>
              </motion.div>
            </div>


{/* ----4---start section--- */}

<div class="container">

<div class="row">
  <div class="col-lg-6 d-flex align-items-center">

  <AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
  <img
            className="d-block w-100"
            src="/static/images/Panchang.png" 
            alt="swara yoga panchang"
          />
          </AnimatedDivLeft>
  </div>
  <div class="col-lg-6 pt-4 pt-lg-0 content">
    <div >

    <AnimatedDivLeft animationVariants={customAnimationVariantsspring}>


    <div className="justifytext fs-5 p-3">
              <p>
              Fill your desired date
              </p>
              <p>
              month year and get your Swara Calendar.
              </p>
              
            </div>

            <div className="justifytext fs-5 p-3 ">
              <p>
              This calculator compute Swara calendar. This is the most required information for Swara yoga Sadhana.
               We have different cycles within our body and mind connected with the movement of sun and moon . 
               These cycles hasÂ  very deepÂ Â  effect on our life. 
               BecauseÂ Â  ofÂ  ignorance about theses cycles we doÂ  different kind of mental, physical, material and spiritual work on wrong time that gives painful result in our life. To avoid and to expand in both material and spiritual life on fullest extent.Â  Swara yoga gives certain practices connected with different lunar days which can be practices under the guidance of a adept. Swara yoga is a secret tantric science it should be done correctly. Incorrect practice can bring imbalances in the energy system ,
               body and mind and can create pain and suffering
              </p>
            </div>

          </AnimatedDivLeft>


    </div>

  </div>
</div>

</div>

{/* ----4---end section--- */}




          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Panchang;
