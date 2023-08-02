import Head from "next/head";
import { motion } from "framer-motion";
import CarouselList from "../../components/CarouselList";

import Layout from "../../components/Layout";
import AnimatedDivLeft from "../../components/AnimatedDivLeft";
//import Slider from "../components/slider";
import Slidertest from "../../components/Slidertest";

function Interview() {
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
      mainTitle="Sanyasi Charanashrit "
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>Swara Change</title>
        <meta name="description" content="Sanyasi Charanashrit Interview, swara yoga " />
        <meta content="Sanyasi Charanashrit Interview" name="keywords" />
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
                <h1>SANYASI CHARANASHRIT TALKS TO KIRAN CHANANI</h1>
              </motion.div>
            </div>

            {/* ----4---start section--- */}

            <div className="container">
              <div className="row">
                <div className="col-lg-6  align-items-center pt-4 pt-lg-0">
                  <AnimatedDivLeft
                    animationVariants={customAnimationVariantsLeft}
                  >
                    <img
                      className="d-block w-100"
                      src="/static/images/Charanashrith.jpg"
                      alt="interview sanyasi charanashrit"
                    />
                  </AnimatedDivLeft>
                </div>
                <div className="col-lg-6 d-flex pt-4 pt-lg-0">
                  <div>
                    <AnimatedDivLeft
                      animationVariants={customAnimationVariantsspring}
                    >
                      
                        <h2 className="text-warning bg-light"> What inspired you to follow the path of Swara Yoga?</h2>
                        <p>&nbsp;</p>


                        <p className="justifytext fs-5  zoom">
                            
                        In  1993 I was a studying for my  B.Sc degree,and that was when I became interested in yoga,in yoga, spiritual sciences and sciences which deal with different planes of existence,  I was also  doing Mritunjay sadhana. That was the beginning of my spiritual and yogic life. One day, I was walking near Shiva Ganga, the sacred pond of Lord Siva in Deoghar. Opposite the pond I saw a tantric, with no clothes on and his body, which was smeared with ash. He called me and  I went to him. He asked whether I knew swarodaya. When I answered in the negative, he said that I did know, but had forgotten. He reminded me that this was the science of the breath as founded by Lord Siva, and I was the one who was chosen for this knowledge. He gave me a book on Swara Yoga and a basic out line of swara sadhana. He asked me to read the book and to do my sadhana for three days. Thereafter, if I had a doubt, I was to go back to him. When I went to look for him, there was no trace of such a person and no one in the vicinity had any knowledge of him. I realised then, that he did not want to give me this knowledge directly. He wanted that I should practice sincerely. As I started my swara yoga sadhana, I wondered whether this practise could be scientifically supported. After practising continuously I realised that this valuable science enables us to enrich our lives not only materially, but spiritually as well. It was thus natural for me to pursue this course of study at Bihar Yoga Bharti. Specifically, I studied the psycho physiological effects of swara rhythm.
                        </p>
                    </AnimatedDivLeft>
                  </div>
                </div>
              </div>


<div className="row">
<h3 className="align-items-center" >
What is swara yoga? 
</h3>
</div>

<div className="row">

<div className="col-lg-12 d-flex ">
<AnimatedDivLeft animationVariants={customAnimationVariantsLeft}>

<p className="justifytext fs-5  zoom">
Etymologically, swara means &lsquo;the sound of one&apos;s own breath&lsquo;. Sound creates vibrations. Yoga means &lsquo;union&lsquo;. 
Therefore, swara yoga is the science of understanding the union of different vibrations of breath that alters our 
psycho-physiological activity. By becoming aware of the breathing patterns, we can understand the effect that it has 
on our body and mind. Once this understanding takes place, the breathing pattern can be altered at will to make our 
life harmonious and balanced. The practice of swara yoga makes one realize that the breath is a cosmic life force. 
Therefore, swara yoga enables the state of union to be reached by means of one&apos;s breath.
</p>

<p className="justifytext fs-5  zoom">
Swara yoga is the union of three important sciences:
</p>

<p className="justifytext fs-5  zoom">
1 . Yoga  - Hatha yoga, Raja yoga,  jnana yoga and Kundalini yoga.
</p>
<p className="justifytext fs-5  zoom">
2. Astrology - yogic astrology and yoga vastu
</p>
<p className="justifytext fs-5  zoom">
3. Ayurveda
</p>
<p className="justifytext fs-5  zoom">
By practising swara yoga, we can understand the ayurvedic composition of our body - vatta,
 pitta and kapha.  We can also understand the mind and the governing forces of our life. Swara yoga will show how these aspects can be changed to make life harmonious and healthy. We can use this science to bring out the divine in us. Swara yoga helps in the practical understanding of all the spiritual sciences such as the Vedas, Upanishads, Yoga and Ayurveda. It is a science, which can be easily applied to our daily lives and it helps to understand life. Along with other practices the addition of swara yoga practices will help to lead a healthy and harmonious life with full awareness.
</p>
</AnimatedDivLeft>
</div>
</div>


<div className="row">
    <h3>
    Can you give brief history and scientific prospective of swara yoga?
  
    </h3>

<p className="justifytext fs-5  zoom">

Swara yoga (the science of the breath) is an ancient science existing from before the Vedic period more than 10,000 years ago. The importance of breathing practices in spiritual life and in understanding inner and outer life is mentioned in all the great texts and spiritual systems such as Budhhism, Christianity, Patanjali Yoga Sutras, Bhagavad Gita, Upanishads and by many great saints such as Kabir, Jesus Chirst, Shankaracharya, Matsyendranath, Gorakhnath, Rishi Gherand and others. Detailed explanations of all kinds can be found in the Swara yoga texts, such as Shiva Swarodaya, Swara Chintamani, Gyan Swarodaya, Indra Swarodaya and others which existed long before many of the spiritual systems and religions developed. Whatever practices there are, can be found in these ancient Swara yoga texts
</p>
<p className="justifytext fs-5  zoom">
Swara yoga, however, should not confused with pranayama. Pranayamas are used to strengthen, purify and balance the nadis. Although both deal with breath and prana, Swara Yoga emphasizes the analysis of the breath and the significance of different pranic rhythms and understanding their effect on body and mind. The different patterns of the breath either in right, left or both nostrils can influence our worldly affairs, either positively or negatively. It also influences the spiritual aspect of life.
</p>

<p className="justifytext fs-5  zoom">
Swara Yoga, the science of breath, deals with the interaction between cosmic rhythm and individual pranic patterns in each person. Different rhythms create specific physical, mental, and emotional patterns and alter the state of consciousness at all levels ie conscious, subconscious and unconscious, which are experienced in daily life. The linking force between the individual body pinda and the cosmic body brahmanda is breath.
</p>

<p className="justifytext fs-5  zoom">
When a child takes birth, the first thing through which he starts life is breath, and from then until he dies, he breathes continuously. At the moment one starts to breathe, the arrangement of the cosmic energies - the planets, constellations etc, creates an archetype of the whole life of a person. The breath is a cosmic energy, which emanates not from the mothers womb, but from the cosmos. Swara yoga places emphasis on the first breath of life, because it activates certain elements, which are dominant in ones life. Similarly, the last breath of ones life activates elements, which are responsible for reincarnation and for experiences on a different astral plane.
</p>

</div>

<div className="row">
    <h3>
    Is any modern research being done currently which justifies the ancient concepts of swara yoga? 
    </h3>

    <p className="justifytext fs-5  zoom">
    Different laboratories suggest a close relationship of the brain rhythm with the nasal cycle.
    </p>

    <p className="justifytext fs-5  zoom">
    The ancient concept of dual nature of our personality that is symbolized as Ardhanariishwar - half Siva and half Shakti - also finds place in Swara yoga, where the nasal cycle is connected with the brain hemispheres. The right nostril is connected with the left hemisphere, and the left nostril is connected with right brain hemisphere. During the flow of Pingala or the right nostril, the left brain hemisphere is active, and during the flow of Ida or left nostril dominance, the right brain hemisphere becomes active. Studies have indicated that the performance efficiencies of verbal and spatial tasks during both phases of the nasal cycle demonstrated that verbal efficiency is greater while the subjects were breathing primarily in the right and that spatial skills were enhanced during left nostril dominance. This supports the theory of contralateral dominance in the nostril hemisphere relationship, and the different functions of nadi.
    </p>

    <p className="justifytext fs-5  zoom">
    Studies have also shown that schizophrenia is associated with greater left cerebral hemisphere dysfunction and that depression and the other affective disorders are associated with greater right hemisphere dysfunction. This also justifies the theory that blockages in the pingala nadi lead to schizophrenia, and that blockages in the ida nadi lead to depression. Depression is the result of emotional blockage, which is controlled by the Ida nadi. It has been suggested that the pituitary hormonal secretions, cardiovascular function, and fuel regulation are associated with the nasal cycle. Dominance by the left nostril improves the functioning of the immune system. Swara yoga justifies this concept as it states that the left nadi provides nectar and strength for the body.
    </p>


    </div>

    <div className="row">
    <h3>
    Can you give us some applications of swara yoga in our daily lives?
    </h3>

    <p className="justifytext fs-5  zoom">
    Swara yoga influences our mental patterns. The right hemisphere, governed by the IDA nadi, is responsible for experiences, which are intangible to the external sense receptors. Thus it is responsible for psychic and extra - sensory perception, and it stimulates creative, artistic and musical abilities, as also the experience of intuition and psychic perception. The left brain hemisphere or PINGALA nadi, governed by the flow of breath through the right nostril, is responsible for the rational, analytical, logical and mathematical intellect. It has been suggested that left nostril dominance stimulates the Pineal gland, and findings suggest that the pineal is the psychic gland connected with Ajana Chakra. All the psychic phenomena such as clairvoyance, telepathy, pre cognition, etc are controlled and guided by the pineal gland. Therefore, nadis are closely connected with the neuro-endocrine function of the body. Once the physiological connection and the functioning of the brain with the nadis is understood, it is easy to understand that both the nadis have different effects on our body and mind. Each of the brain hemispheres is active at different times. Therefore, only half of the brain is being used at any given time. If both hemispheres of the brain, and both the nadis can be used together, then all these forces can be combined for creative and productive work in all dimensions of life. If both faculties can be used together and reason and creativity can be combined, then it is possible to understand all underlying phenomena of situation in any dimension.
    </p>

    <p className="justifytext fs-5  zoom">
    There are some important applications of swara yoga, which can be used in daily life to save the vital force and to avoid negative influences in daily life. For example:
    </p>

    </div>


    <div className="row">
    <h3>
    Swara Yoga Sadhana on rising in the morning:
    </h3>

    <p className="justifytext fs-5  zoom">
    1. When you get up in early morning check your nostrils for the flow of breath. Then touch that side of your face with that hand on which side the nostril is active. For example, if the right nostril flow is stronger, then touch the right side of the face with your right palm. Put that foot on the ground first, which corresponds to the nostril which is flowing - if right then right foot first.
    </p>

    <p className="justifytext fs-5  zoom">
    2. Go to the toilet when the right nostril is flowing and urinate when the left nostril is flowing.
    </p>
    <p className="justifytext fs-5  zoom">
    3. Eat meals when the the right nostril is flowing and drink water when the left is flowing.
    </p>

    <p className="justifytext fs-5  zoom">
    4. Go to bed at night when the right nostril is flowing and rise when the left is flowing.
  
    </p>
    <p className="justifytext fs-5  zoom">
    5. When you leave home, step out with the foot corresponding to the nostril in which the breath is flowing.
    </p>
    <p className="justifytext fs-5  zoom">
    6. Start a long journey when the left nostril is flowing and enter other houses when the right is flowing. 
    </p>
    <p className="justifytext fs-5  zoom">
    7. During the day, left nostril dominance is auspicious and at night,  right nostril flow is favourable for good health and longevity.
    </p>
    <p className="justifytext fs-5  zoom">
    8. Public speaking, studying and learning are favourable when the right nostril flows.
    </p>
    <p className="justifytext fs-5  zoom">
    9. Meditation, mantra chanting, starting any auspicious work such as construction, entering a new house, opening a new business etc. are favourable in left nostril dominance.
    </p>
    

    </div>

<div className="row">
<h3>Lastly, how will swara yoga benefit the sadhaka?</h3>
<p className="justifytext fs-5  zoom">
        
Swara yoga is the science of becoming aware of the subtle vibrations of the elements, which we experience when we breathe. By practicing swara yoga one can become aware of subtle changes which take place all the time in the body and mind. By knowing and becoming aware of these patterns, a sadhaka can experience consciousness behind these subtle changes and understand the dual nature of the universe. We can experience our deeper psychic being through the practice of swara yoga, which will unite the ida and pingala nadis and lead to the awakening of the sushumna. The real purpose of swara yoga is self- realisation. By practicing swara yoga we are transforming our material mind into subtle consciousness and experiencing our being beyond the realm of elements.
    </p>
    <p className="justifytext fs-5  zoom">
    The ancient rishis and saints were not familiar with the anatomy and physiology of the body
as it is understood today, but they were worthy of being called true scientists. They were experts in manipulating the subtle forces in our body through the swara  (breath).
The science of swara is unique in itself, as it is not developed by the limited mind of some individuals. It is a science, which was gifted to worthy recipients by the divine, for the welfare of humanity. The glorious and valuable science of swara yoga should be utilised by all sadhakas, to improve the quality of their lives and to hasten the process of human evolution.  
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

export default Interview;
