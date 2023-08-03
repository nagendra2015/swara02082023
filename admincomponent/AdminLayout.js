// import Navbarmenu from "./Navbarmenu";
// import { motion } from "framer-motion";
// import News from "./News";
// import Basiccourse from "./Basiccourse";
// import Footerinfo from "./footer";
import BackendMenu from "./BackendMenu";
import UserMenu from "./usermenu";
import axios from "axios";







const AdminLayout = ({ mainTitle, footer, children }) => (






  

  
  <div>
     <BackendMenu /> 

    {/* <!-- About Start --> */}
    <div className="container-xxl">
      <div className="container">
        <div className="pageColor rounded">
          <div className="row">

            {/* <!-- page right side Start --> */}

            <div className="col-lg-3 rightsidebar">
              <div className="pt-1">
                <div className="fs-5 justifytext">
                  {/* <News></News> */}
                </div>


                <div className="fs-5 justifytext">
                 
                </div>





                <div className="card  titlestrip">
                  <div className="card-header text-white">
                    <h3> Menu</h3>
<UserMenu></UserMenu>


                  </div> 
                </div>

              </div>
            </div>

            {/* <!--end page right side Start --> */}


            {/* <!--content page Start --> */}
            <div className="col-lg-9">{children}</div>
            {/* <!-- page end --> */}

          </div>
        </div>
      </div>
    </div>

    <div className="row footer pt-4">
      <div className="container-xxl">
        <div className="container">



{/* <Footerinfo></Footerinfo> */}


        </div>
      </div>
    </div>
  </div>
);

export default AdminLayout;
