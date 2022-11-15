import React, { Component }  from 'react';
import { useState, useEffect} from "react";
import PropTypes from 'prop-types'

const Hours = () => {

    const hoursStyle = {
        float: 'right',
        marginRight: '20%',
    }

    const ulStyle = {
        listStyle: "none",
        display:'grid',
        float:'right',
        marginRight: '1%',
        paddingTop: '27.5px',
        lineHeight:'350%',
    }
    
    return (
        <div>
            <ul style={ulStyle}>
                <li style={hoursStyle}>7</li>
                <li style={hoursStyle}>8</li>
                <li style={hoursStyle}>9</li>
                <li style={hoursStyle}>10</li>
                <li style={hoursStyle}>11</li>
                <li style={hoursStyle}>12</li>
                <li style={hoursStyle}>13</li>
                <li style={hoursStyle}>14</li>
                <li style={hoursStyle}>15</li>
                <li style={hoursStyle}>16</li>
                <li style={hoursStyle}>17</li>
                <li style={hoursStyle}>18</li>
                <li style={hoursStyle}>19</li>
                <li style={hoursStyle}>20</li>
            </ul>
        </div>
    )
}

export default Hours