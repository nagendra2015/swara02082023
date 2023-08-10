import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import axiosInstance from "../axiosInstance";

function Blog() {
  const [records, setRecords] = useState([]);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const itemsPerPage = 3; // Set the number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data from the API by sending the authentication token
  const fetchNewItems = async () => {
    try {
      const response = await axiosInstance.get("/blog");
      if (response.status === 200) {
        const data = await response.data;
        setRecords(data);
      } else {
        console.error("API request failed");
      }
    } catch (error) {
      console.log("error is :-" + error);
    }
  };

  useEffect(() => {
    fetchNewItems();
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
  }, [inView]);

  // Calculate the range of items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = records.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(records.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="mt-1">
        <div className="card">
          <div className="card-header titlestrip">
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
              {currentItems.map((item, index) => (
                <span key={item.Blog_Id}>
                  <h1>{item.Blog_Subject}</h1>
                  <p dangerouslySetInnerHTML={{ __html: item.Blog_Description }} />
                </span>
              ))}

              {/* Pagination controls */}
              <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={page === currentPage ? "active" : ""}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
