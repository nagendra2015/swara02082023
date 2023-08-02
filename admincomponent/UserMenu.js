import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from 'react';
import axiosInstance from "../axiosInstance";




 function UserMenu() {

  const [data, setData] = useState(null);
  useEffect(() => {
    // Fetch data from the API by sending the authentication token
    const token = localStorage.getItem('token');
    console.log("token is "+token);
    const fetchApiData = async () => {
      try {
         
        const response = await axiosInstance.get('/signin/getMenuList');
    //    console.log("reponse status is "+response.status);
        if (response.status === 200) {
          const data = await response.data;
        //  console.log(data);
          setData(data);
        } else {
          console.error('API request failed');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchApiData();
  }, []);




  return (
    <>



<div>

      {data ? (
        
<ul>
      {data.map((item, index) => (
        <li key={index}>
          <Link href={item.url}>{item.label}</Link>
        </li>
      ))}
    </ul>



      ) : (
        <p>Loading data...</p>
      )}
    </div>



    </>
  );
}

export default UserMenu;
