import React from 'react'

const PictureItem = (props) => {
  return (
    <div className='border border-success-subtle border-3 col-lg-3 m-4 pt-3 itemShope shadow bg-white'>
        <h3 className='fs-4'>{props.name}</h3>
        <img className='my-3 shadow' src={props.src} width={200} height={100} alt={props.name} />
        <div>price: {props.price}$</div>
        <div>category: {props.category}</div>
        <div>size: {props.size}</div>
    </div>
  )
}

export default PictureItem