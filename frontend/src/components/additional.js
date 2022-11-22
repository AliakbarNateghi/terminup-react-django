import React, { Component }  from 'react';
import { useState, useEffect} from "react";
import PropTypes, { func, number } from 'prop-types';

const Additional = ({course, backgroundColor}) => {

    return (
        <div className='additional' style={{
                position: 'fixed',
                backgroundColor: backgroundColor,
                border: '0.01px solid black',
            }}>
            <p>course.title</p>
            <p>course.group</p>
            <p>course.unit</p>
            <p>course.capacity</p>
            <p>course.examDate</p>
            <p>course.requirement</p>
            <p>course.synthesis</p>
            <p>course.ps</p>
        </div>
    )
}

Additional.prototype = {
  course: PropTypes.object,
  backgroundColor: PropTypes.string,
}

Square.defaultProps = {
  Additional: {}
}

export default Additional