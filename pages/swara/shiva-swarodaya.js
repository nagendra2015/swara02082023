import Head from "next/head";
import { motion } from "framer-motion";
import CarouselList from "../../components/CarouselList";

import Layout from "../../components/Layout";
import AnimatedDivLeft from "../../components/AnimatedDivLeft";
//import Slider from "../components/slider";
import Slidertest from "../../components/Slidertest";

function Shivaswarodaya() {
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
      mainTitle="SHIVA SWARODAYA SHASTRA "
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>SHIVA SWARODAYA SHASTRA</title>
        <meta name="description" content="SHIVA SWARODAYA SHASTRA" />
        <meta content="SHIVA SWARODAYA SHASTRA" name="keywords" />
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
                <h1>SHIVA SWARODAYA SHASTRA</h1>
              </motion.div>
            </div>

            {/* ----4---start section--- */}

            <div className="container">
              <div className="row">
                <div className="col-lg-6  align-items-center">
                  <AnimatedDivLeft
                    animationVariants={customAnimationVariantsLeft}
                  >
                    <img
                      className="d-block w-100"
                      src="/static/images/Shiva-shakti-sambad.png"
                      alt="Shiva shakti sambad"
                    />
                  </AnimatedDivLeft>
                </div>
                <div className="col-lg-6 d-flex">
                  <div>
                    <AnimatedDivLeft
                      animationVariants={customAnimationVariantsspring}
                    >
                      <div>
                        <h2> A brief on the Swara Yoga shastra</h2>
                        <p>&nbsp;</p>
                        <h3>Shakti asks Lord Shiva:</h3>

                        <p className="justifytext fs-5  zoom">Q. 1. Which knowledge bestows perfection?</p>

                        <p className="justifytext fs-5  zoom">Q. 2. How was the universe created?</p>
                        <p className="justifytext fs-5  zoom">Q.3. How does the universe change and dissolve?</p>

                        <p className="justifytext fs-5  zoom">Q.4. Who determines the universe?</p>

<p className="justifytext fs-5 p-3 zoom">
    Lord Shiva responds: Creation takes place due to tattwas (subtle essences), is sustained by them and finally dissolves into them. Tattwas are the origin of the universe. There is one birthless, formless supreme existence from which evolves akasha (ether), from which comes vayu (air). From vayu originates tejas (fire), from tejas apas (water) and from apas prithvi (earth). These five elements are spread throughout the world. Creation is formed and sustained from them and again merges back into them as the subtle process of creation continues ceaselessly.</p>

                      </div>
                    </AnimatedDivLeft>
                  </div>
                </div>
              </div>

<div className="row">
<div className="col-lg-12">

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">

What is swara? The science of Swara is the secret of all secrets and reveals the essence of all benefits. This science is the crown jewel of all knowledge. It is the subtlest of all subtle knowledge. It is easy to understand and based on truth. To the atheist it is a wonder, to the theist, the base (verse 11, Shiv Swara Udaya)

</p>
</AnimatedDivLeft>

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">

Who may have the knowledge? It should be given to one who is peaceful, pure, well behaved, dedicated to the guru, determined in mind, grateful (verse 13) The glory of Swara The power of swara overcomes enemies and joins friends, obtains wealth and glory (verse 22)

</p>
</AnimatedDivLeft>

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">

O Lady of beautiful face, all sacred books, moral stories, learning and Upinashads are not beyond the knowledge of swara (verse 25)

</p>
</AnimatedDivLeft>

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">


If you have knowledge of Swara, it is not necessary to consult the date, stars, days, planets, gods, conjunctions of stars or disorders of humours, phlegm, bile, wind, before starting any project (verse 29)

</p>
</AnimatedDivLeft>

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">

The teaching should not be revealed simply to answer someone’s questions, but by one’s own self, by one’s own intellect in one’s own body (verse 28)

</p>
</AnimatedDivLeft>
</div>

<div className="row">
<div className="col-lg-12">
<h3>AMONG SHASTRA</h3>
<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">

Among subjects that the texts on Swara discuss are the placement, location and function of the nadis, Yoga sadhana, description of auspicious/ inauspicious nadis according to the day, rules of the five tattwas, Zodiac signs according to the day and night, the appropriate direction of travel, reverse situations, fulfilment of desires, auspicious acts during the flow of ida nadi, successful acts during the flow of Pingala nadi, characteristics of sushumna nadi, eight-fold division of elements or breath, predictions and divination, places of the five elements in the body, how to get gain and prosperity, prediction and indicators of death, attainment of psychic powers through the knowledge of swara, getting a divine child, super-psychic Astrology and Vastu connected with nadis and chakras and overcoming illnesses.

</p>
</AnimatedDivLeft>
</div>

</div>


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

export default Shivaswarodaya;
