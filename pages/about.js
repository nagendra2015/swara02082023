import Head from "next/head";
import { motion } from "framer-motion";

import CarouselList from "../components/CarouselList";
import Layout from "../components/Layout";
import AnimatedDivLeft from "../components/AnimatedDivLeft";
//import Slider from "../components/slider";
import Slidertest from "../components/Slidertest";


function About() {

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

  return (
    <Layout
      mainTitle="About Us "
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>About Us</title>
        <meta name="description" content="About swara yoga" />
	<meta content="Pingala, Ida, breath, breathing, Swara Yoga, swara, meditation, tantra, Shivaswarodaya, Shiva Swarodaya, Right Swara, Left Swara, Shusumna Swara, Swara Sadhana, Swara Vijyana, Swara Yoga Courses, Swara Yoga Course, Swara Yoga Teacher" name="keywords" />
	<meta content="Charanashrith" name="copyright" />
	<meta content="index" name="robots" />
	<meta content="7 days" name="revisit" />



        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>

        <div className="mt-3">
          <div className="card   ">
            <div className="card-header titlestrip">
              <motion.div
                initial={{ x: 300, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <h1>About Us  </h1>
              </motion.div>
            </div>



{/* ----4---start section--- */}

<div className="container">

<div className="row">
  <div className="col-lg-6 d-flex align-items-center">

  <AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
  <img
            className="d-block w-100"
            src="/static/images/Charanashrith.jpg" 
            alt="sangeet"
          />
          </AnimatedDivLeft>
  </div>
  <div className="col-lg-6 pt-4 pt-lg-0 content">
    <div >

    <AnimatedDivLeft animationVariants={customAnimationVariantsspring}>



          <div className="justifytext fs-5 p-3">
            <p>
            Swara Yoga is an organization to bring about the right information
              on swara yoga, an ancient science of breathing and to guide the
              sadhaks in their swara yoga sadhana. This website is under the
              direct guidance of Sannyasi Charanashrit who is involved in the
              practice and research on this ancient science from many years.
              This website is absolutely free and all the calculations of Swara
              Yoga are freely available online
            </p>
<p>&nbsp;</p>

<p>&nbsp;</p>
<p>&nbsp;</p>

<p>
                <b>
                  For any queries, email to: <b> swarayoga@gmail.com</b>
                </b>
              </p>


          </div>
          </AnimatedDivLeft>


    </div>

  </div>
</div>

</div>

{/* ----4---end section--- */}
<div className="container">

  <div className="col-md-12">

<Slidertest></Slidertest>
</div>

</div>



          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
