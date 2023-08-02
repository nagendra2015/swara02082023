import Layout from "../../admincomponent/AdminLayout";
import Head from "next/head";


function Home() {
  return (
    <Layout
      mainTitle="Home "
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>Index</title>
        <meta name="description" content="Backend Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        
        <div className="mt-3">
          <div className="card  titlestrip ">
            <div className="card-header">
              
                <h1>Home page</h1>
              
            </div>
            <div className="justifytext fs-5 p-3">
              Swara Yoga is an organization to bring about the right information
              on swara yoga, an ancient science of breathing and to guide the
              sadhaks in their swara yoga sadhana. This website is under the
              direct guidance of Sannyasi Charanashrit who is involved in the
              practice and research on this ancient science from many years.
              This website is absolutely free and all the calculations of Swara
              Yoga are freely available online
            </div>

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

export default Home;

