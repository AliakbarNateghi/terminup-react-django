import React, { Component }  from 'react';
import { useState, useEffect} from "react";
import PropTypes from 'prop-types'

const Border = () => {

    const ulStyle = {
        listStyle: 'none',
        display: 'grid',
        lineHeight: '350%',
        paddingTop: '27.5px',
    }

    const liStyle = {
        color: 'lightGrey',
    }

    return (
        <div>
            {/* <ul style={ulStyle}>
                <li style={liStyle}>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</li>
                <li style={liStyle}>-------------------------------------------------------------------------------------------------------------------------------------------------------------------</li>
                <li style={liStyle}>-------------------------------------------------------------------------------------------------------------------------------------------------------------------</li>
                <li style={liStyle}>-------------------------------------------------------------------------------------------------------------------------------------------------------------------</li>
                <li style={liStyle}>-------------------------------------------------------------------------------------------------------------------------------------------------------------------</li>
                <li style={liStyle}>-------------------------------------------------------------------------------------------------------------------------------------------------------------------</li>
                <li style={liStyle}>-------------------------------------------------------------------------------------------------------------------------------------------------------------------</li>
                <li style={liStyle}>-------------------------------------------------------------------------------------------------------------------------------------------------------------------</li>
                <li style={liStyle}>-------------------------------------------------------------------------------------------------------------------------------------------------------------------</li>
                <li style={liStyle}>-------------------------------------------------------------------------------------------------------------------------------------------------------------------</li>
                <li style={liStyle}>-------------------------------------------------------------------------------------------------------------------------------------------------------------------</li>
                <li style={liStyle}>-------------------------------------------------------------------------------------------------------------------------------------------------------------------</li>
                <li style={liStyle}>-------------------------------------------------------------------------------------------------------------------------------------------------------------------</li>
            </ul> */}
        </div>
    )
}

export default Border