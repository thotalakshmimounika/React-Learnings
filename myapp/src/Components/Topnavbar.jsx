import React from 'react';
import { Link } from 'react-router-dom';

function Topnavbar(props) {
    let styleobj={backgroundColor:"darkcyan"}

    return (
        <div>
<nav className="navbar navbar-expand-lg" style={styleobj}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">React Demo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/products"}>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/counter"}>Counter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/uncontrolledform"}>Uncontrolled form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/controlledform"}>controlled form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/axios"}>axiosdemo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/redux"}>reduxdemo</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
            
        </div>
    );
}

export default Topnavbar;