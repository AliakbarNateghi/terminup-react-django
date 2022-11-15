import React, { Component }  from 'react';
import { useState, useEffect} from "react";
import PropTypes from 'prop-types'

const Days = () => {
    const weekDaysStyle = {
        textAlign: 'center',
        display: 'inline-block',
        borderRight: '1px solid black',
        borderBottom: '0.01px solid black',
        width: '20%',
        height: '100%',
        fontSize: '110%',
        backgroundColor: '#373a47',
        color: 'white',
    }

    return (
        <ul>
            <li style={weekDaysStyle}>چهارشنبه</li>
            <li style={weekDaysStyle}>سه شنبه</li>
            <li style={weekDaysStyle}>دوشنبه</li>
            <li style={weekDaysStyle}>یکشنبه</li>
            <li style={weekDaysStyle}>شنبه</li>
        </ul>
    )
}

export default Days