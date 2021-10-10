
import React, { Component, Suspense, useEffect, useState } from 'react';
import './App.css';
import { HashRouter, Switch, Route, useHistory, useLocation, Redirect } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getLocalDataAsObject } from './utils/CoustomStorage';
import Home from './Components/home';
import C from './Components/course/c';
import Css from './Components/course/css';
import Php from './Components/course/php';
import Html from './Components/course/html';
import Java from './Components/course/java';
import Cplus from './Components/course/c++';
import Howto from './Components/course/howto';
import Mysql from './Components/course/mysql';
import Dotnet from './Components/course/dotnet';
import Computer from './Components/course/computer';
import Bootstrap from './Components/course/bootstrap';
import Javascript from './Components/course/javascript';
import Loginpage from './Components/Adminpannel/Loginpage';
import Adminpannel from './Components/Adminpannel/Adminpannel';
import ExerciseTest from './Components/ExerciseTest/ExerciseTest';
import Microsoftoffice from './Components/course/microsoftoffice';

const App = (props) => {
  
  const history = useHistory();
  
  const Dashboard = React.lazy(() => import('./Components/dashboard/dashboard'));
  
  
  // if (Token) {
    
    return (

      <HashRouter>
        <ToastContainer />
        <Suspense fallback={

          <Loader type="Oval" color="#00BFFF" height={80} width={80} timeout={3000} />
        }>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/html" component={Html} />
            <Route path="/java" component={Java} />
            <Route path="/c" component={C} />
            <Route path="/c++" component={Cplus} />
            <Route path="/computer" component={Computer} />
            <Route path="/javascript" component={Javascript} />
            <Route path="/php" component={Php} />
            <Route path="/dotnet" component={Dotnet} />
            <Route path="/howto" component={Howto} />
            <Route path="/css" component={Css} />
            <Route path="/bootstrap" component={Bootstrap} />
            <Route path="/microsoftoffice" component={Microsoftoffice} />
            <Route path="/mysql" component={Mysql} />
            <Route path="/exercise-test" component={ExerciseTest} />
            <Route path="/loginpage" component={Loginpage} />
            <Route path="/adminpannel" component={Adminpannel} />
            <Route path="/" component={Home} />

            <Route render={() => (<Redirect to='/dashboard' />)} />
          </Switch>


        </Suspense>
      </HashRouter>
    );
  // } 

  // else {
  //   return (

  //     <HashRouter>
  //       <ToastContainer />
  //       <Suspense fallback={

  //         <Loader type="Oval" color="#00BFFF" height={80} width={80} timeout={3000} />
  //       }>
  //         <Switch> 
  //           <Route exact path="/login" name="login" component={(props) => <LoginCard {...props} />} />
  //           <Route render={() => (<Redirect to='/' />)}/>
  //         </Switch>
  //       </Suspense>
  //     </HashRouter>
  //   );
  // }
  
}

export default App;
