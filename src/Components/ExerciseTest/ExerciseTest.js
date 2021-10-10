
import React, { useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import './ExerciseTest.css'


const ExerciseTest = (props) => {

    const [finalpage, setFinalpage] = useState(false)
    return (
        <div>
           <Header/>
           <div className="main-wrap11">
                <div className="container-fluid bg-transparent-one11">
                    <div className="row">
                        <div className="col-lg-3 center-full-height11">
                            <div className="px-5 mx-auto">
                                <h3 className="text-white">Your Voice, Our Panel, Better Brands!</h3>
                                <p className="text-white">"Making your opinion count has never been easier! We are here to help build a better brand experience with 'Your Opinion' for 'You'. The Panel Station is a diverse community with 5.11 million consumers from over 35 fastest growing economies around the globe."</p>
                            </div>
                        </div>
                        <div className="col-lg-9 py-5 center-full-height11 text-white">
                            {/* <div className="row"> */}
                      {finalpage == false && 
                                <div className="card col-lg-10 col-md-10 mx-auto px-4 bg-new11">
                                    <div style={{ clear: "both" }}>
                                        <h5 style={{ color: "white", display: "inline", float: "left", textTransform: "capitalize" }}>heading</h5>
                                        <h6 style={{ color: "white", textAlign: "right", display: "inline", float: "right" }}>1 - 1</h6>
                                    </div>

                                    <div className="container container11 py-3" style={{ minHeight: "400px" }}>
                                      
                                            <form className="row">
                                                <div className="col-lg-12"><h6 style={{ textTransform: "capitalize" }} className="mb-0 text-white ">
                                                    <strong> </strong> this is the question ?</h6></div>
                                                <hr></hr>
                                                <hr></hr>
                                                <div className="col-lg-12 mt-3 optionSection"  >
                                               
                                                   
                                               
                                            
                                        
                                              
                                                  
                                                            {/* <div className="form-check mb-4" >
                                                                <label className="form-check-label">
                                                                    <input type="checkbox" name="checkbox" value="option1" className="form-check-input" />
                                                                    <mediam style={{ textTransform: "capitalize", color: "white" }}>option1"</mediam>
                                                              
                                                                        <textarea type="text" maxlength="255" className="form-control col-md-10" value="option1" row="2" placeholder="Enter Here ..."></textarea>
                                                              
                                                                </label>
                                                            </div>
                                                  */}
                                                 
                            


                                                </div>

                                            </form>
                    

                                    </div>

                                    <div className="card-footer">
                                        <div className="progress mt-0 mb-3" style={{ border: "3px solid", backgroundColor: "gray" }}>
                                            <div className="progress-bar" style={{ width: `${100 / 10 * (1 + 1)}%` }}></div>
                                        </div>
                                        <button  className="btn btn-default bg-white float-left"  ><i className="fa fa-angle-left ml-2"></i> Previous</button>
                                        <button  className="btn btn-default bg-white float-right"  >Next<i className="fa fa-angle-right ml-2"></i></button>
                                    </div>

                                </div>
                                }
                          {finalpage==true && 
                                
                                <>

                               

                                    <div className="card col-lg-10 col-md-10 mx-auto px-4 bg-new11 text-white">
                                        <div className="container py-5">
                                            <div className="row">
                                                {loader == true ?
                                                    <div className="container text-center mt-5">
                                                
                                                    </div>
                                                    : <>
                                                        <div className="col-lg-12"><h6 className="mb-4"><strong> </strong> </h6></div>
                                                        <div className="col-lg-12">

                                                            <div className="" style={{ height: "300px" }}>
                                                                <div className="">
                                                                    <h5 className="text-white text-center text-capitalize">{type}</h5>
                                                                </div>
                                                                <div className="text-white text-center">
                                                                    <h4 className="text-white mt-4">Thank you !</h4>
                                                                </div>
                                                                <div className="d-flex flex-row justify-content-between align-items-center">

                                                                    <button className="btn btn-primary d-block mx-auto mt-5"  type="button">
                                                                        Finish to Submit </button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </>}
                                            </div>

                                        </div>

                                    </div>
                                </>}
                        </div>
                

                    </div>
                </div>
            </div>

           <Footer/>
        </div>
    );
}

export default ExerciseTest;