import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function Basiccourse() {
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

   // console.log("Hook effect tutorial, InView =" + inView);
  }, [inView]);

  return (
    <div>
      <div className="mt-1">
        <div className="card  titlestrip ">
          <div className="card-header">
            <motion.div
              initial={{ x: -300, scale: 0.5 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 2 }}
            >
              <h4>Basic Swaryoga Course</h4>
            </motion.div>
          </div>

          <div className="justifytext fs-5 p-1"></div>
          <div ref={ref}>
            <motion.div className="justifytext fs-5 p-2" animate={animation}>
   
              <ul>
                <li>Introduction to Swarayoga</li>
                <li>Shiv Shakti Samvad</li>
                <li>Karma Rahasya</li>
                <li>Meditation on Physical Dimensions of Breath</li>
                <li>Importance of Breath</li>
                <li>Aspects of Breath</li>
                <li>4 Mudra</li>

                <li>Introduction to Tattvas</li>
                <li>Ajapa Jaap</li>
                <li>Swara Cycle( physical)</li>
                <li>Introduction of Panchang</li>
                <li>Sunrise and Sunset</li>
                <li>Agnihotra</li>
                <li>Mandala Principle</li>

                <li>Practical Application</li>
                
              </ul>
              

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basiccourse;
