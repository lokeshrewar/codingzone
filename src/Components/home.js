import React, { useState, useEffect } from 'react';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';

import API from '../utils/apiCalling';
import { config } from '../utils/apiUrl';
import { toast } from 'react-toastify';
import { setLocalDataAsObject, getLocalDataAsObject } from '../utils/CoustomStorage';
import { withCookies } from 'react-cookie';

import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import HomeSectionOne from './dashboard/home_section_one';
import HomeSectionTwo from './dashboard/home_section_two';




const Home = (props) => {
  let message = "dashboard working"
  const api = new API()
  const [seoType, setSeoType] = useState("home")


  useEffect(()=>{
 
  },[])

  return (
    <div>
      <Header/>
 
<HomeSectionOne/>

<HomeSectionTwo />

<Footer/>
          </div>
  );
}

export default Home;