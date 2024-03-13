import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light" id='navbr'>
 <div className='Maintxt'>TODO APP</div>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarText">
 <ul className="navbar-nav ml-auto">
 <li className="nav-item">
 <Link className="nav-link active" to="/">Home</Link>
 </li>
       <li className="nav-item">
         <Link className="nav-link active" to="/details">Details</Link>
       </li>
 </ul>
 <ul className="navbar-nav ml-auto">
        
 </ul>
</div>
</nav>

   <Outlet />
 </>
  )
}

export default Navbar