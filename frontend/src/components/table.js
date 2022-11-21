import React, { Component }  from 'react';
import { useState, useEffect} from "react";
import PropTypes from 'prop-types'
import Test from "./test";
import '../table.css'
import Square from './label';
import Hours from './hours';
import Days from './days';
import Border from './border';

const Customtable = ({courses, temporaryCourses, deleteCourses, onMouseOver}) => {

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
            {courses.map(courseItem => <Square key={courseItem.id} course={courseItem} backgroundColor={courseItem.color} onMouseOver={onMouseOver}/>)}
            {/* 'rgba(52, 52, 52, 0.5)' */}
            {temporaryCourses.map(courseItem => <Square key={courseItem.id} course={courseItem} backgroundColor={courseItem.color} onMouseOver={onMouseOver}/>)}
            {deleteCourses.map(courseItem => <Square key={courseItem.id} course={courseItem} backgroundColor={courseItem.color} onMouseOver={onMouseOver}/>)}
            <Border />
        </div>           
      </>
  )
}

Customtable.prototype = {
  courses: PropTypes.object,
  temporaryCourses: PropTypes.object,
  deleteCourses: PropTypes.object,
}

Customtable.defaultProps = {
  courses: [],
  temporaryCourses: [],
  deleteCourses: [],
}

export default Customtable;