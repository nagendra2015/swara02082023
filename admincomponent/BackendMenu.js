import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from 'react';





 function BackendMenu() {

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
              <Link href="/backend/home" className="nav-link">
                Home
              </Link>

              <Link href="/backend/newsentry" className="nav-link">
                NewsEntry
              </Link>

              <Link href="/" className="nav-link">
                Panchang
              </Link>

              <Link href="/" className="nav-link">
                Daily Swara
              </Link>

              <Link href="/" className="nav-link">
                Video Gallery
              </Link>
              <Link href="/contact" className="nav-link">
                Contact Us
              </Link>

              <Link href="/loginuser" className="nav-link">
                Logout
              </Link>




            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BackendMenu;
