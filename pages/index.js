import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import Layout from "../components/Layout";
import CarouselList from "../components/CarouselList";

import AnimatedDivLeft from "../components/AnimatedDivLeft";
import Slidertest from "../components/Slidertest";

export default function Home() {


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


  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }

//    console.log("Hook effect tutorial, InView =" + inView);
  }, [inView]);

  return (
    <Layout
      mainTitle="Swara Yoga"
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>Swara Yoga - Ancient science of Breathing</title>
        <meta name="description" content="Introduction to swara yoga" />
        <meta name="keywords" content="Pingala, Ida, breath, breathing, Swara Yoga, swara, meditation, tantra, Shivaswarodaya, Shiva Swarodaya, Right Swara, Left Swara, Shusumna Swara, Swara Sadhana, Swara Vijyana, Swara Yoga Courses"  />
        <meta content="Charanashrith" name="copyright" />
        <meta content="index" name="robots" />
        <meta content="7 days" name="revisit" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CarouselList></CarouselList>





      <div className="mt-3">
        <div className="card ">
          <div className="card-header titlestrip">
            <motion.div
              initial={{ x: -300, scale: 0.5 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 2 }}
            >
              <h3>Introduction to Swara Yoga</h3>
            </motion.div>
          </div>
<div  className="cardbody backgroupimage" >

<dvi className="row">

<div ref={ref}>
            <motion.div className="d-flex flex-column justify-content-center fs-5 p-3 " animate={animation}>
              <h3>
                महेश्वरम् नमस्यकृत्यम् शैलजाम् गननायकम। गुरु च परमत्मानम् भजे
                संसार तारनम् ॥
              </h3>
            </motion.div>
          </div>

</dvi>


<div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" >
        
<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
        <div className="justifytext fs-5 p-3">
            We welcome visitors to this website to the fascinating and
            relatively unknown yoga – Swara Yoga. An ancient science of
            breathing. Contribute to extend your hand in our mission to spread
            this ancient science of breath.
          </div>


          <div className="justifytext fs-5 p-3 ">
            <p>
              The knowledge of Swara Yoga will surprise many that Yogis have
              discovered thousands of years back much more than what we know
              today about the breath. As per Swara Yoga, Breath is the language
              of our Self and it has connection to all the movement of time
              (KALA) - persent past and future
            </p>
          </div>


          <div className="justifytext fs-5 p-3">
            <p>
              Salutations to Maheshwara (Bhagwan Shiva), Godess Parvati the
              cosmic mother and Ganesha- destroyer of all obsticles and giver of
              wisdom, I bow to the guru who is verily the supreme consciousness
              (Paramatma) and capable of freeing from all the bondages of the
              mortal world. Sloka - 1 Shiva Swarodaya
            </p>
          </div>
          </AnimatedDivLeft>
        </div>

        <div className="col-lg-6 order-1 order-lg-2">
          
          <AnimatedDivLeft animationVariants={customAnimationVariantsRight}>
        <img
            className="d-block w-100"
            src="/static/images/gurujiwithsadhana.jpg" 
            alt="Guru ji with sadhana"
          />
</AnimatedDivLeft>
        </div>
      </div>
    </div>

{/* -2- section-- */}

<div className="container">

<div className="row">
  <div className="col-lg-6 d-flex align-items-center">
        <AnimatedDivLeft animationVariants={customAnimationVariantsRight}>
  <img
            className="d-block w-100"
            src="/static/images/sadhana.jpg" 
            alt="Advance swara yoga sadhana"
          />
          </AnimatedDivLeft>
  </div>
  <div className="col-lg-6 pt-4 pt-lg-0 content">

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
    <div className="justifytext fs-5 p-3 zoom">
            <p>
              The word SWARA in Sanskrit, means sound or musical note; it also
              means the continuous flow of air through one nostril. And we all
              know that YOGA means union. So Swara Yoga is the science which is
              about the realization of cosmic consciousness, through the
              awareness or observation, then control or manipulation of the flow
              of breath in the nostrils.
            </p>
          </div>

          <div className="justifytext fs-5 p-3 zoom">
            <p>
              Swara yoga is an ancient tantric science which involves the
              systematic study of the breath flow through the nostrils (or
              swara) in relation to the prevailing phases of the moon, time of
              day and direction . Although we think of ‘pranayama’ when we think
              of techniques associated with the breath, in Swara yoga, it is the
              association of the breath in relation to the activities or phases
              or positions of the sun, moon, planets, seasons, time of day, with
              the physical and mental conditions of the individual and then
              taking the appropriate action according to these subtle relations.
              For example, knowing the moon phases and checking the flow of your
              nostrils before you get out of bed in the morning and letting the
              corresponding foot be the first to touch the floor and make the
              first step, is a simple practice that ensures success in
              everything that happens for that day. The first foot to touch the
              ground will get the prevailing ‘successful’ flow of energy from
              the cosmos.
            </p>
          </div>
</AnimatedDivLeft>

  </div>
</div>

</div>
{/* -------end section--- */}

{/* -----3--start section--- */}

<div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" >
        <AnimatedDivLeft animationVariants={customAnimationVariantsspring}>
              
            <div className="justifytext fs-5 p-3 zoom">
            <p>
              Swara yoga is an ancient science existing since before the Vedic
              period, over ten thousand years ago. It was a secret science, only
              available for the select few, specially kings and dedicated
              sadhaks. It was kept as a closed secret by the ancient sages and
              saints who had intuitively received this knowledge from the
              Divine.
            </p>
          </div>

          <div className="justifytext fs-5 p-3 zoom">
            <p>
              This ancient divine knowledge was available only for sadhaks, to
              those who had risen above the worldly and mundane affairs of life,
              those who had a spiritual attitude, and the dedication and
              devotion of a disciple, so that this precious knowledge was kept
              pure and it didn’t go into the wrong hands. It was used for yearly
              predictions and other divinations. It was used for those who had
              mental, physical, emotional, and spiritual problems so that they
              could get rid of their problems by using this divine knowledge of
              Swara Yoga. Also, it was useful for the Grahastha, the
              householder, in day to day matters. It was commonly used for
              general future predictions as well as in special cases such as
              making wars go according to the wishes of the king, or for having
              a divine child. It was used to choose an auspicious time, start
              special jobs, journeys, wars, building etc. and for creating
              harmony in world affairs, predicting the time of death, and to
              deal with planetary effects, astral forces and negative effects of
              planets of the zodiac and the constellations.
            </p>
          </div>
</AnimatedDivLeft>






        </div>
        <div className="col-lg-6 order-1 order-lg-2" >
        <AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
        <img
            className="d-block w-100"
            src="/static/images/temple.jpg" 
            alt="Rishikesh Temple"
          />
</AnimatedDivLeft>
        </div>
      </div>
    </div>

{/* ----3---end section--- */}

{/* ----4---start section--- */}

<div className="container">

<div className="row">
  <div className="col-lg-6 d-flex align-items-center">

  <AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
  <img
            className="d-block w-100"
            src="/static/images/sawarayoga.jpg" 
            alt="sangeet"
          />
          </AnimatedDivLeft>
  </div>
  <div className="col-lg-6 pt-4 pt-lg-0 content">
    <div >

    <AnimatedDivLeft animationVariants={customAnimationVariantsspring}>

    <div className="justifytext fs-5 p-3 zoom">
            <p>
              Through the knowledge of swara yoga one can become free from all
              kinds of negative influences of one’s destiny and can achieve
              heightened awareness. The swara yoga practices related to breath
              were used to understand the governing forces of life, to
              understand the nature of the universe and effects of the elements
              on body and mind by observing the different patterns of breath.
              Further, it was used to go beyond the limitations of the mind.
              Swara yoga is a tantric science coming from the Agama Shastras and
              from Shaiva Tantra, where Lord Siva is the guru and Shakti is the
              disciple She asks questions about nature and the governing forces
              of the universe. Lord Siva gives this precious knowledge of swara
              yoga to Shakti. Other tantric traditions also existed such as
              Surya tantra, Ganapatya tantra and Vaishnava tantra. Today only
              two tantric techniques are commonly available, Saiva and Shakta
              tantra.
            </p>
          </div>

          <div className="justifytext fs-5 p-3 zoom">
            <p>
              The fascinating thing about Swara yoga is that just by being aware
              of the swara (dominant nostril) in relation to the environment,
              you can manipulate the results of what you are about to do. In
              other words, you can find out which is going to be the successful
              route and then follow it. It can be as simple as checking your
              nostrils before setting out of the house, noting the direction you
              wish to go in and then choosing the appropriate foot with which
              you will make your first step, to ensure success and positive
              outcomes for everything that follows thereafter.
            </p>
          </div>
          </AnimatedDivLeft>


    </div>

  </div>
</div>

<div className="row">
<h1><center> Swara Yoga Courses</center></h1>

</div>
<div className="row">
<AnimatedDivLeft animationVariants={customAnimationVariantsspring}>
<div className="row">
<div className="col-lg-4">
<img
            className="d-block w-100"
            src="/static/images/courses/basic.png" 
            alt="Swara yoga Basic Course"
          />

</div>
<div className="col-lg-4">
<img
            className="d-block w-100"
            src="/static/images/courses/intermediate.png" 
            alt="Swara yoga intermediate Course"
          />

</div>
<div className="col-lg-4">
  
<img
            className="d-block w-100"
            src="/static/images/courses/advance.png" 
            alt="Swara yoga advance Course"
          />

</div>
</div>

</AnimatedDivLeft>


</div>

<div className="row">&nbsp;</div>
<div className="row">
<Slidertest></Slidertest>
  
</div>


</div>

{/* ----4---end section--- */}






          </div>


        </div>
      </div>
    </Layout>
  );
}
