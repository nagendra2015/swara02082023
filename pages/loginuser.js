import Layout from "../components/Layout";
import UserLogin from "../components/UserLogin";

function Signin() {
  return (
    <Layout
      mainTitle="Login In User"
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <UserLogin></UserLogin>

      <div className="row ">
        <div className="col-lg-12 "></div>
      </div>
    </Layout>
  );
}

export default Signin;
