
import React, { useState } from 'react';
import Header from '../header';
import Footer from '../footer';

const Adminpannel = (props) => {
    return (
        <div>
            <Header />

            <h3>Admin page</h3>


            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-12">

                    </div>
                    <div className="col-md-7 col-sm-6 col-12">
                        <form>
                            <label for="Language">Language</label>
                            <select name="Language" id="Language">
                                <option value="select">--Select any language--</option>
                                <option value="c">C</option>
                                <option value="c++">C++</option>
                                <option value="java">Java</option>
                                <option value="computer">Computer</option>
                                <option value="javascript">Javascript</option>
                                <option value="html">Html</option>
                                <option value="css">Css</option>
                                <option value="php">Php</option>
                                <option value=".net">.Net</option>
                                <option value="howto">Howto</option>
                                <option value="bootstrap">Bootstrap</option>
                                <option value="microsoft office">Microsoft office</option>
                                <option value="my sql">My Sql</option>
                                <input type="Submit"></input>
                            </select>

                            <br></br>
                            <label for="Heading">Menu Heading</label>
                            <input type="text"></input>
                            <br></br>
                            <label for="Heading">Heading</label>
                            <input type="text"></input>
                            <br></br>
                            <label for="discription">Discription:</label>
                            <input type="text"></input>
                            <br></br>
                            <label for="code">Code:</label>
                            <input type="text"></input>
                            <br></br>
                            <br></br>
                            <input className="btn btn-primary" type="Submit"></input>
                            <br></br>
                            <br></br>
                            <input className="btn btn-primary" type="Submit" value="Clear"></input>
                            <br></br>
                            <br></br>

                            <input className="btn btn-primary" type="Submit" value="All Blogs"></input>

                        </form>
                    </div>
                    <div className="col-md-2 col-sm-6 col-12">

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Adminpannel;