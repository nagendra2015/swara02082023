import Head from "next/head";
import { motion } from "framer-motion";
import CarouselList from "../../components/CarouselList";

import Layout from "../../components/Layout";
import AnimatedDivLeft from "../../components/AnimatedDivLeft";
//import Slider from "../components/slider";
import Slidertest from "../../components/Slidertest";

function Swaracycle() {
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
        <meta name="description" content="Swaracycle" />
        <meta content="Swaracycle" name="keywords" />
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
                <h1>Swara Cycle</h1>
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



                        <p className="justifytext fs-5  zoom">
                        Swara yoga is about the effect of nasal breathing on our body and mind through right nostril,  (Pingala Nadi) left nostril, Ida Nadi) both nostril (Shushumna Nadi).  The different pattern  and nature of  breath indicates the active elements  (Panch Mahabhutas ie. Earth, Water, Fire, Air, Ether) in our psychic body . In Swara yoga, practices are connected with the flow of nadi in a systematic pattern with moon phases, Sun and other planets. Elements are connected with  different  planets in  different  nasal flow. When a  planet affect earth&apos;s gravitational field and electromagnetic field they will alter human energy patterns in the psychic body on feedback  basis. This  can be  experienced  as  change  in  the  flow  of  our breath. Swara yoga  identifies   this as  different  elements.  In order  to balance  and  harmonize  these  subtle forces,  Swara yoga gives the easy and effective tool - The time and cycle of breath. The cycle of breath is based the luner tithis (Moon&apos;s position at different times).

                        </p>



<p className="justifytext fs-5 p-3 zoom">
   
Tithi is  considered as the first  phase  or  portion  (Kala)  of the 16  phases of the Moon. The  15  days, commencing from Amavasya (the last day of the dark half of a lunar month) to Purnima (Full moon), are called the Tithis  of  the  Shukla-Paksha or  Waxing Moon  (brighter phase)  when  moon becomes fuller and the days commencing from Purnima to Amavasya are called Krishna Paksha waning Moon (darker phase) when moon becomes darker.
   </p>


                    </AnimatedDivLeft>
                  </div>
                </div>
              </div>

      

              <div className="row">
<div className="col-lg-12">

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">

In Indian Astrology, the calculation of the Tithis starts from Pratipada (The first day in each half of the lunar month) of the Shukla-Paksha. They are:


</p>
</AnimatedDivLeft>
<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">

1.   Pratipada.

 2.   Dwitiya.

 3.   Tritiya.

 4.   Chaturthi.

 5.   Panchami.

 6.   Shashthi.

 7.   Saptami.

 8.   Ashtami.

 9.   Navami.

10. Dashami.

11. Ekadasi.

12. Dwadashi.

13. Trayodashi.

14. Chaturdashi.

15. Purnima / 30. Amawasya.

</p>
</AnimatedDivLeft>
<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">

Similarly, in the Krishna-Paksha, starting from Pratipada till Chaturdashi, all the dates are same; the only difference being the fifteenth day which is Amavasya (No Moon or Moonless night)  For tithi calculation for any particular day any location 

</p>
</AnimatedDivLeft>
<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">


In Swara cycle right nostril becomes active during Krishna paksha on tithes Pratipada,(1) Dwitiya, ,(2) Tritiya, ,(3)  Saptami, ,(7) Ashtami, ,(8)  Navami, ,(9)  Trayodashi, ,(13)  Chaturdashi, ,(14)  Amavasya,(15). There after Ida and Pingala function alternately in 1-2 hour cycle throughout the day until, at sunset left nostril begins to function on the specified days. On days  4 , 6, 10, 12, of dark fortnight (Krishna paksha) the left nostril flows at sunrise and right nostril at sunset. During shukla paksha we see the reverse. At sunrise of the first 3 days, left nostril flows and during sunset right and same alternate manner it goes on up to full moon. See the chart below.

</p>
</AnimatedDivLeft>
<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">

Swara days chart is a fixed chart that show the nostril dominance on particular phases of the moon known as tithis. Every day there will be a tithi and according to that you  have to change the flow of your breath. For ex. 5th October 04 the tithi was saptami and during sunrise right nostril is (Pingala swara) recommended in chart for flow and the same day left nostril (Ida swara) should flow during sun-set. For Indian panchanga calculation according to date click here and for sunrise and sunset click here any where in the world. When you will calculate the tithi other things of panchanga will come because panchanga means five angas of indian lunar calendar.For swara yoga sadhana (practices) first three are required  ie. weekdays, tithi and naxhatra. But for beginners first one month they should observe the breath to know the pattern and imbalances. And form next month they should start manipulation or change in the flow of breath according to dates. How to change the breath form one nostril to other nostril 

</p>
</AnimatedDivLeft>
</div>
</div>



<div className="row">
<div className="col-lg-12">
<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">

In cycle of Swara, the time of sunrise and sun set  is an important consideration. In summer, the sun rises earlier then in winter, and the time is constantly changing throughout the year. The time will also differ according to the exact location and hemisphere of the continent on which one is living. 

</p>
</AnimatedDivLeft>

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom text-danger">

For Sunrise and sunset timings and Breath flow during sunrise and set for any where in the world use calculator at the bottom of this page to get date wise rhythm of 
breath.

</p>
</AnimatedDivLeft>

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">

The flow of breath during sunrise according to Swara yoga cycle should start 24 minute before actual sunrise 12 minute during the rise from the horizon and 24 minute after completion of rise same way during 
sunset.

</p>
</AnimatedDivLeft>

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">

If tithi is not same during sunrise and sunset for that day whatever Nadi is given in the chart, avoid and flow your  right nostril during sunrise and left nostril during moon rise. For Sun / Moon rise and set, tithi swara  calculations use our calculator of this page at the 
bottom.

</p>
</AnimatedDivLeft>

</div>
</div>



<div className="row">
<div className="col-lg-12">
<h2>Benefits of Swara rhythms</h2>

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">
In the 1970’s science coined the word ‘chronopsychology’ for the 24 hour cycle. Chronopsychologists found that during the 24 hour cycle certain events and one’s mental, emotional and physical abilities have a ‘best’ or ‘most favorable’ time of day.   Swara yoga says the same, and further specifies the times when tasks are either auspicious or inauspicious. 
</p>
</AnimatedDivLeft>

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">
Swara yogi knows that during the flow of left nostril or right nostril when favorable elements rises certain things can be undertaken if you want to be successful.
</p>
</AnimatedDivLeft>

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">
Scientists have postulated that external forces set the biological clock by stimulating the pineal gland, which is affected by dark/light cycles.  These rhythms which were previously known to the ancient Rishis, so man is actually only rediscovering himself in relation to the cosmos. By the practice of Swara yoga one  can become the master of the nadis and elements, so as to adjust himself with  the universal forces which is the source of everything that gives birth to the experience of both  material and spiritual life with heightened awareness.
</p>
</AnimatedDivLeft>

<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>
<p className="justifytext fs-5 p-3 zoom">
By properly practicing Swara yoga, directly under an adept one can definitely achieve success in all spheres of lives. 
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

export default Swaracycle;
