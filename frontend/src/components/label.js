import React, { Component }  from 'react';
import { useState, useEffect} from "react";
import PropTypes, { func, number } from 'prop-types';
import {FaTimes} from 'react-icons/fa';

const Square = ({course, backgroundColor, onClickFa, onMouseOverFa, onMouseOutFa}) => {

    const [check, setCheck] = useState(false);

    const onMouseOverSquare = () => {
        setCheck(prevCheck => !prevCheck);
    }

    const onMouseOutSquare = () => {
        setCheck(prevCheck => !prevCheck);
    }

    const hThreeStyle = {
        textAlign: 'center',
        fontSize: '14px',
    }

    const hFourStyle = {
        textAlign: 'center',
        fontSize: '10px',
    }

    if(course.day1 != null){    
        let h1 = 55.5 * course.time1
        let s1 = (course.start1 - 7) * 56 - 1
        let d1 = 60 - course.day1 * 15

        let LH1;
        if(course.time1 <= 1) {
            LH1 = 100
        }else if(course.time1 > 1 && course.time1 <= 1.5) {
            LH1 = 150
        }else{
            LH1 = 200
        }

        if(course.day2 != null) {
            let h2 = 55.5 * course.time2
            let s2 = (course.start2 - 7) * 56 - 1
            let d2 = 60 - course.day2 * 15

            let LH2;
            if(course.time2 <= 1) {
                LH2 = 100
            }else if(course.time2 > 1 && course.time2 <= 1.5) {
                LH2 = 150
            }else{
                LH2 = 200
            }

            return (
                <div>
                    <div onMouseOver={onMouseOverSquare} onMouseOut={onMouseOutSquare} style={{
                        position: 'absolute',
                        backgroundColor: backgroundColor,
                        border: '0.01px solid black',
                        width: '15%',
                        height: `${h1}px`,
                        marginTop: `${s1}px`,
                        marginLeft: `${d1}%`,
                        borderRadius: '7px',
                        lineHeight: `${LH1}%`,
                        cursor: 'default',
                        }}>
                        <h3>
                            {check ? <FaTimes onMouseOver={onMouseOverFa}
                                              onMouseLeave={onMouseOutFa}
                                              onClick={onClickFa}
                                              style={{color: '#C21010',
                                                      cursor: 'pointer',
                                                      position: 'absolute'}}/> : <></>}
                        </h3>
                        <h4 style={hFourStyle}>{course.code}</h4>
                        <h3 style={hThreeStyle}>
                            {course.title}
                        </h3>
                        <h4 style={hFourStyle}>{course.professor}</h4>
                    </div>
                    <div onMouseOver={onMouseOverSquare} onMouseOut={onMouseOutSquare} style={{
                        position: 'absolute',
                        backgroundColor: backgroundColor,
                        border: '0.01px solid black',
                        width: '15%',
                        height: `${h2}px`,
                        marginTop: `${s2}px`,
                        marginLeft: `${d2}%`,
                        borderRadius: '7px',
                        lineHeight: `${LH2}%`,
                        cursor: 'default',
                        }}> 
                        <h3>
                            {check ? <FaTimes onMouseOver={onMouseOverFa}
                                              onMouseLeave={onMouseOutFa}
                                              onClick={onClickFa}
                                              style={{color: '#C21010',
                                                      cursor: 'pointer',
                                                      position: 'absolute'}}/> : <></>}
                        </h3>
                        <h4 style={hFourStyle}>{course.code}</h4>
                        <h3 style={hThreeStyle}>
                            {course.title}
                        </h3>
                        <h4 style={hFourStyle}>{course.professor}</h4>                     
                    </div>
                </div>
            )
        }else{
            return (
                <div>
                    <div className='additional'>
                        
                    </div>
                    <div onMouseOver={onMouseOverSquare} onMouseOut={onMouseOutSquare} style={{
                        position: 'absolute',
                        backgroundColor: backgroundColor,
                        border: '0.01px solid black',
                        width: '15%',
                        height: `${h1}px`,
                        marginTop: `${s1}px`,
                        marginLeft: `${d1}%`,
                        borderRadius: '7px',
                        lineHeight: `${LH1}%`,
                        cursor: 'default',
                        }}>      
                        <h3>
                            {check ? <FaTimes onMouseOver={onMouseOverFa}
                                              onMouseLeave={onMouseOutFa}
                                              onClick={onClickFa}
                                              style={{color: '#C21010',
                                                      cursor: 'pointer',
                                                      position: 'absolute'}}/> : <></>}
                        </h3>
                        <h4 style={hFourStyle}>{course.code}</h4>
                        <h3 style={hThreeStyle}>
                            {course.title}
                        </h3>
                        <h4 style={hFourStyle}>{course.professor}</h4>
                    </div>
                </div>
            )
        }}
}


Square.prototype = {
  course: PropTypes.object,
}

Square.defaultProps = {
  course: {}
}

export default Square;