
import { useEffect, useState } from "react";

import axios from "axios";
import CountryList from "./CountryList";
function Signinform() {
  const [user_name, setName] = useState("");
  const [user_mobile, setMobile] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_role, setRole] = useState("USER");

  const [infoMsg, setInfo] = useState("");
  const [user_country, setUserCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSelectValue = (value) => {
    setUserCountry(value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setInfo("");
    const data = {
      user_name,
      user_email,
      user_mobile,
      user_role,
      user_country,
    };
    console.log(data);

    if (!user_name) {
      setErrorMessage('Name required'); // Display error message for empty textbox
      return;
    }
    if (!user_email) {
      setErrorMessage('Valid email id required'); // Display error message for empty textbox
      return;
    }
    if (!user_mobile) {
      setErrorMessage('Mobile no. required'); // Display error message for empty textbox
      return;
    }


    try {

      await axios.post("http://localhost:3001/api/v1/signin", data).then(response=>{
      console.log(response.data);
if(response.status==201)
{
  setInfo("information saved successfully");
}
if(response.status==200)
{
  setInfo("Message "+response.data.message);
}

if(response.status==502)
{
  setInfo("Message "+response.data.message);
  //setInfo("something went wrong");
}
      }).catch(ermsg=>{
        console.log(ermsg);

      });
      


    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>

      <div>
        <div className="card  titlestrip">
          <div className="card-header text-white">
            <h3> Sign In Form</h3>
          </div>
          <div className="fs-5 justifytext">
            
          <form onSubmit={handleSubmit}>
          <div className="p-1">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="user_name"
              value={user_name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              aria-describedby="user_name"
                  placeholder="Enter Name"
            />
          </div>
          <div className="p-1">
            <label htmlFor="email">Email*</label>
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
            <label htmlFor="message">Contact No.*</label>
            <input type="text"
              id="user_mobile"
              value={user_mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="form-control"
              aria-describedby="user_mobile"
                  placeholder="Enter Contact No."
            />
          </div>


          <div>
            <label htmlFor="message">Select Country</label>
            


 <CountryList onSelectValue={handleSelectValue}></CountryList> 

 
          </div>

<div className="row">
<div className="row info info-success "> 
<div className="col-lg-12  " >
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {infoMsg}

</div>
</div>
</div>

          <div className="row ">
                        <div className="col-lg-12 " >
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                
                            <button type="submit" className="btn btn-primary py-3 px-5">
            Submit
          </button> <span className='success-message'> {infoMsg} </span>
          <span className='error-message'> {errorMessage} </span>
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
export default Signinform;
