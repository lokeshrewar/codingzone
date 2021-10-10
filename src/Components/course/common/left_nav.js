import React, { useState, useEffect } from 'react';


const LeftNav = (props) => {

    useEffect(() => {

    }, [])

    return (
        <div>
            <div className="vertical-menu">
                <nav className="navbar navbar-default">
                    <div className="navbar-sidebar">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mysidebar">
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="mysidebar">
                        
                        <a href="c1.html" className="active">Introduction of C</a>
                        <a href="c2.html">Header files</a>
                        <a href="c3.html">Hello world</a>
                        <a href="c4.html">Print integer</a>
                        <a href="c5.html">Add two numbers</a>
                        <a href="c6.html">Odd or even</a>
                        <a href="c7.html">Add sub mul and divide</a>
                        <a href="c8.html">Add n numbers</a>
                        <a href="c9.html">Add digits</a>
                        <a href="c10.html">Greatest of 3 numbers</a>
                        <a href="c11.html">Swapping two numbers</a>
                        <a href="c12.html">Nested If Else</a>
                        <a href="c13.html">nCr and nPr</a>
                        <a href="c14.html">Area of triangle</a>
                        <a href="c15.html">Reverse number</a>
                        <a href="c16.html">Leap year</a>
                        <a href="c17.html">Check vowel</a>
                        <a href="c18.html">Fibonacci series</a>
                        <a href="c19.html">Palindrome number</a>
                        <a href="c20.html">Calculate percentage</a>
                        <a href="c21.html">Calculate gross salary</a>
                        <a href="c22.html">Simple interest</a>
                        <a href="c23.html">Area of circle</a>
                        <a href="c24.html">Area of ractangle</a>
                        <a href="c25.html">Area of square</a>
                        <a href="c26.html">Volume of cube</a>
                        <a href="c27.html">Volume of cylinder</a>
                        <a href="c28.html">Volume of sphere</a>
                        <a href="c29.html">HCF and LCM</a>
                        <a href="c30.html">Reverse number using array</a>

                    </div>
                </nav>
            </div>

        </div>
    );
}

export default LeftNav;



