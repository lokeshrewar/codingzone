import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { setLocalDataAsObject, getLocalDataAsObject, clearLocalData } from '../utils/CoustomStorage';
import { useHistory } from "react-router-dom";
// import { withCookies } from 'react-cookie';


const Footer = (props) => {




     React.useEffect(() => {

          // const profileData = getLocalDataAsObject('data')


     }, [])

     return (



          
<footer className="page-footer font-small mdb-color pt-4">

     
     <div className="container-fluid text-center text-md-left footer">
   
       
       <div className="row text-center text-md-left mt-3 pb-3">
   
       
         <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
         <Link className="navbar-brand" to={"/"}> <img src="images/coddingzone.png" width="250"  alt="LOGO" /></Link>
           <p>Hi, I have written and developed this site so that students may learn computer science related technologies easily. I'm committed to provide easy and in-depth tutorials on various technologies. No one is perfect in this world and nothing is eternally best. But we can try to be better. I hope it will help you a lot. - Lokesh Rewar</p>
         </div>
       
   
         <hr className="w-100 clearfix d-md-none"></hr>
   
       
         <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
           <h6 className="text-uppercase mb-4 font-weight-bold">Courses</h6>
           <p>
             <Link to="/c">C</Link>
           </p>
           <p>
             <Link to="/c++">C++</Link>
           </p>
           <p>
             <Link to="/html">HTML</Link>
           </p>
           <p>
             <Link to="/javascript">Javascript</Link>
           </p>
         </div>
       
   
         <hr className="w-100 clearfix d-md-none"></hr>
   

         <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
           <h6 className="text-uppercase mb-4 font-weight-bold">Links</h6>
           <p>
             <Link to="/php">PHP</Link>
           </p>
           <p>
             <Link to="/computer">Computer</Link>
           </p>
           <p>
           <Link to="/howto">How To</Link>
           </p>
           <p>
           <Link to="/exercise-test">ExerciseTest</Link>
           </p>
         </div>
   
     
         <hr className="w-100 clearfix d-md-none"></hr>
   
     
         <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
           <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
           <p>
             <i className="fa fa-home"></i> Sikar, Rajasthan, India</p>
           <p>
             <i className="fa fa-envelope"></i> coddingzone@gmail.com</p>
           <p>
             <i className="fa fa-phone"></i> + 91 952 113 3660</p>
           
         </div>
     
   
       </div>
     
   
       <hr></hr>
   
     
       <div className="row d-flex align-items-center footerdown">
   
     
         <div className="col-md-7 col-lg-8">
   
     
           <p className="text-center text-md-left">© 2021 Copyright:
             <a href="">
               <strong> CoddingZone.com</strong>
             </a>
           </p>
   
         </div>
     
   
     
         <div className="col-md-5 col-lg-4 ml-lg-0">
   
     
           <div className="text-center text-md-right">
             <ul className="list-unstyled list-inline">
               <li className="list-inline-item">
                 <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.facebook.com/lokesh.rewar">
                   <i className="fa fa-facebook"></i>
                 </a>
               </li>
               <li className="list-inline-item">
                 <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://twitter.com/LokeshRewar">
                   <i className="fa fa-twitter"></i>
                 </a>
               </li>
               <li className="list-inline-item">
                 <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.instagram.com/lokesh_rewar/">
                   <i className="fa fa-instagram"></i>
                 </a>
               </li>
               <li className="list-inline-item">
                 <a className="btn-floating btn-sm rgba-white-slight mx-1" href="#">
                   <i className="fa fa-google-plus"></i>
                 </a>
               </li>
               <li className="list-inline-item">
                 <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.linkedin.com/in/lokesh-rewar-377b73141/">
                   <i className="fa fa-linkedin"></i>
                 </a>
               </li>
               <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.youtube.com/futureexam1">
                      <i className="fa fa-youtube-play"></i>
                    </a>
                </li>
             </ul>
           </div>
   
         </div>
     
   
       </div>
     
   
     </div>

   
   </footer>
  
                                        
               


     );
}

export default Footer;