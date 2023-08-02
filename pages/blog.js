import Head from "next/head";
import { motion } from "framer-motion";

import CarouselList from "../components/CarouselList";
import Layout from "../components/Layout";
import BlogPage from "../components/Blog";
function Blog() {
  return (
    <Layout
      mainTitle="Blog"
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>Swara yoga Blog</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <CarouselList></CarouselList>
        <div className="mt-3"></div>

<BlogPage></BlogPage>


        <div className="mt-3">
          <div className="card  titlestrip ">
           
            <div className="justifytext fs-5 p-3 ">
              <p>
                <b>
                  For any queries, email to: <b> swarayoga@gmail.com</b>
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Blog;
