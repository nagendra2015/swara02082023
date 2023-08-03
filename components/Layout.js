import Navbarmenu from "./Navbarmenu";
import { motion } from "framer-motion";
import News from "./News";
import Basiccourse from "./Basiccourse";
import Footerinfo from "./footer";

const Layout = ({ mainTitle, footer, children }) => (
  <div>
    <Navbarmenu />

    {/* container-xxl replace with  */}
    <div className="container-xxl">
      <div className="container">
        <div className="pageColor rounded">
          <div className="row">
            {/* <!--content page Start --> */}
            <div className="col-lg-12">{children}</div>
            {/* <!-- page end --> */}
            {/* <!-- page right side Start --> */}



            {/* <!--end page right side Start --> */}
          </div>
        </div>
      </div>
    </div>

    <div className="row footer pt-4">
      <div className="container-xxl">
        <div className="container">



<Footerinfo></Footerinfo>


        </div>
      </div>
    </div>
  </div>
);

export default Layout;
