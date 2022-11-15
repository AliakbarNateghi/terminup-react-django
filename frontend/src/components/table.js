import React, { Component }  from 'react';
import { useState, useEffect} from "react";
import PropTypes from 'prop-types'
import Test from "./test";
import '../table.css'
import Square from './label';
import Hours from './hours';
import Days from './days';
import Border from './border';

const Customtable = ({courses}) => {
  
  // console.log('courses :', courses)

  const divStyle = {
    float:'right',
    lineHeight:'350%',
    marginRight: '0.5%',
    border: '1px solid #373a47',
    width:'75%',
    height: '800px',
    textAlign: 'right'}
    
  return(
      <>
        <Hours />
        <div style={divStyle}>  
            <Days />
            {courses.map(courseItem => <Square key={courseItem.id} course={courseItem} />)}
            <Border />
        </div>           
      </>
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