import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";


function UserLogin() {
  
  const [user_email, setEmail] = useState("");
  const [user_Password, setPassword] = useState("");
  const [infoMsg, setInfo] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => 
  {
    e.preventDefault();

    const data = {
      user_email,
      user_Password,
    };
    console.log(data);
    try {
      await axios
        .post("http://localhost:3001/api/v1/signin/loginuser", data)
        .then((response) => {
          console.log(response.data);
if(response.data.ustatus=='S')
{
  setInfo("Message "+response.data.message); 
  
  console.log(response.data);
  var jsonval=response.data;
     var token =jsonval.token;
     var uemail =jsonval.email;
localStorage.setItem('token', token);
 router.push('/backend/home');
return;
}
if(response.data.ustatus=='F')
{
  setInfo("Message! "+response.data.message);
  return;  
}
if(response.data.ustatus=='S')
{
  setInfo("Message! "+response.data.message);
  return;  
}


      console.log("executed after login");
        })
        .catch((ermsg) => {
          console.log(ermsg);
        });

      //setInfo("Message sent successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <div className="card  titlestrip">
          <div className="card-header text-white">
            <h3> Login</h3>
          </div>
          <div className="fs-5 justifytext">
            <form onSubmit={handleSubmit}>
              <div className="p-1">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="user_email"
                  value={user_email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  aria-describedby="user_email"
                  placeholder="Enter Email Id"
                />
              </div>
              <div>
                <label htmlFor="userPassword">Password</label>
                <input
                  type="password"
                  id="user_Password"
                  value={user_Password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  aria-describedby="user_Password"
                  placeholder="Enter Password"
                />
              </div>

              <div className="row ">
                <div className="col-lg-12 ">
                  <div className="h-100 d-flex flex-column justify-content-center p-5">
                    <button type="submit" className="btn btn-primary py-3 px-5">
                      Submit
                    </button>
                  </div>
                </div>
              </div>

              <div className="row info info-success">
              <div className="col-lg-12 ">

              <div className="h-100 d-flex flex-column justify-content-center p-5">
              {infoMsg}   
                  </div>

              </div>
                
                
                </div>




              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserLogin;
