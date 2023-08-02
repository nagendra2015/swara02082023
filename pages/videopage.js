import Head from "next/head";

import CarouselList from "../components/CarouselList";
import Layout from "../components/Layout";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function Videopage() {
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
      mainTitle="Swara yoga video"
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>Our Video</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <CarouselList></CarouselList>

        <div className="row">
          <div className="col-lg-6"></div>

          <div className="col-lg-6"></div>
        </div>

        <div className="mt-3">
          <div className="card  titlestrip ">
            <div className="card-header">
              <motion.div
                initial={{ x: 300, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <h1>Our Video</h1>
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
                      <h4>Ancient Science of Breathing</h4>
                    </div>

                    <div className="card-body">
                      <iframe
                        src={
                          "https://www.youtube.com/embed/4bLFMdYjtCU?list=PL2vbAqrds2D2JSMZbUANuZHXHEM8rDLoN"
                        }
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        width="100%"
                        height="250px"
                      />
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
                      <h4>Knowledge of Fourth Dimension</h4>
                    </div>
                    <div class="card-body">
                      <div className="">
                        <iframe
                          src={"https://www.youtube.com/embed/sWlR-QjYcsU"}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                          width="100%"
                          height="250px"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

 {/* Second row  */}
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
                      <h4>Most Secret Swara Yoga Sadhana March 22 Rishikesh Highlights</h4>
                    </div>

                    <div className="card-body">
                      <iframe
                        src={
                          "https://www.youtube.com/embed/HJKW9Y2l7k8"
                        }
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        width="100%"
                        height="250px"
                      />
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
                      <h4>Advance Course Day 1 at Swara Yoga Peeth Rishikesh</h4>
                    </div>
                    <div class="card-body">
                      <div className="">
                        <iframe
                          src="https://www.youtube.com/embed/HB3XeCdcLMA"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                          width="100%"
                          height="250px"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>


 {/* third row  */}
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
                      <h4>Advance Course Maha Shivratri Char Pahar Rudrabhishek Sadhana </h4>
                    </div>

                    <div className="card-body">
                      <iframe
                        src={
                          "https://www.youtube.com/embed/GtUK68O0zpo"
                        }
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        width="100%"
                        height="250px"
                      />
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
                      <h4>Advance Course Koteshwar Shidha Peeth Sadhana</h4>
                    </div>
                    <div class="card-body">
                      <div className="">
                        <iframe
                          src="https://www.youtube.com/embed/iOucPwHj8kU"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                          width="100%"
                          height="250px"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>


          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Videopage;
