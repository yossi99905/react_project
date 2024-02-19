import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Header/>

      <main className="container-fluid">
        <div className="container">
          <div className="heder text-center pt-5 mb-4">
            <h3 className="fs-5 our_mission">OUR MISSION</h3>
            <h1 className="mb-4">We will take you to landscapes you will not forget</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nisi voluptatibus inventore
              molestiae
              suscipit sequi sint repellat unde odit voluptatum perspiciatis obcaecati, vel minus amet rerum,
              laboriosam in aut. Dignissimos minima optio perferendis voluptates. Repellendus eius accusantium,
              neque
              omnis eaque autem quis ratione, minus corporis velit odio aliquam assumenda illo.</p>

          </div>


          <hr className="border border-success border-3 opacity-75 "/>



          {/* <!-- קופסה בתוך קופסה --> */}

          <div className="boxes position-relative ">
            <div className="box1 w-75 bg-success-subtle shadow-lg d-none d-lg-block">
              <div className="text w-50 p-5">

                <p className="mt-2 p fs-1">Our motto</p>
                <h2 className="mt-3">What really matters to us is satisfied customers with unforgettable trips</h2>
                <p className="mt-4 p fs-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, debitis vel
                  possimus nemo necessitatibus totam corrupti atque ea voluptatum vitae aspernatur natus
                  molestias, velit quis pariatur laboriosam. Accusamus quas quaerat beatae, amet quo cum
                  minus!
                  Libero suscipit quisquam magni accusamus nulla ratione, repudiandae asperiores cumque dicta
                  aborum iusto, aut exercitationem.
                  debitis vel
                  possimus nemo necessitatibus totam corrupti atque ea voluptatum vitae aspernatur natus

                </p>

              </div>

            </div>
            <div className="box2  w-50 shadow-lg position-absolute  shadow-lg d-none d-lg-block"></div>

            {/* <!-- במקרה שהאתר קטן --> */}
            <div className="d-lg-none">
              <div className="box1 w-75 bg-success-subtle shadow-lg m-auto mb-4">
                <div className="text  p-5 m-auto">

                  <p className="mt-2 ">Our motto</p>
                  <h2 className="mt-3">What really matters to us is satisfied customers with unforgettable trips</h2>
                  <p className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, debitis vel
                    possimus nemo necessitatibus totam corrupti atque ea voluptatum vitae aspernatur natus
                    molestias, velit quis pariatur laboriosam. Accusamus quas quaerat beatae, amet quo cum
                    minus!
                    Libero suscipit quisquam magni accusamus nulla ratione, repudiandae asperiores cumque
                    dicta
                    aborum iusto, aut exercitationem.
                    debitis vel
                    possimus nemo necessitatibus totam corrupti atque ea voluptatum vitae aspernatur natus

                  </p>

                </div>

              </div>
              <div className="box2  shadow-lg m-auto"></div>
            </div>
            <br/><br/><br/><br/><br/><br/>
          </div>
        </div>
      </main>
      <Footer/>

    </>
  )
}

export default About