import Head from "next/head";
import { motion } from "framer-motion";
import CarouselList from "../../components/CarouselList";

import Layout from "../../components/Layout";
import AnimatedDivLeft from "../../components/AnimatedDivLeft";
//import Slider from "../components/slider";
import Slidertest from "../../components/Slidertest";

function Booksonswarayoga() {
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
      mainTitle="Swaracycle "
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>Swaracycle</title>
        <meta name="description" content="BOOKS ON SWARA YOGA" />
        <meta content="BOOKS ON SWARA YOGA" name="keywords" />
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
                <h1>BOOKS ON SWARA YOGA</h1>
              </motion.div>
            </div>

            {/* ----4---start section--- */}

            <div className="container">
              <div className="row">
                
                <div className="col-lg-12 d-flex">
                  <div>
                    <AnimatedDivLeft
                      animationVariants={customAnimationVariantsspring}
                    >



                        <p className="justifytext fs-5  zoom">
                        All the well known spiritual books say something about the importance of the breath and swaras.
                        </p>



<p className="justifytext fs-5 p-3 zoom">  
There are two that are the most important on this topic: Swara Chintamani and Shiva Swarodhaya.
   </p>

   <p className="justifytext fs-5 p-3 zoom text-danger">  
   SWARA CHINTAMANI (the jewel of consciousness is Swara)
   </p>

   <p className="justifytext fs-5 p-3 zoom">  
   Author: Lord Shiva (a dialogue between Shiva and Parvati)
   </p>

   <p className="justifytext fs-5 p-3 zoom">  
   Dated: Written originally in Tamil and found in the Adyar Library in the last century
   </p>

   <p className="justifytext fs-5 p-3 zoom">  
   This book is very systematically divided into 24 chapters in which Parvati, wife of Shiva asks about all aspects of 
   life. She starts with a prayer and obescience to the Lord (Iswara) and then asks about all manner of things to 
   which Lord Shiva answers that everything depends on swara; that &lsquo;If breath is going out and coming in, 
   there is life and if the movement stops, the body perishes.&lsquo; 
   She continues asking about the nature of the universe, the origin of the embryo, the origin of swara, 
   and all sorts of details about swara, knowledge of the tattwas, on food, sickness, war, 
   dreams and death and many other topics. Shiva answers Parvati&apos;s questions patiently and fully and goes on 
   the tell her all about swara saying that &lsquo;for all beings, breath is only the base.&lsquo; 
   These include techniques for managing the planetary effects and the moon&apos;s 
   phases and avoiding the negative influence of the planets and astral forces, 
   through altering the breath flow or swara in the nostrils, manipulating and controlling the breath or the 
   breath flow through each nostril. We can alter our destiny by  being more auspicious, and realising, and 
   eventually attaining the harmainy and the Highest Consciosness.

   </p>

                    </AnimatedDivLeft>
                  </div>
                </div>
              </div>


  <div className="row">
    <h2 className="text-danger">
    <center> SHIVA SWARODAYA</center>
    </h2>
    </div>    

              <div className="row">
<div className="col-lg-12">

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>

<p className="justifytext fs-5 p-3 zoom">
Author: Lord Shiva dialoguing with Parvati his consort.
</p>

<p className="justifytext fs-5 p-3 zoom">
Origin: Preserved in Guru Disciple tradition from the begening of the universe. Written in Sanskrit book-form, latter in between 500.BCto 300. AD with integration of all practices for the different purpose exoteric as well as esoteric.
</p>

<p className="justifytext fs-5 p-3 zoom">
Shakti as Parvati asks questions about the nature of the universe, about life , about the nature of suffering, death, war, predictions and the planetary effects and their negative and positive influences, how to live a successful married life, how to invoke a divine soul to be born, how to understand everything and realise the Higher Consciousness. Lord Shiva answers that by observing and manipulating the breath, all aspects of the universe from the manifest to the unmanifest as well as our own lives, can be understood and enhanced  through the medium of the breath.  The book also includes simple techniques for removing obstacles and negativity from our lives to improving it.
</p>

<p className="justifytext fs-5 p-3 zoom">
Some other texts on Swara Yoga are Gyan Swaroday and  Indra Swaroday. Also   swara yoga is explained  in Rrdrayamala tantra, in ekadasha patala (11th chapter).
</p>

<p className="justifytext fs-5 p-3 zoom">
Translation in hindi and english are published from different publication.
</p>

<p className="justifytext fs-5 p-3 zoom">
Few selected available books are:
</p>

<p className="justifytext fs-5 p-3 zoom">
Swara Yoga Translated by  Swami Muktibodhananda, Publisher Bihar School of Yoga, Munger, India.
</p>
<p className="justifytext fs-5 p-3 zoom">
Swara Chintamani, translated by S. Kanan Publisher: Sagar  publication, Delhi , India.
</p>
<p className="justifytext fs-5 p-3 zoom">
Breath Mind and Consciousness By Harish Johari.
</p>
<p className="justifytext fs-5 p-3 zoom">
Swara Yoga By Swami Sivananda, Publisher  Divine Life Society, Rishikesh, India.
</p>
</AnimatedDivLeft>




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

export default Booksonswarayoga;
