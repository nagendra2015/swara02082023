import Carousel from 'react-bootstrap/Carousel';

function CarouselList() {
    return (

<div>




      <Carousel>

      <Carousel.Item>
          <img
            className="d-block w-100"
            src="/static/carousel/carousel.png" style={{  maxHeight:600 }}
            alt="First slide"
          />

          <Carousel.Caption>

            {/* <h1 className="display-2 text-primary animated slideInDown mb-4">The Best  School For Your Child</h1>

            <p className="display-2 text-primary animated slideInDown mb-4">For Your Kids</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 " style={{  maxHeight:600 }} 
            src="/static/carousel/carousel-4.png"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            {/* <h1 className="display-2 text-info animated slideInDown mb-4">Ragersville Pre School campus</h1>
            */}
            <h3>
            
            </h3> 
          </Carousel.Caption>
        </Carousel.Item>




        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/static/carousel/carousel-1.jpg" style={{  maxHeight:600 }}
            alt="First slide"
          />

          <Carousel.Caption>

            {/* <h1 className="display-2 text-primary animated slideInDown mb-4">The Best  School For Your Child</h1>

            <p className="display-2 text-primary animated slideInDown mb-4">For Your Kids</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{  maxHeight:600 }}            src="/static/carousel/carousel-2.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            
            {/* <h1 className="display-2 text-secondary animated slideInDown mb-4">Make A Brighter Future For Your Child</h1>

            <h3 className="display-2 text-success animated slideInDown mb-4">Ragersville</h3> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 " style={{  maxHeight:600 }} 
            src="/static/carousel/carousel-3.jpeg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            {/* <h1 className="display-2 text-info animated slideInDown mb-4">Ragersville Pre School campus</h1>
            <h3>
            Bestech Park View City 1, Sohna Road, Sector 48, Gurugram, Haryana
            </h3> */}
          </Carousel.Caption>
        </Carousel.Item>



 


      </Carousel>



      </div>
    );
  }
  
  export default CarouselList;