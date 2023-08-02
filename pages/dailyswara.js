import Head from "next/head";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CarouselList from "../components/CarouselList";
import Layout from "../components/Layout";
import AnimatedDivLeft from "../components/AnimatedDivLeft";

function Dailyswara() {

  const customAnimationVariantsLeft = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
   const customAnimationVariantsRight = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };


  const customAnimationVariantsspring = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    type: "spring",
    duration: 1,
    bounce: 0.3,
  };

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [timezoneOffset, setTimezoneOffset] = useState("");
  const [monthName, setMonthName] = useState("");
  const [currrentDayM, setcurrrentDay] = useState("");
  const [infoMsg, setInfo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      latitude,
      longitude,
      timeZone,
      timezoneOffset,
      monthName,
      currrentDayM,
    };

    try {
      console.log(data);

      await axios.post("http://localhost:3006/Latitude", data);
      console.log("Message sent successfully");
      setInfo("Message sent successfully");
    } catch (err) {
      console.log(err);
    }
  };



  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onGeolocationSuccess,
        onGeolocationError
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    const getTimeZone = () => {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimeZone(timeZone);
    };
    getTimeZone();

    const getTimezoneOffsetVal = () => {
      const currentDate = new Date();
      const offsetMinutes = currentDate.getTimezoneOffset();
      const offsetHours = offsetMinutes / 60;

      setTimezoneOffset(offsetHours);

      const monthName = currentDate.toLocaleString('default', { month: 'long' });
      setMonthName(monthName)

      const dayOfMonth=currentDate.getDate();
      setcurrrentDay(dayOfMonth);
    };

    getTimezoneOffsetVal();
  }, []);

  const onGeolocationSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
    // You can perform any further processing or API calls with the obtained latitude and longitude.
  };

  const onGeolocationError = (error) => {
    console.log("Error occurred while retrieving geolocation:", error);
  };



  return (
    <Layout
      mainTitle="Daily Swara"
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>Daily Swara</title>
        <meta name="description" content="Daily Swara" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <CarouselList></CarouselList>
        <div className="mt-3">
          <div className="card   ">
            <div className="card-header titlestrip">
              <motion.div
                initial={{ x: 300, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <h1>DAILY SWARA</h1>
              </motion.div>
            </div>
            <div className="justifytext fs-5 p-3">
              <p>
                Calculate Swara Calender for Sunrise and Sunset Swara Yoga
                Sadhana– Select form input table -year / month / date, enter
                Longitude / timezone/ Latitude to get sunrise swara, sunset
                swara, moonrise and moonset. longitude for west negative, time
                zone behind Greenwich negative,latitude south negative. It will
                calculate for 31 days. Click ‘calculate’ and the result will
                display from the selected day of the month to the next 31 days.
                This calculator should be used only for one month of Swara
                Sadhana from the selected day of the month to the next 31 days.
                For your Swara Yoga practice copy and paste in Microsoft Word
                etc. and print.
              </p>
              <p>
                For Bangalore India only change Year, Month and Day other inputs
                are by default set for Bangalore and need not change.
              </p>
            </div>

            <div className="justifytext fs-5 p-3 ">
              <p>
                This calculator compute Swara calendar. This is the most
                required information for Swara yoga Sadhana. We have different
                cycles within our body and mind connected with the movement of
                sun and moon . These cycles hasÂ very deepÂ Â effect on our
                life. BecauseÂ Â ofÂ ignorance about theses cycles we doÂ
                different kind of mental, physical, material and spiritual work
                on wrong time that gives painful result in our life. To avoid
                and to expand in both material and spiritual life on fullest
                extent.Â Swara yoga gives certain practices connected with
                different lunar days which can be practices under the guidance
                of a adept. Swara yoga is a secret tantric science it should be
                done correctly. Incorrect practice can bring imbalances in the
                energy system , body and mind and can create pain and suffering
              </p>
            </div>

            <div className="justifytext fs-5 p-3 ">
              {latitude && longitude ? (
                <div>
                  Latitude: {latitude}
                  <br />
                  Longitude: {longitude}
                </div>
              ) : (
                <div>Loading Location error...</div>
              )}
            </div>

            <div className="justifytext fs-5 p-3 ">
              <h1>Time zone</h1>
              {timeZone ? (
                <div>Time Zone: {timeZone}</div>
              ) : (
                <div>Loading time zone...</div>
              )}
            </div>

            <div>
              <h1>time zone offset</h1>
              {timezoneOffset ? (
                <div>Timezone Offset: {timezoneOffset}</div>
              ) : (
                <div>Loading timezone offset...</div>
              )}
            </div>

            <div>
              <h1>calculate</h1>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Longitude :
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="txtLongitude" value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-3">
                      <label htmlFor="lat" className="form-label">
                        Latitude :
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="txtLatitude" value={longitude}
                        onChange={(e) => setLongitude(e.target.value)} 
                      />
                    </div>
                  </div>
                  <div className="col">
                  <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Time Zone :({timezoneOffset})
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="txtTimeZone" value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                  />
                </div>

                  </div>
                </div>


                <div className="row">
    <div className="col">
    <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Year :
                  </label>
                  <input type="text" className="form-control" id="txtYear"  value={new Date().getFullYear()} onChange={(e) => setLatitude(e.target.value)} />
                </div>
    </div>
    <div className="col">
    <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Month :
                  </label>
                  <input type="text" className="form-control" id="txtMonth" value={monthName} onChange={(e) => setMonthName(e.target.value)}/>
                </div>
    </div>
    <div className="col">
    <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Day :
                  </label>
                  <input type="text" className="form-control" id="txtDay" value={currrentDayM} onChange={(e) => setcurrrentDay(e.target.value)} />
                </div>
    </div>
  </div>


                






                <button type="submit" className="btn btn-primary">
                  Submit
                </button>

                <div className="row info info-success">{infoMsg}</div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dailyswara;
