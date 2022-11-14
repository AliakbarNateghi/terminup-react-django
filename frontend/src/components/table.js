import React, { Component }  from 'react';
import { useState, useEffect} from "react";
import PropTypes from 'prop-types'
import Test from "./test";
import '../table.css'
import Square from './label';
import Hours from './hours';

const Customtable = ({courses}) => {
    const weekDaysStyle = {
        textAlign: 'center',
        display: 'inline-block',
        borderRight: '1px solid black',
        borderBottom: '1px solid black',
        width: '20%',
        height: '100%',
        fontSize: '110%',
        backgroundColor: '#373a47',
        color: 'white',
    }
    
    return(
        <div>
            <Hours />
            <div style={{float:'right',
                lineHeight:'350%',
                marginRight: '2.5%',
                border: '1px solid #373a47',
                width:'75%',
                height: '91%',
                textAlign: 'right'}}>
                <ul>
                    <li style={weekDaysStyle}>چهارشنبه</li>
                    <li style={weekDaysStyle}>سه شنبه</li>
                    <li style={weekDaysStyle}>دوشنبه</li>
                    <li style={weekDaysStyle}>یکشنبه</li>
                    <li style={weekDaysStyle}>شنبه</li>
                </ul>
                
                {courses.map(courseItem => <Square key={courseItem.id} course={courseItem} />)}
            </div>           
        </div>
    )
}

Customtable.prototype = {
  courses: PropTypes.object,
}

Customtable.defaultProps = {
  courses: [{
    value: '',
    id: '',
    label: '',
    user: '',
    college: '',
    ws: '',
    examDate: '',
    title: '',
    professor: '',
    group: '',
    unit: '',
    code: '',
    capacity: '',
    requirement: '',
    synthesis: '',
    ps: '',
    edId: '',
    date: '',
    start: '',
    wsId: '',
    day1: '',
    time1: '',
    start1: '',
    day2: '',
    time2: '',
    start2: '',
  }]
}

export default Customtable;