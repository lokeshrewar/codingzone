import React, { useState, useEffect } from 'react';

const MainArea = (props) => {
    const { cData } = props



    useEffect(() => {

    }, [])

    return (
        <div>
            {cData && cData.map((c, index) => (
                <div>
                    {c.nav_button_name == "variable in c" &&
                        <div>
                            <center><h3>{c.heading}</h3></center>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item1">
                                        <a className="page-link" href="#" tabindex="-1" aria-disabled="false">Previous</a>
                                    </li>

                                    <li className="page-item2">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                            <p>{c.description}</p>
                            <h5 className="outputtitle">Code:-</h5>
                            <div className="description">
                                <p>{c.code}</p>

                            </div>
                            <h5 className="outputtitle">Output:-</h5>
                            <div className="outputdisplay">

                                <p>{c.output}</p>

                            </div>
                        </div>
                    }
                </div>
            ))}

        </div>
    );
}

export default MainArea;



