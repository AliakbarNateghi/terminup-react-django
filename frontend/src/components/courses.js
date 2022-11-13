import React, { Component }  from 'react';
import { useState } from "react";
import PropTypes from 'prop-types'
import Course from "./course";
import Select from 'react-select'
import Square from './label';

const Courses = ({courses}) => {
  // console.log('courses :', courses);
  return(
    <div>
      {/* {courses.map(course => console.log('course :', course))} */}
      {courses.map(courseItem => <Square key={courseItem.id} course={courseItem} />)}
    </div>
  )
}

Courses.prototype = {
  courses: PropTypes.object,
}

Courses.defaultProps = {
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

export default Courses;