import React, { Component }  from 'react';
import { useState, useEffect} from "react";
import PropTypes from 'prop-types'
import Test from "./test";
import '../table.css'
import Square from './label';

const Hours = () => {

    const hoursStyle = {
        // paddingRight: '-10%',
        // width: '2%',
        float: 'right',
        marginRight: '20%',
    }
    
    return (
        <div style={{}}>
            <ul style={{listStyle: "none",
                        display:'grid',
                        float:'right',
                        paddingTop: '2.55%',
                        lineHeight:'375%'}}>
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