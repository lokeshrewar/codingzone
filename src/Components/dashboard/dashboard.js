import React, { Fragment, useEffect, useState } from 'react';

import Footer from '../footer';
import Header from '../header'
import API from '../../utils/apiCalling';
import { config } from '../../utils/apiUrl';

const Dashboard = (props) => {
    const api = new API()
    useEffect(() => {
 
    }, [])

    return (
        <Fragment>
            <Header/>
<h2>dashboard</h2>
            <Footer/>
        </Fragment>
    );
}

export default Dashboard;