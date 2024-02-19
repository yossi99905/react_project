import React from 'react'

const BtnIndexPage = (props) => {
  return (
    <div>
        <button className={`mx-1 btn btn-success ${props.active ? 'border-2 border-black': ''} my-3`} disabled={props.bool} onClick={()=>props.onEach()}>{props.number}</button>
    </div>
  )
}

export default BtnIndexPage