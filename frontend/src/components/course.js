import React, { Component }  from 'react';
import { useState } from "react";
import PropTypes from 'prop-types'

const Course = ({course, onShowTable}) => {
    return(
          <>
              <li>{course.user}</li>
              <li>{course.college}</li>
              <li>{course.ws}</li>
              <li>{course.examDate}</li>
              <option onClick={onShowTable}>{course.title}</option>
              <li>{course.professor}</li>
              <li>{course.group}</li>
              <li>{course.unit}</li>
              <li>{course.code}</li>
              <li>{course.capacity}</li>
              <li>{course.requirement}</li>
              <li>{course.synthesis}</li>
              <li>{course.ps}</li>
          </>
  )
}

Course.prototype = {
    course: PropTypes.object,
}

export default Course;