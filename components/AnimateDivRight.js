import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedDivRight = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5, // The element is considered in view when it's 50% visible
  });

  const animationVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationVariants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDivRight;
