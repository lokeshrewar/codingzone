
import React, { useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom'

const Loginpage = (props) => {


    return (
        <div>
           <Header/>

            <h3>Login page</h3>
            <div className="container px-5 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto main">
        <div className="card card0 border-0">
            <div className="row d-flex">
                <div className="col-lg-6">
                    <div className="card1">
                        <div className=""> 
                            <img src="images/coddingzone.png" height="60px" className="logo"/>
             
                        </div>
                        <div className="text-center mt-4  border-line"> <img src="images/deshbordimg.jpg" className="image"/> 
                        
                            <h2>Admin Dashboard</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card2 card border-0 px-4 py-5">
                        <div className="mb-4 px-3">
                            <h4 className=" text-center mb-0 mt-2">User Login</h4>
                           
                        </div>
                       
                        

                        <div className="row px-0"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Email Address</h6>
                            </label> <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address"/> </div>
                        <div className="row px-0"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Password</h6>
                            </label> <input type="password" name="password" placeholder="Enter password"/> </div>
                        <div className="row px-0 mb-4">
                            <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input"/> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                        </div>
                        <div className="row mb-3 text-center px-3">
                             <Link to={"adminpannel"}><button type="submit" className="btn btn-blue text-center">Login</button></Link>
                              </div>
                        <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <a className="text-danger ">Register</a></small> </div>
                    
                        <div className="row px-3 mb-4">
                            <div className="line"></div> <small className="or text-center">Or</small>
                            <div className="line"></div>
                        </div>

                        <div className="myicon">

                         <div className="facebook text-center mr-3">
                            <div className="fa fa-facebook"></div>
                        </div>

                        <div className="twitter text-center mr-3">
                            <div className="fa fa-twitter"></div>
                        </div>

                        <div className="linkedin text-center mr-3">
                            <div className="fa fa-linkedin"></div>
                        </div>

                    </div>

                    
                    </div>
                </div>
               
               
            
            </div>
            <div className="bg-blue text-center py-4">
               
                    <h5>Get ready to onboard at CoddingZone</h5>
                   
                </div>
            </div>
        </div>
    

           
           <Footer/>
        </div>
    );
}

export default Loginpage;