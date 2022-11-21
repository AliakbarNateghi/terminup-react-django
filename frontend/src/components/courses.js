import React, { Component }  from 'react';
import { useState } from "react";
import PropTypes from 'prop-types'
import Course from "./course";
import Select from 'react-select'
import Square from './label';

const Courses = ({courses}) => {
  // console.log('courses :', courses);
  return(
    <>
      {/* {courses.map(course => console.log('course :', course))} */}
      {courses.map(courseItem => <Square key={courseItem.id} course={courseItem} />)}
    </>
  )
}

Courses.prototype = {
  courses: PropTypes.object,
}

Courses.defaultProps = {
  courses: [[]]
}

export default Courses;