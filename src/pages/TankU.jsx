import React from 'react'
import { NavLink } from 'react-router-dom'

const TankU = () => {
  
  return (
    <div>
      <main className="container-fluid ">
        <div className="container">
          <div className="div_tnk bg-light shadow-lg text-center mx-auto p-4">
            <img src="images/thankU.jpg" className="img_tnk" alt="thank U" />
            <h1 className="display-6">Thank U!</h1>
            <h2 className="fs-4 display-3 mx-2">
              click to back to home page</h2>
            <button className="btn btn-success rounded-0 my-4 "><NavLink to={"/"} >Home page</NavLink></button>
          </div>

        </div>
        <NavLink to={"/"}>
          <img className="img d-none d-md-block" src="./images/balloon.gif" alt="balloon" />
        </NavLink>
      </main>
    </div>
  )
}

export default TankU