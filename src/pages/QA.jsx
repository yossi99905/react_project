import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const QA = () => {
  return (
    <div>
      <Header/>
      {/* <!-- שאלות ותשובות --> */}
      <main className="container-fluid">
        <div className="container">
          {/* <!-- פתיח השאלות --> */}
          <div className="text-center mt-5 mb-5">
            <p>travl viwe</p>
            <h1 className="mt-2 mb-4">Scenic Tours FAQ: Your Gateway to Adventure</h1>
            <p className="">Discover breathtaking vistas and unforgettable journeys with Scenic Tours! Our FAQ page
              answers your inquiries, guiding you through our scenic expeditions. From expedition details to
              booking information, find everything you need to know for an unparalleled landscape experience.</p>
          </div>



          {/* <!-- שאלות האקורדיון --> */}
          <div className="row accordion_q ">
            <div className="col1 col-md-6">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item pb-1 ">
                  <h2 className="accordion-header border-bottom border-2 border-success-subtle">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      What kind of nature tours does your company offer?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Our company specializes in a wide range of nature tours including hiking trails, birdwatching expeditions, wildlife safaris, and eco-friendly camping experiences.</div>
                  </div>
                </div>
                <div className="accordion-item pb-1">
                  <h2 className="accordion-header border-bottom border-2 border-success-subtle">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Are your nature tours suitable for beginners or experienced adventurers?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Absolutely! We design our tours to accommodate various skill levels. Whether you're a novice or an experienced nature enthusiast, we have options suitable for everyone.</div>
                  </div>
                </div>
                <div className="accordion-item pb-1">
                  <h2 className="accordion-header border-bottom border-2 border-success-subtle">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      What safety measures are in place during your nature tours?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Safety is our priority. We provide experienced guides, necessary safety equipment, first aid kits, and adhere strictly to safety protocols to ensure a secure and enjoyable experience for our participants.</div>
                  </div>
                </div>
                <div className="accordion-item pb-1">
                  <h2 className="accordion-header border-bottom border-2 border-success-subtle">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFourth" aria-expanded="false" aria-controls="flush-collapseFourth">
                      Do you offer custom or personalized nature tours?
                    </button>
                  </h2>
                  <div id="flush-collapseFourth" className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Yes, we offer personalized tours tailored to specific interests or group preferences. Whether it's a private excursion or customizing an existing tour, we can accommodate individual requests.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col2 col-md-6">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item pb-1">
                  <h2 className="accordion-header border-bottom border-2 border-success-subtle">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFifth" aria-expanded="false" aria-controls="flush-collapseFifth">
                      What kind of ecosystems or natural landmarks do your tours explore?
                    </button>
                  </h2>
                  <div id="flush-collapseFifth" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Our tours cover a diverse range of ecosystems such as rainforests, deserts, mountains, coastal areas, and specific landmarks like waterfalls, volcanoes, or unique flora and fauna habitats.</div>
                  </div>
                </div>
                <div className="accordion-item pb-1">
                  <h2 className="accordion-header border-bottom border-2 border-success-subtle">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapsesixth" aria-expanded="false" aria-controls="flush-collapsesixth">
                      Are your tours environmentally friendly or sustainable?
                    </button>
                  </h2>
                  <div id="flush-collapsesixth" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Absolutely! We are committed to sustainable tourism practices. Our tours are designed to minimize environmental impact and support local conservation efforts.</div>
                  </div>
                </div>
                <div className="accordion-item pb-1">
                  <h2 className="accordion-header border-bottom border-2 border-success-subtle">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseseventh" aria-expanded="false" aria-controls="flush-collapseseventh">
                      What should participants bring on your nature tours?
                    </button>
                  </h2>
                  <div id="flush-collapseseventh" className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">We provide a recommended packing list for each tour. Generally, essentials include appropriate clothing, sturdy footwear, sunscreen, insect repellent, water bottles, and personal items. Specific items will vary based on the tour.</div>
                  </div>
                </div>
                <div className="accordion-item pb-1">
                  <h2 className="accordion-header border-bottom border-2 border-success-subtle">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseeighth" aria-expanded="false" aria-controls="flush-collapseeighth">
                      How are your tour guides trained and what expertise do they have?
                    </button>
                  </h2>
                  <div id="flush-collapseeighth" className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Our guides are trained professionals with extensive knowledge of the local flora, fauna, history, and culture. They undergo rigorous training programs and often possess certifications in wilderness first aid, natural sciences, or specific outdoor skills.</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* <!-- לשאלות נוספות --> */}
      <div className="container-fluid mt-5  backrond_img_form bg-success-subtle">
        <div className="container  row justify-content-center m-auto align-content-center ">
          <form  className="formqa w-75  ">
            <h3>to more questions</h3>
            <div className="mb-3 mt-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label  className="form-label">Insert a question</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
              <button className="btn btn-success mt-3">send</button>
            </div>
          </form>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default QA