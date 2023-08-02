import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect,useState } from "react";
import axios from 'axios';
import axiosInstance from "../axiosInstance";

function News() {

  const [records, setRecords] = useState([]);
  const { ref, inView } = useInView();
  const animation = useAnimation();


  // Fetch data from the API by sending the authentication token
  const fetchnewitem = async () => {
    try {
       
    //  const response = await axios.get('http://localhost:3001/api/v1/news');
      const response = await axiosInstance.get('/news');

      //    console.log("reponse status is "+response.status);
      if (response.status === 200) {
        const data = await response.data;
        console.log(data);

        const updatedData = data.map((item) => ({
          ...item,
          isactive: item.isactive.data[0] === 1 ? 'Active' : 'Inactive',
        }));
console.log("record "+updatedData);

        setRecords(updatedData)
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
              <h3>Latest News</h3>
            </motion.div>
          </div>

          <div className="justifytext fs-5 p-1"></div>
          <div ref={ref}>
            <motion.div className="justifytext fs-5 p-1" animate={animation}>
              <marquee direction="down"
  width="250"
  height="200"
  behavior="alternate" scrollamount="3"
  >


{records.map((item,index) => (
            <span key={item.news_id}>

              <p> {index+1}- {item.news_description}</p>
             
            </span>
          ))}

              
              </marquee>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
