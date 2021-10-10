import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const HomeSectionTwo = (props) => {


  return (
    <div>
      
 

<div className="container-fluid ">
<div className="row our_courses">
<div className="col-md-12">
<h2 className="text-center">Our Courses</h2> 
</div>
</div>

<div className="row our_courses text-center">
  <div className="col-md-2">
    <div className="img-thumbnail">
   <Link to={"c"}> <a href="clanguage.html">  <img src="images/clanguage.png" className="img-fluid courseimg"/></a></Link>
    <div className="caption">
    <h4 className="text-center">C</h4>
    </div>
    </div>
  </div>
  
  <div className="col-md-2">
           <div className="img-thumbnail">
    <Link to={"c++"}> <a href="c++language.html">  <img src="images/c++language.png" className="img-fluid courseimg"/></a></Link>
            <div className="caption">
            <h4 className="text-center">C++</h4>
            </div>
            </div>
  </div>
  <div className="col-md-2">
  <div className="img-thumbnail">
    <Link to={"java"}>  <a href="javalanguage.html">  <img src="images/java.png" className="img-fluid courseimg"/></a></Link>
<div className="caption">
<h4 className="text-center">JAVA</h4>
</div>
</div>
  </div>
  <div className="col-md-2">
  <div className="img-thumbnail">
  <Link to={"computer"}>   <a href="computer.html">  <img src="images/computer.png" className="img-fluid courseimg"/></a></Link>
            <div className="caption">
            <h4 className="text-center">COMPUTER</h4>
            </div>
            </div>
  </div>
  <div className="col-md-2">
  <div className="img-thumbnail">
  <Link to={"javascript"}>    <a href="javascript.html">  <img src="images/javascript.png" className="img-fluid courseimg"/></a></Link>
<div className="caption">
<h4 className="text-center">JAVCSCRIPT</h4>
</div>
</div>
  </div>
  <div className="col-md-2">
  <div className="img-thumbnail">
  <Link to={"html"}>      <a href="html.html">  <img src="images/html.png" className="img-fluid courseimg"/></a></Link>
            <div className="caption">
            <h4 className="text-center">HTML</h4>
            </div>
            </div>
  </div>
</div>
<div className="row our_courses text-center">
  <div className="col-md-2">
  <div className="img-thumbnail">
  <Link to={"css"}> <a href="css.html">  <img src="images/css.png" className="img-fluid courseimg"/></a></Link>
<div className="caption">
<h4 className="text-center">CSS</h4>
</div>
</div>
  </div>
  <div className="col-md-2">
  <div className="img-thumbnail">
  <Link to={"php"}>     <a href="php.html">  <img src="images/php.png" className="img-fluid courseimg"/></a></Link>
            <div className="caption">
            <h4 className="text-center">PHP</h4>
            </div>
            </div>
  </div>
  <div className="col-md-2">
  <div className="img-thumbnail">
  <Link to={"mysql"}>   <a href="mysql.html">  <img src="images/mysql.png" className="img-fluid courseimg"/></a></Link>
<div className="caption">
<h4 className="text-center">MY SQL</h4>
</div>
</div>
  </div>
  <div className="col-md-2">
  <div className="img-thumbnail">
  <Link to={"dotnet"}>    <a href=".net.html">  <img src="images/_net.png" className="img-fluid courseimg"/></a></Link>
            <div className="caption">
            <h4 className="text-center">.NET</h4>
            </div>
            </div>
  </div>
  <div className="col-md-2">
  <div className="img-thumbnail">
  <Link to={"bootstrap"}>   <a href="bootstrap.html">  <img src="images/bootstrap.png" className="img-fluid courseimg"/></a></Link>
<div className="caption">
<h4 className="text-center">BOOTSTRAP</h4>
</div>
</div>
  </div>
  <div className="col-md-2">
  <div className="img-thumbnail">
  <Link to={"microsoftoffice"}>    <a href="microsoftoffice.html">  <img src="images/msoffice.png" className="img-fluid courseimg"/></a></Link>
            <div className="caption">
            <h4 className="text-center">MS OFFICE</h4>
            </div>
            </div>
  </div>
</div>
</div>


<div className="container-fluid">
<div className="row aboutme">
  <div className="col-md-3">
         <img src="images/aboutme.png" className="img-fluid img-thumbnail"/>
  </div>
  <div className="col-md-9">
  <p className="Authorview"> Author View</p> 
  <p className="words">  Hi, I have written and developed this site so that students may learn computer science related technologies easily. I'm committed to provide easy and in-depth tutorials on various technologies. No one is perfect in this world and nothing is eternally best. But we can try to be better. I hope it will help you a lot. -    Lokesh Rewar</p>
  </div>
</div>
</div>    



</div>
        
  );
}

export default HomeSectionTwo;