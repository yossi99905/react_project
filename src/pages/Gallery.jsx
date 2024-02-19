import React from 'react'
import ImgGallary from '../components/ImgGallary'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Gallery = () => {


  return (
    <div>
      <Header />
      <div className='container m-auto'>
        <div className='imge'>

          <div className="all_row row justify-content-around mb-4">
            <ImgGallary col={3} background={"pic1"} />
            <ImgGallary col={4} background={"pic2"} />
            <ImgGallary col={4} background={"pic3"} />
          </div>
          <div className="all_row row justify-content-around mb-4">
            <ImgGallary col={5} background={"pic4"} />
            <ImgGallary col={4} background={"pic5"} />
            <ImgGallary col={2} background={"pic6"} />
          </div>
          <div className="all_row row justify-content-around mb-4">
            <ImgGallary col={2} background={"pic7"} />
            <ImgGallary col={5} background={"pic8"} />
            <ImgGallary col={4} background={"pic9"} />
          </div>
          <div className='all_row row justify-content-center mb-5 mt-5'>
            <div className="col-md-6 ">
              <iframe width="100%" height="315"
                src="https://www.youtube.com/embed/VU9QubwL94Y?si=neA_0iR_DHd2J_-g&amp;controls=0"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>
            <div className="col-md-6 ">
              <iframe width="100%" height="315"
                src="https://www.youtube.com/embed/dXIyMS61B68?si=Oa_J4TjbI6aW0iJo&amp;controls=0"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Gallery

