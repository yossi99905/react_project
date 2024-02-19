import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="container-fluid bg-black  opacity-75 text-light mt-5">
        <div className="container">

          {/* <!-- ארבעת האיקונים לסוישל --> */}
          <div className={"row justify-content-center text-center div_social_footer"}>
            <div className="box_social col-md-1 d-flex justify-content-center align-items-center border rounded-circle m-2">
              <NavLink target="_blank" className="text-light" to="https://web.whatsapp.com/">
                <i className="fa fa-2x fa-whatsapp "></i>
              </NavLink>
            </div>
            <div className="box_social col-md-1 d-flex justify-content-center align-items-center border rounded-circle m-2">
              <NavLink target="_blank" className="text-light" to="https://twitter.com/">
                <i className="fa fa-2x fa-instagram "></i>
              </NavLink>
            </div>
            <div className="box_social col-md-1 d-flex justify-content-center align-items-center border rounded-circle m-2">
              <NavLink target="_blank" className="text-light" to="https://twitter.com/">
                <i className="fa fa-2x fa-twitter"></i>
              </NavLink>
            </div>
            <div className="box_social col-md-1 d-flex justify-content-center align-items-center border rounded-circle m-2">
              <NavLink target="_blank" className="text-light" to="https://www.twitch.tv/">
                <i className="fa fa-2x fa-twitch "></i>
              </NavLink>
            </div>
          </div>

          {/* <!-- מידע עלי--> */}
          <div className="row text-center mt-3">
            <p>
              "Skilled web developer with expertise in front-end technologies such as HTML, CSS, and JavaScript, coupled
              with proficiency in React for building interactive and responsive websites. Portfolio includes successful
              projects implementing SEO best practices and accessibility standards, ensuring user-friendly interfaces.
              Collaborative team player, adept at working with designers and stakeholders to transform concepts into
              functional web solutions. Continuously exploring new technologies to deliver innovative and optimized web
              experiences."
            </p>

          </div>
          <div className="w-100 d-flex justify-content-center mb-2">
            <button className="btn btn-dark w-25">
              <a className="text-light top_button" href="#"><i className="fa fa-arrow-up"
                aria-hidden="true">
                  </i><span className="d-none d-md-inline"> back to top </span><i
                  className="fa fa-arrow-up d-none d-md-inline" aria-hidden="true">
                    </i></a>
            </button>

          </div>

          {/* <!-- תפריט קישוריות --> */}
          <div className="row justify-content-center text-center  ">
            <div className="col-lg-1 m-2">
              <h3 className="fs-5">Services</h3>
              <ul className="list-unstyled ">
                <li><NavLink className="ul_link" to="#">Web design</NavLink></li>
                <li><NavLink className="ul_link" to="#">Development</NavLink></li>
                <li><NavLink className="ul_link" to="#">Hosting</NavLink></li>
              </ul>
            </div>
            <div className="col-lg-1 m-2">
              <h3 className="fs-5">About</h3>
              <ul className="list-unstyled">
                <li><NavLink className="ul_link" to="#">Company</NavLink></li>
                <li><NavLink className="ul_link" to="#">Team</NavLink></li>
                <li><NavLink className="ul_link" to="#">Careers</NavLink></li>
              </ul>
            </div>
          </div>


        </div>
      </footer>
    </div>
  )
}

export default Footer