import Head from "next/head";
import { motion } from "framer-motion";
import CarouselList from "../../components/CarouselList";

import Layout from "../../components/Layout";
import AnimatedDivLeft from "../../components/AnimatedDivLeft";
//import Slider from "../components/slider";
import Slidertest from "../../components/Slidertest";

function MorningSadhana() {
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
        <meta name="description" content="Morning Sadhana, swara yoga" />
        <meta content="Morning Sadhana" name="keywords" />
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
                <h1>Morning Sadhana</h1>
              </motion.div>
            </div>

            {/* ----4---start section--- */}

            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6  align-items-center">
                  <AnimatedDivLeft
                    animationVariants={customAnimationVariantsLeft}
                  >
                    <img
                      className="d-block w-100"
                      src="/static/images/moonsun.png"
                      alt="Shiva shakti sambad"
                    />
                  </AnimatedDivLeft>
                </div>
                <div className="col-lg-6 d-flex">
                  <div>
                    <AnimatedDivLeft
                      animationVariants={customAnimationVariantsspring}
                    >



                        <p className="justifytext fs-5  ">
                        There are some important applications of Swara Yoga, which can be used in daily life to save the vital force and to avoid negative influences in daily life. These are: 1. When you get up early in the morning, check your nostrils for the flow of breath. Then touch that side of your face with the hand corresponding to which nostril is active.

                        </p>



<p className="justifytext fs-5 p-3 ">
   
For example, if the right nostril flow is stronger, then touch the right side of the face with your right palm. Keep your eyes closed, if the right nostril is active at that time, then face north or east. If the left nostril is active, then face south or west. Then in the right nostril visualise sun, and  feel that ray which is coming from the sun is entering through your heart. Feel the presence of cosmic energy. If the active nostril is left, then visualise same process in the full moon and that moonlight is coming and entering in your heart. Then keep your both palms together in awahani mudra and open your eyes and look first at the root of the index finger of the side which corresponds to the active nostril. Then, visualize the different deities and their powers resting in your palms, and imagine that their cosmic energies are coming into you and making your internal energies positive and favourable.

   </p>


                    </AnimatedDivLeft>
                  </div>
                </div>
              </div>


  <div className="row">
    <h2 className="text-danger">
    <center> Repeate the mantra</center>
    </h2>
    </div>    

              <div className="row">
<div className="col-lg-12">

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>

<p className="text-center fs-5 p-3 ">

सुप्रभात्  प्रार्थना और कर दर्शनं:
<br/>
कराग्रे वसते लक्ष्मी कर मध्ये सरस्वती |  कर मूलेतु गोविंदः प्रभाते कर दर्शनम् ||
<br/>
Morning Prayer Watching both the Palm together with Awahani Mudra
<br/>
karāgrē vasatē lakṣmī  kara madhyē sarasvatī
<br/>
kara mūlētu gōviṁdaḥ  prabhātē kara darśanam
<br/>
माता प्रिथवि पर् पाव रखने के पहले प्रार्थना

</p>
</AnimatedDivLeft>


<div className="row">
    <h3 className="text-danger text-center">
    Before putting the feet on Mother Earth: chant this mantra
    </h3>
</div>

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="text-center fs-5 p-3 ">

समुद्रवसने देवि पर्वतस्तनमण्डले ।  विष्णुपत्नि नमस्तुभ्यं पादस्पर्शं क्षमस्वमे ॥
<br/>
Samudra vasane devi  parvatashtal mandale
<br/>
 Vishnu patni namastubhyam  padasparsham kshamasvame

</p>
</AnimatedDivLeft>
<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 ">

Similarly, in the Krishna-Paksha, starting from Pratipada till Chaturdashi, all the dates are same; the only difference being the fifteenth day which is Amavasya (No Moon or Moonless night)  For tithi calculation for any particular day any location 

</p>
</AnimatedDivLeft>
<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 ">
1. visualize three eyes devi as mother earth in yellow clothes or yellow squire Put that foot on the ground first, which corresponds to the nostril which is flowing – if right then right foot first.
</p>
<p className="justifytext fs-5 p-3 ">
2. Go to the toilet when right nostril is flowing and urinate when the left nostril is flowing.
</p>
<p className="justifytext fs-5 p-3 ">
3. Eat meals when right nostril is flowing and drink water when the left is flowing. 
</p>

<p className="justifytext fs-5 p-3 ">
4. Go to bed at night when right nostril is flowing and rise when the left is flowing. 
</p>
<p className="justifytext fs-5 p-3 ">
5. When you leave home, step out with the foot corresponding to the nostril in which the breath is flowing.
</p>
<p className="justifytext fs-5 p-3 ">
6. Start a long journey when left nostril is flowing and enter other houses when the right is flowing.
</p>
<p className="justifytext fs-5 p-3 ">
7. During the day, left nostril dominance is auspicious and at night right nostril flow is favourable for good health and longevity. 
</p>
<p className="justifytext fs-5 p-3 ">
8. Public speaking, studying and learning are favourable when the right nostril flows. 
</p>
<p className="justifytext fs-5 p-3 ">
9. Meditation, mantra chanting, starting any auspicious work such as construction, entering a new house, opening a new business etc. are favourable in left nostril dominance. Avoid all external material work in shusumna. (Both nostril dominance) all work done in shusumna becomes fruitless.
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

export default MorningSadhana;
