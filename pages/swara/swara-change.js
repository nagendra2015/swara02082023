import Head from "next/head";
import { motion } from "framer-motion";
import CarouselList from "../../components/CarouselList";

import Layout from "../../components/Layout";
import AnimatedDivLeft from "../../components/AnimatedDivLeft";
//import Slider from "../components/slider";
import Slidertest from "../../components/Slidertest";

function swarachange() {
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
      mainTitle="Swara Change "
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>Swara Change</title>
        <meta name="description" content="Swara Change, swara yoga" />
        <meta content="Swara Change" name="keywords" />
        <meta content="Charanashrith" name="copyright" />
        <meta content="index" name="robots" />
        <meta content="7 days" name="revisit" />


        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="mt-2">
          <div className="card   ">
            <div className="card-header titlestrip">
              <motion.div
                initial={{ x: 300, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <h1>Swara Change</h1>
              </motion.div>
            </div>

            {/* ----4---start section--- */}

            <div className="container">
              <div className="row">
                <div className="col-lg-3  align-items-center pt-4 pt-lg-0">
                  <AnimatedDivLeft
                    animationVariants={customAnimationVariantsLeft}
                  >
                    <img
                      className="d-block w-100"
                      src="/static/images/nadichange1.jpg"
                      alt="Swara Change"
                    />
                  </AnimatedDivLeft>
                </div>
                <div className="col-lg-8 d-flex pt-4 pt-lg-0">
                  <div>
                    <AnimatedDivLeft
                      animationVariants={customAnimationVariantsspring}
                    >
                      
                        <h2> METHOD TO CHANGE THE SWARA</h2>
                        <p>&nbsp;</p>


                        <p className="justifytext fs-5  zoom">
                            
                        If anyone who want to chang the flow of breath from active swara (breath) to inactive swara use these three  most effective and easy method.
                        </p>
                        <p>&nbsp;</p>
                        <h3>1. Yoga Danda Method</h3>
                        <p className="justifytext fs-5  zoom">Using yoga danda under the armpit of your active side and put your weight over the danda. Observe your breath flow and you will find within 5 to 10 minute your breath flow will change into soonya (non-active side). For ex. if your right nostril is active put yoga danda under your right armpit, breath flow will change in to left.</p>
                    </AnimatedDivLeft>
                  </div>
                </div>
              </div>


<div className="row">
<h3 className="align-items-center" >
 <center> 2. Lying Method </center>
</h3>
</div>

<div className="row">

<div className="col-lg-8 d-flex ">
<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>

<p className="justifytext fs-5  zoom">
Lying on the same side which swara is active (see figure) your close nostril will open within 5 to 10 minute . For ex. If your left nostril is active and you want to change into right, lie down on your left side keep right side upward, right will become active in given time. If your breath is not changing even after more then 20 minutes  that means your breath has just shifted from other side..If it is not then it  indicate imbalance sate of energy flow that may cause chronic mental or physical illness in fucture or even death.  
</p>
</AnimatedDivLeft>
</div>

<div className="col-lg-4  align-items-center">
                  <AnimatedDivLeft
                    animationVariants={customAnimationVariantsLeft}
                  >
                    <img
                      className="d-block w-100"
                      src="/static/images/nadichange2.jpg"
                      alt="Swara Change"
                    />
                  </AnimatedDivLeft>
                </div>
</div>


<div className="row">
    <h3><center>
    3. Pressure on the arm pit by hand
    </center>
    </h3>

<p className="justifytext fs-5  zoom">

Put pressure under the armpit of the active side with opposite hand. For ex. if your right nostril is active and you want to change into left. Put pressure by your left hand on your right armpit by the thumb and other four finger. Swara will change within 20 minutes
</p>

</div>


<div className="row">
<div className="col-md-12">
                <Slidertest></Slidertest>
              </div>

</div>



            </div>

            {/* ----4---end section--- */}
            <div className="container">
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default swarachange;
