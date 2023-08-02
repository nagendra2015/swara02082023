import Link from "next/link";
function Footer() {
    return (
<>
<div>

<center>
            <h1>****************************************************** </h1>
          </center>

</div>




<div className="container">
  <div className="row">
    <div className="col">
      <h3>
    <Link href="/" className="nav-link">
                Home
              </Link></h3>
    </div>
    <div className="col">
    <h3>
    <Link href="/about" className="nav-link">
                About Us
              </Link>
              </h3>
    </div>
    <div className="col"><h3>
    <Link href="/panchang" className="nav-link">
                Panchang
              </Link>
              </h3>
    </div>

    <div className="col">
    <h3>
    <Link href="/dailyswara" className="nav-link">
                Daily Swara
              </Link>
              </h3>
    </div>

    <div className="col">
    <h3>
    <Link href="/videopage" className="nav-link">
                Video Gallery
              </Link>
              </h3>
    </div>
<div className="col">
<h3>
<Link href="/contact" className="nav-link">
                Contact Us
              </Link>
              </h3>
</div>

  </div>
</div>














     


</>
    );

}

export default Footer;
