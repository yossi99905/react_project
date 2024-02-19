import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loction from '../components/Location'
import { NavLink } from 'react-router-dom'



const Home = () => {

  return (
    <div>
      <Header />


      {/* <!-- רקע --> */}
      <main className={"container-fluid text-light p-0"}>




        {/* <!-- סושייל --> */}
        <div className="d-flex flex-column align-items-end justify-content-end sochail_box  ">
          <div className="bg-dark">
            <NavLink target="_blank" to="https://www.instagram.com/">
              <i className="fa fa-instagram fa-2x text-white p-2"></i>
            </NavLink>
          </div>
          <div className="bg-dark">
            <NavLink target="_blank" to="https://www.snapchat.com/"><i
              className="fa fa-snapchat fa-2x text-white p-2"></i></NavLink>
          </div>
          <div className="bg-dark">
            <NavLink target="_blank" to="https://web.whatsapp.com/">
              <i className="fa fa-whatsapp fa-2x text-white p-2"></i>
            </NavLink>
          </div>
        </div>
        {/* <!-- מיין --> */}
        <div className="img_hed_main w-100 ">
          <div className="container text-center h-100 w-100">

            {/* <!-- השורת כותרת --> */}
            <div className="main_area  justify-content-around align-items-center d-flex flex-column">
              <div className="title div_title">
                <h1 className="display-3 text-light p-4 h1">TRAVEL</h1>
                <h2 className="fs-4 h2_line p-3 ">END LEARN THE BEST WAY TO DO IT</h2>
                <a href="#soulful" className="btn rounded-0 btn_leran btoon_larn  text-light border border-light">Click to more</a>
              </div>

              {/* <!-- השורטים הקצרים --> */}
              <div className="row_short mt-sm-5  d-lg-flex d-block align-content-center w-75  justify-content-between h-25 ">

                <div className="col-lg-3  m-lg-0 m-5 shadow-lg row_in_short p-md-0 text-black ">
                  <div className="short1   "></div>
                  <div className="in_sort  pt-3 px-3 ">
                    <h3 className="fs-5">THE FUSCE</h3>
                    <p>Lorem ipsum dolor sit amet coectetur adipisicing elit. A</p>
                  </div>
                </div>

                <div className="col-lg-3  m-lg-0 m-5 shadow-lg row_in_short p-md-0 text-black ">
                  <div className="short2 "></div>
                  <div className="in_sort  pt-3 px-3 ">
                    <h3 className="fs-5">THE FUSCE</h3>
                    <p>Lorem ipsum dolor sit amet consecter adipisicing elit. A</p>
                  </div>
                </div>

                <div className="col-lg-3  m-lg-0 m-5  shadow-lg row_in_short p-md-0 text-black">
                  <div className="short3  "></div>
                  <div className="in_sort  pt-3 px-3 ">
                    <h3 className="fs-5">THE FUSCE</h3>
                    <p>Lorem ipsum dolor sit amet consecter adipisicing elit. A</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        {/* <!-- קרוסלה --> */}
        <div className="container text-dark">
          <div className="mt-5  ">

            <div className="">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active div_carousel">
                    <div className="carrousel4 d-flex align-items-end">
                      <p className="bg-black opacity-75 text-white mb-0 w-100 p_carousel text-center pt-4">
                        "NBA players, exemplifying athleticism and teamwork, captivate audiences with their skillful
                        performances on the basketball court worldwide."
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carrousel3 d-flex align-items-end">
                      <p className="bg-black opacity-75 text-white mb-0 w-100 p_carousel text-center pt-4">

                        The sun dipped behind the horizon, casting a golden hue over the rolling meadows that stretched as
                        far as the eye could see. Majestic mountains stood sentinel in the distance, their peaks kissed by
                        wisps of swirling mist, creating an ethereal panorama against the painted sky.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carrousel1 d-flex align-items-end">
                      <p className="bg-black opacity-75 text-white mb-0 w-100 p_carousel text-center pt-4">

                        The sun dipped behind the horizon, casting a golden hue over the rolling meadows that stretched as
                        far as the eye could see. Majestic mountains stood sentinel in the distance, their peaks kissed by
                        wisps of swirling mist, creating an ethereal panorama against the painted sky.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carrousel2 d-flex align-items-end">
                      <p className="bg-black opacity-75 text-white mb-0 w-100 p_carousel text-center pt-4">

                        The sun dipped behind the horizon, casting a golden hue over the rolling meadows that stretched as
                        far as the eye could see. Majestic mountains stood sentinel in the distance, their peaks kissed by
                        wisps of swirling mist, creating an ethereal panorama against the painted sky.
                      </p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </div>
          </div>


          <div className="mt-5 ">


            {/* <!-- כותרת --> */}
            <h1 className={`p-1 text-xl-center`} id={"soulful"}>Soulful Encounters: The Enriching Experience of Nature Excursions
            </h1>

            {/* <!-- טקסט על  --> */}
            <p className="w-75 m-auto ">
              Nature excursions offer captivating experiences centered on the connection between humans and the natural
              environment. Amidst the bustling routines of everyday life, these journeys provide an escape into purer and
              more tranquil realms. These adventures provide an opportunity to encounter the beauty of serene forest trails,
              majestic mountain peaks, and vibrant ecosystems. Engaging in activities like hiking, birdwatching, and camping
              fosters an appreciation for the environment and encourages a deeper understanding of conservation.

              These outings not only offer scenic vistas but also provide moments of tranquility and self-reflection.
              Nature's therapeutic qualities inspire mindfulness, promoting mental and physical well-being. Each excursion
              creates lasting memories and cultivates a profound respect for Earth's pristine landscapes. Ultimately, these
              nature excursions enrich lives by fostering a deeper understanding of our interconnectedness with the natural
              world, encouraging a sense of wonder and a commitment to preserving our environment for future generations.
            </p>


          </div>
        </div>
      </main>


      <div className="container-fluid  mt-5 bg-success-subtle">
        <div className="container">

          {/* <!-- כתבות אחרונות --> */}
          <div className="row justify-content-around p-5 rounded-0">
            <div className="card_story card col-md-3 mt-3 p-0 rounded-0 border-0">
              <img src="./images/back8.jpg" className="card-img-top img_story rounded-0" alt="Single Game Tickets " />
              <div className="card-body">
                <h5 className="card-title">Single Game Tickets</h5>
                <p className="card-text d-none d-lg-block">
                  Be a part of the NBA experience and watch the Wizards in action. Purchase your single game tickets for the
                  23-24 season. We’ll see you down here at Capital One Arena!</p>
                <NavLink to="https://www.centralparknyc.org/" target="_blank" className="btn btn-dark rounded-0">LEARN MORE</NavLink>
              </div>
            </div>
            <div className="card_story card col-md-3 mt-3 rounded-0 p-0 border-0">
              <img src="./images/backround2.jpg" className="card-img-top img_story rounded-0" alt="Partial Plans" />
              <div className="card-body">
                <h5 className="card-title">Partial Plans</h5>
                <p className="card-text d-none d-lg-block">Not ready to become a DC 12 Club member just yet? Still get access to
                  2023-24 season Wizards games with our most convenient ticket plans.</p>
                <NavLink to="https://www.centralparknyc.org/" className="btn btn-dark rounded-0" target="_blank">LEARN
                  MORE</NavLink>
              </div>
            </div>
            <div className="card_story card col-md-3 mt-3 rounded-0 p-0 border-0">
              <img src="./images/backround5.jpg" className="card-img-top img_story rounded-0" alt="Season Tickets" />
              <div className="card-body">
                <h5 className="card-title">Season Tickets</h5>
                <p className="card-text d-none d-lg-block">Purchase your 2023-24 season ticket membership and assure yourself
                  the best seats at the best price. Receive access to all Wizards home games in addition to DC 12 Club
                  membership!.</p>
                <NavLink to="https://www.centralparknyc.org/" className="btn btn-dark rounded-0" target="_blank">LEARN MORE</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Loction />

      <Footer />
    </div>
  )
}

export default Home