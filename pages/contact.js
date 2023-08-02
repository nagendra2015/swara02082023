import Head from "next/head";

import CarouselList from "../components/CarouselList";
import Layout from "../components/Layout";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";



function Contact() {
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

    console.log("Hook effect tutorial, InView =" + inView);
  }, [inView]);

  return (
    <Layout
      mainTitle="Contact Us"
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <CarouselList></CarouselList>
        <div className="mt-3">
          <div className="card  titlestrip ">
            <div className="card-header">
              <motion.div
                initial={{ x: 300, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <h1>Contact us</h1>
              </motion.div>
            </div>

            <div>
              <div className="justifytext fs-5 p-3 "></div>

              <div className="row">
                <motion.div
                  class="col"
                  initial={{ x: -300, scale: 0.5 }}
                  animate={{ x: 0, scale: 1 }}
                  transition={{ duration: 2 }}
                >
                  <div class="card">
                    <div className="card-header">
                      <h4>Rishikesh, Uttrakhand</h4>
                    </div>
                    <div class="card-body">
                      <h5 className="card-title">Swara Yoga Peeth</h5>
                      <h6 clclassNameass="card-subtitle mb-2 text-muted">
                        Muni Ki Reti
                      </h6>
                      <h6 clclassNameass="card-subtitle mb-2 text-muted">
                        Badrinath Bypass Road
                      </h6>
                      <h6 clclassNameass="card-subtitle mb-2 text-muted">
                        Opposite to OIMT
                      </h6>
                      <h6 clclassNameass="card-subtitle mb-2 text-muted">
                        Rishikesh, Tehri Ghadwal
                      </h6>
                      <h6 clclassNameass="card-subtitle mb-2 text-muted">
                        Uttrakhand, India
                      </h6>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="col"
                  initial={{ x: -300, scale: 0.5 }}
                  animate={{ x: 0, scale: 1 }}
                  transition={{ duration: 2 }}
                >
                  <div class="card">
                    <div className="card-header">
                      <h4>Bangalore</h4>
                    </div>
                    <div class="card-body">
                      <h5 className="card-title">#87 Ram Villa</h5>
                      <h6 clclassNameass="card-subtitle mb-2 text-muted">
                        3rd Main Road, 4th Cross
                      </h6>
                      <h6 clclassNameass="card-subtitle mb-2 text-muted">
                        Ramachandrapuram
                      </h6>
                      <h6 clclassNameass="card-subtitle mb-2 text-muted">
                        Bangalore 560021
                      </h6>
                      <h6 clclassNameass="card-subtitle mb-2 text-muted">
                        Karnataka India
                      </h6>
                    </div>
                  </div>
                </motion.div>
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
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
