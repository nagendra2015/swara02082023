import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

function Contactform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [infoMsg, setInfo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };

    try {
      await axios.post("http://localhost:3006/contacts", data);
      console.log("Message sent successfully");
      setInfo("Message sent successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Contact form </h1>

      <div>
        <div className="card  titlestrip">
          <div className="card-header text-white">
            <h3> Send Query</h3>
          </div>
          <div className="fs-5 justifytext">
            <form>
              <div className="form-group">
                <label for="InputName">Enter Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="cname"
                  aria-describedby="name"
                  placeholder="Enter Name"
                />
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label for="inputMessage">Message</label>
                <textarea id="umessage" value="" className="form-control" />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Submit
          </button>

          <div className="row info info-success">{infoMsg}</div>
        </form>
      </div>
    </div>
  );
}
export default Contactform;
