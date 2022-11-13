import React, { Component }  from 'react';
import { useState, useEffect} from "react";
import PropTypes, { number } from 'prop-types';
import {FaTimes} from 'react-icons/all';

const Square = ({course}) => {
    // console.log('course in square :', course);

    let h1 = 50 * course.time1
    let s1 = (course.start1 - 7) * 7
    let d1 = course.day1 * 15
    if(course.day2 != null) {
        let h2 = 7 * course.time2
        let s2 = (course.start2 - 7) * 7
        let d2 = course.day2 * 15
        // console.log('course :', course);
        return (
            <div>
                <div style={{backgroundColor: 'lightGreen',
                            border: '1px solid black',
                            width: '15%',
                            height: `${h1}px`,
                            marrginTop: `${s1}%`}}>
                    <h3>
                        {course.title}
                        <FaTimes style={{color: 'red', cursor: 'pointer' }}/>
                    </h3>
                </div>
                {/* <div>
                    <h3>
                        {course.title}
                        <FaTimes style={{color: 'red', cursor: 'pointer' }}/>
                    </h3>
                </div> */}
            </div>
        )
    }else{
        return (
            <div>
                
            </div>
        )
    }
}

{/* <div style={{
            width: '15%',
            height: `${h1}%`,
            marginTop: `${s1}%`,
            marginRight: `${d1}%`,
            backgroundColor: 'cyan',
            }}>
                course.day1
</div>
<div style={{
            width: '15%',
            height: `${h2}%`,
            marginTop: `${s2}%`,
            marginRight: `${d2}%`,
            backgroundColor: 'cyan',
            }}>
                course.day2
</div> */}

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