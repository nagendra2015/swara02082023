import Layout from "../components/Layout"
import Signinform from "../components/Signinform"

function Signin()
{
    return <Layout         mainTitle="Sign In User"
    footer={`Copyright ${new Date().getFullYear()}`}>


        <Signinform></Signinform>



    
    </Layout>
}

export default Signin