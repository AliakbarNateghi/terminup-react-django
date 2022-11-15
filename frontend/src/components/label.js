import React, { Component }  from 'react';
import { useState, useEffect} from "react";
import PropTypes, { number } from 'prop-types';
import {FaTimes} from 'react-icons/all';

const Square = ({course}) => {
    // console.log('square :', course.start1);

    let h1 = 55.5 * course.time1
    let s1 = (course.start1 - 7) * 56 - 1
    let d1 = 60 - course.day1 * 15
    if(course.day2 != null) {
        let h2 = 55.5 * course.time2
        let s2 = (course.start2 - 7) * 56 - 1
        let d2 = 60- course.day2 * 15
        // console.log('course :', course);
        return (
            <>
                <div style={{
                    position: 'fixed',
                    backgroundColor: 'lightGreen',
                    border: '0.01px solid black',
                    width: '15%',
                    height: `${h1}px`,
                    marginTop: `${s1}px`,
                    marginLeft: `${d1}%`,
                    borderRadius: '7px',
                    }}>
                    <h3>
                        {course.title}
                        {/* <FaTimes style={{color: 'red', cursor: 'pointer' }}/> */}
                    </h3>
                </div>
                <div style={{
                    position: 'fixed',
                    backgroundColor: 'lightGreen',
                    border: '0.01px solid black',
                    width: '15%',
                    height: `${h2}px`,
                    marginTop: `${s2}px`,
                    marginLeft: `${d2}%`,
                    borderRadius: '7px',
                    }}>
                    <h3>
                        {course.title}
                        {/* <FaTimes style={{color: 'red', cursor: 'pointer' }}/> */}
                    </h3>
                </div>
            </>
        )
    }else{
        return (
            <>
                <div style={{
                    position: 'fixed',
                    backgroundColor: 'lightGreen',
                    border: '0.01px solid black',
                    width: '15%',
                    height: `${h1}px`,
                    marginTop: `${s1}px`,
                    marginLeft: `${d1}%`,
                    borderRadius: '7px',
                    }}>
                    <h3>
                        {course.title}
                        {/* <FaTimes style={{color: 'red', cursor: 'pointer' }}/> */}
                    </h3>
                </div>
            </>
        )
    }
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