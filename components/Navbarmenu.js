import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";






function Navbarmenu() {
  return (
    <>
      <Navbar variant="dark" expand="lg" className="pageMenustrip">
        <Container>
          {/* <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand> */}
          <div className="navbar-brand">
            <Link href="/" className="nav-link">
              <img
                src="/static/sylogo.png"
                alt="swaryoa"
                style={{ maxHeight: 30 }}
              />
              <span className="fs-2">
                {" "}
                <b> swara yoga</b>
              </span>
            </Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link href="/" className="nav-link">
                Home
              </Link>
{/* about us page start */}
<NavDropdown
                title="About Us "
                id="basic-nav-dropdown"
                className="dropbtn"
              > 
                <i className="fa fa-caret-down"></i>
                <Link href="/about" className="dropdown-item">
                  About Us
                </Link>
                <NavDropdown.Divider />
                <Link href="/sanyasicharanashrit" className="dropdown-item">
                  About Guru Ji
                </Link>
                <NavDropdown.Divider />

              </NavDropdown>
{/* end about us page */}
              <Link href="/panchang" className="nav-link">
                Panchang
              </Link>

              <Link href="/dailyswara" className="nav-link">
                Daily Swara
              </Link>

              <Link href="/videopage" className="nav-link">
                Video Gallery
              </Link>


{/* swara menu page start */}
<NavDropdown
                title="Swara Yoga"
                id="basic-nav-dropdown1"
                className="dropbtn"
              > 
                <i className="fa fa-caret-down"></i>
                <Link href="/swara/shiva-swarodaya" className="dropdown-item">
                Shiva Swarodaya
                </Link>
                <NavDropdown.Divider />
                <Link href="/swara/swara-cycle" className="dropdown-item">
                  Swara Cycle
                </Link>
                <NavDropdown.Divider />
                <Link href="/swara/swara-change" className="dropdown-item">
                  Swara Change
                </Link>

                <NavDropdown.Divider />
                <Link href="/swara/morning-sadhana" className="dropdown-item">
                  Morning Sadhana
                </Link>
                <NavDropdown.Divider />
                <Link href="/swara/books-on-swarayoga" className="dropdown-item">
                Books on swarayoga
                </Link>

                <NavDropdown.Divider />
                <Link href="/swara/CHARANASHRIT-Interview" className="dropdown-item">
                Interview
                </Link>
                
                
                <NavDropdown.Divider />

              </NavDropdown>
{/* end about us page */}




              <Link href="/contact" className="nav-link">
                Contact Us
              </Link>

              <Link href="/blog" className="nav-link">
                Blog
              </Link>

              <Link href="/signin" className="nav-link">
                Sign In
              </Link>

              <Link href="/loginuser" className="nav-link">
                Login
              </Link>





              {/*
               <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
                className="dropbtn"
              >
                <i className="fa fa-caret-down"></i>
                <Link href="/contact" className="dropdown-item">
                  Contact Page
                </Link>
                <NavDropdown.Divider />
                <Link href="/about" className="dropdown-item">
                  about Page
                </Link>
                <NavDropdown.Divider />
                <Link href="/" className="dropdown-item">
                  Home
                </Link>
                <NavDropdown.Item href="/about">Action</NavDropdown.Item>
                <NavDropdown.Item href="/contact">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/about">Action</NavDropdown.Item>
                <NavDropdown.Item href="/contact">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> 
              
              */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarmenu;
