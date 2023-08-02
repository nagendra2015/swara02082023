import Head from "next/head";

import CarouselList from "../components/CarouselList";
import Layout from "../components/Layout";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import AnimatedDivLeft from "../components/AnimatedDivLeft";
//import Slider from "../components/slider";
import Slidertest from "../components/Slidertest";


function Sanyasicharanashrit() {

  const customAnimationVariantsLeft = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
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
  

    }, [inView]);
  
    return (
      <Layout
        mainTitle="About Sanyasi Charanashrit"
        footer={`Copyright ${new Date().getFullYear()}`}
      >
        <Head>
          <title>About Sanyasi Charanashrit</title> 
          <meta content="Sanyasi Charanashrit" name="keywords" />
          <meta name="description" content="about shri Sanyasi Charanashrit,swara yoga guru" />
	<meta content="Charanashrith" name="copyright" />
	<meta content="index" name="robots" />
	<meta content="7 days" name="revisit" />
	



          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div >
          <CarouselList></CarouselList>
          <div className="mt-3">
            <div className="card   ">
              <div className="card-header titlestrip">
                <motion.div
                  initial={{ x: 300, scale: 0.5 }}
                  animate={{ x: 0, scale: 1 }}
                  transition={{ duration: 2 }}
                >
                  <h1>About Sanyasi Charanashrit</h1>
                </motion.div>
              </div>
  
              <div>
                <div className="justifytext fs-3 p-1 "></div>
  
                <div className="row">

                <div className="col-lg-4 d-flex align-items-top">

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<img
          className="d-block w-100"
          src="/static/images/Charanashrith.jpg" 
          alt="sangeet"
        />
        </AnimatedDivLeft>
</div>

                <div className="col-lg-8 pt-4 pt-lg-0 content ">
                  <motion.div
                    class="col"
                    initial={{ x: -300, scale: 0.5 }}
                    animate={{ x: 0, scale: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <div class="card">
                      
                      <div class="card-body">
                        <p className="justifytext">
                        Sannyasi Charanashrit takes you to the heart of inner  experience   through an   esoteric journey very few may have heard of, and fewer still    attempted to   learn.    SWARAYOGA. Swara Yoga is the yoga of your very breath, not to be confused with Pranayama, which is management    of   the   breath.   This     almost forgotten  tradition of  tantra  is available   today because   of  living masters of   tantra   such as Paramahamasa   Satyananda  and  others and preserved   in       translations   of   the       Shiva Swarodaya form the original in sanskrit. Swara Yoga was a closely guarded science, so closely that initiation was given on one-is-to-one basis, by direct transmission. Or, by word of mouth  as in the case of Sannyasi Charanashrit. How  in his young   age  of 28  years he  became a  another rare repository  of Swara  Yoga is as  mystifying as this ancient science itself. And has the touch of the    divine    about    it. Charanashrit     found himself in the  precincts of the    famous    Shive Temple  in  Deoghar (Jharkhand)    about 8  km form   the tapo bhoomi sthaal   of     Paramahamsaji Satyananda. One  day, Charanashrit     skipped college   and   he  felt  drawn  towards a   more secluded place and noticed   a Sadhu     sitting under the tree,   ash-smeared,   matted looks.   He   beckoned Charanashrit, then known as  Kishor. Kishor went up to  the  Sadhu and the  Sadhu  gave him a copy of shiva swarodaya in Hindi.
                        </p>
                        <p className="justifytext">
                        &apos;Do you know Swara Yoga ?&apos; asked the Sadhu.&apos;No&apos; replied kishor.
                        </p>

                        <p className="justifytext">
                        &quot;You have forgotten&lsquo; said the Sadhu. For the next half-an-hour, the sadhu initiated  kishor into SwaraYoga. He also gave him a sadhana to practice. &quot;if you have any doubts,  come after three days,&quot; said the sadhu. It was the twilight hour, known as &quot;go dhuli&quot; the  evening time 
                        when cows return  home,  bells  tinkling and raising dust. Three  days  later, Kishor went to keep his tryst  with the Sadhu but there was no one.  Slowly  it  downed on Kishor that the   Lord  Shiva  himself  had  blessed  him in the  tantric  practice.  Every  thing was pointed to this realization-the  long matted hair, his    ash-smeared body, the  auspicious twilight hour, it was the Monday the day of shivia july 12th  1993 and  since then,  kishor&apos;s life   underwent a  dramatic change. 
                        Kishor  became   charnashrit when   Paramahamsa Niranjananandji of Bihar School of yoga initiated him into Karma Sannyasa.Charanashrit graduated form the Bihar Yoga Bharati, 
                        the first Yoga university in the world and is presently teaching yoga at Atma Darshan Yogashram, Bangalore, India.
                        </p>
                       <p className="justifytext">
                       Today the boyish looking Charanashirt talks with authority on swara yoga.
                       </p>
                       
                      </div>
                    </div>
                  </motion.div>
  </div>

                </div>
              </div>
  
              <div className="justifytext fs-5 p-3"></div>
              <div ref={ref}>
                <motion.div className="justifytext fs-5 p-3 " animate={animation}>
                  <p>
                    <b>
                      Email <b> swarayoga@gmail.com</b>
                    </b>
                  </p>
  
                  <p>
                    <b>
                      Phone{" "}
                      <b>
                        <a href="+919343866262"> +91 9343866262</a>
                      </b>
                    </b>
                  </p>
  
                  <p>
                    <b>
                      Facebook{" "}
                      <b>
                        <a
                          href="https://facebook.com/SwaraShastra"
                          target="_blank"
                        >
                          https://facebook.com/SwaraShastra
                        </a>{" "}
                      </b>
                    </b>
                  </p>
                </motion.div>
              </div>
           




              <div className="row">

{/* ----4---end section--- */}
<div className="container">

  <div className="col-md-12">

<Slidertest></Slidertest>
</div>

</div>

</div>





            </div>
          </div>






        </div>
      </Layout>
    );
  }
  
  export default Sanyasicharanashrit;
  