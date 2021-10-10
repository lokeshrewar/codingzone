import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { setLocalDataAsObject, getLocalDataAsObject, clearLocalData } from '../utils/CoustomStorage';
import { useHistory } from "react-router-dom";
// import { withCookies } from 'react-cookie';


const Header = (props) => {




  React.useEffect(() => {
    // const profileData = getLocalDataAsObject('data')


  }, [])


  return (

    <div>


      <nav className="navbar navbar-expand-lg navbar-light bg headerheight">
        <Link className="navbar-brand" to={"/"}> <img src="images/coddingzone.png" width="250" alt="LOGO" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/c"}>C</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/c++"}>C++</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/java"}>JAVA</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/computer"}>COMPUTER</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/javascript"}>JAVASCRIPT</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/html"}>HTML</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/css"}>CSS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/php"}>PHP</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/dotnet"}>.NET</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/howto"}>HOWTO</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                COURSES
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                <Link className="dropdown-item" to={"/bootstrap"}>Bootstrap</Link>
                <Link className="dropdown-item" to={"/microsoftoffice"}>Microsoft Office</Link>
                <Link className="dropdown-item" to={"/mysql"}>My Sql</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/exercise-test"}>EXERCISE TEXT</Link>

            </li>
          </ul>


        </div>
      </nav>
    </div>

  );
}

export default Header;