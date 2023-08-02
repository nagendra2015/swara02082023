import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect,useState } from "react";
import axios from 'axios';
import axiosInstance from "../axiosInstance";

function Blog() {

  const [records, setRecords] = useState([]);
  const { ref, inView } = useInView();
  const animation = useAnimation();


  // Fetch data from the API by sending the authentication token
  const fetchnewitem = async () => {
    try { 
      const response = await axiosInstance.get('/blog');
      if (response.status === 200) {
        const data = await response.data;
        console.log("---------------Blog data is -------");
        console.log("blog data is "+data);

        setRecords(data)
      } else {
        console.error('API request failed');
      }
    } catch (error) {
      console.log("error is :-"+error);
    }
  };

  useEffect(() => {
    fetchnewitem();
  }, []);


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

    //console.log("Hook effect tutorial, InView =" + inView);
  }, [inView]);

  return (
    <div>
      <div className="mt-1">
        <div className="card  titlestrip ">
          <div className="card-header">
            <motion.div
              initial={{ x: 300, scale: 0.5 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 2 }}
            >
              <h3>Latest Blog</h3>
            </motion.div>
          </div>

          <div className="justifytext fs-5 p-1"></div>
          <div ref={ref}>
            <motion.div className="justifytext fs-5 p-1" animate={animation}>


{records.map((item,index) => (
            <span key={item.Blog_Id}>
<h1> 
{item.Blog_Subject}
</h1>
              <p> {item.Blog_Description}</p>
             
            </span>
          ))}

              


            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
