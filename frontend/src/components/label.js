import React, { Component }  from 'react';
import { useState, useEffect} from "react";
import PropTypes, { number } from 'prop-types';
import {FaTimes} from 'react-icons/all';

const Square = ({course, backgroundColor, onClickFa, onMouseOverFa}) => {

    const [check, setCheck] = useState(false);

    let mouseOver = false;
    console.log('mouseOver :', mouseOver);

    function onMouseOverSquare() {
        setCheck(prevCheck => !prevCheck);
    }

    function onMouseOutSquare() {
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
            let d2 = 60- course.day2 * 15

            let LH2;
            if(course.time2 <= 1) {
                LH2 = 100
            }else if(course.time2 > 1 && course.time2 <= 1.5) {
                LH2 = 150
            }else{
                LH2 = 200
            }

            return (
                <div onMouseOver={onMouseOverSquare()} onMouseOut={onMouseOutSquare()}>
                    <div style={{
                        position: 'fixed',
                        backgroundColor: backgroundColor,
                        border: '0.01px solid black',
                        width: '15%',
                        height: `${h1}px`,
                        marginTop: `${s1}px`,
                        marginLeft: `${d1}%`,
                        borderRadius: '7px',
                        lineHeight: `${LH1}%`,
                        cursor: 'pointer',
                        }}>
                        
                        <h4 style={hFourStyle}>{course.code}</h4>
                        <h3 style={hThreeStyle}>
                            {course.title}
                            {check ? <FaTimes onMouseOver={onMouseOverFa} onClick={onClickFa} style={{color: 'red', cursor: 'pointer' }}/> : <></>}
                        </h3>
                        <h4 style={hFourStyle}>{course.professor}</h4>

                    </div>
                    <div style={{
                        position: 'fixed',
                        backgroundColor: backgroundColor,
                        border: '0.01px solid black',
                        width: '15%',
                        height: `${h2}px`,
                        marginTop: `${s2}px`,
                        marginLeft: `${d2}%`,
                        borderRadius: '7px',
                        lineHeight: `${LH2}%`,
                        cursor: 'pointer',
                        }}>

                        <h4 style={hFourStyle}>{course.code}</h4>
                        <h3 style={hThreeStyle}>
                            {course.title}
                            {check ? <FaTimes onMouseOver={onMouseOverFa} onClick={onClickFa} style={{color: 'red', cursor: 'pointer' }}/> : <></>}
                        </h3>
                        <h4 style={hFourStyle}>{course.professor}</h4>
                        
                    </div>
                </div>
            )
        }else{
            return (
                <>
                    <div style={{
                        position: 'fixed',
                        backgroundColor: backgroundColor,
                        border: '0.01px solid black',
                        width: '15%',
                        height: `${h1}px`,
                        marginTop: `${s1}px`,
                        marginLeft: `${d1}%`,
                        borderRadius: '7px',
                        lineHeight: `${LH1}%`,
                        cursor: 'pointer',
                        }}>

                        <h4 style={hFourStyle}>{course.code}</h4>
                        <h3 style={hThreeStyle}>
                            {course.title}
                            {check ? <FaTimes onMouseOver={onMouseOverFa} onClick={onClickFa} style={{color: 'red', cursor: 'pointer' }}/> : ''}
                        </h3>
                        <h4 style={hFourStyle}>{course.professor}</h4>

                    </div>
                </>
            )
        }}
}


// Square.prototype = {
//   course: PropTypes.object,
// }

// Square.defaultProps = {
//   course: {
//     value: '',
//     id: '',
//     label: '',
//     user: '',
//     college: '',
//     ws: '',
//     examDate: '',
//     title: '',
//     professor: '',
//     group: '',
//     unit: '',
//     code: '',
//     capacity: '',
//     requirement: '',
//     synthesis: '',
//     ps: '',
//     edId: '',
//     date: '',
//     start: '',
//     wsId: '',
//     day1: '',
//     time1: '',
//     start1: '',
//     day2: '',
//     time2: '',
//     start2: '',
//   }
// }

export default Square;