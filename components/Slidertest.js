import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Slidertest () {
    return (
      <>

          <section className="section">
            <div className="container">
              <div className="row">
                <div className="mx-auto mb-12 text-center md:col-10 lg:col-8 xl:col-6">
                  
                 
                </div>
                <div className="col-12">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    loop={true}
                    loopedSlides={2}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    spaceBetween={24}
                    breakpoints={{
                      768: {
                        slidesPerView: 2,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                    }}
                  >
      <SwiperSlide>
        <div className="row">
        <img
            className="d-block w-100"
            src="/static/images/slider/gurujiwithsadhana.jpg" 
            alt="guru ji"
          />
        </div>
        


      </SwiperSlide>
      <SwiperSlide>
      <div className="row">
        <img
            className="d-block w-100"
            src="/static/images/slider/ganga.jpg" 
            alt="Ganga ji in rishikesh"
          />
        </div>

      </SwiperSlide>
      <SwiperSlide>
      <div className="row">
        <img
            className="d-block w-100"
            src="/static/images/slider/temple.jpg" 
            alt="Rishikesh Temple"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="row">
        <img
            className="d-block w-100"
            src="/static/images/slider/gurujiwithme.jpg" 
            alt="guru ji"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide><div className="row">
        <img
            className="d-block w-100"
            src="/static/images/slider/temple-ganga.jpg" 
            alt="Rishikesh Temple"
          />
        </div>
        </SwiperSlide>

      <SwiperSlide>     
      <div className="row">
        <img
            className="d-block w-100"
            src="/static/images/slider/sangeet.jpg" 
            alt="Rishikesh Temple"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>     
      <div className="row">
        <img
            className="d-block w-100"
            src="/static/images/slider/shivroop.png" 
            alt="Rishikesh Temple"
          />
        </div>
      </SwiperSlide>

      
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
       
      </>
    );
  };
  
  export default Slidertest;
  