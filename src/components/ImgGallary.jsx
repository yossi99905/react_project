import React from 'react'

const ImgGallary = props => {
  return (
    <div className={`mb-3 mb-lg-0  ${"col-md-"+props.col+" "+props.background}`}></div>
  )
}

export default ImgGallary