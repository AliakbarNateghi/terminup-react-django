import React, { Component }  from 'react';
import { useState, useEffect} from "react";
import PropTypes from 'prop-types'
import Test from "./test";
import '../table.css'

const Customtable = () => {
    const weekDaysStyle = {
        textAlign: 'center',
        display: 'inline-block',
        borderRight: '1px solid black',
        borderBottom: '1px solid black',
        width: '20%',
        height: '100%',
        fontSize: '110%',
        backgroundColor: '#373a47',
        color: 'white',
    }

    const hoursStyle = {
        marginRight: '-2%',
    }
    return(
        <div style={{paddingTop: '0%'}}>
            <div style={{float:'right',
                lineHeight:'350%',
                marginRight: '2.5%',
                border: '1px solid #373a47',
                width:'75%',
                height: '91%',
                textAlign: 'right'}}>
                <ul style={{listStyle: "none", display:'grid'}}>
                    <li>
                        <ul>
                            <li style={weekDaysStyle}>چهارشنبه</li>
                            <li style={weekDaysStyle}>سه شنبه</li>
                            <li style={weekDaysStyle}>دوشنبه</li>
                            <li style={weekDaysStyle}>یکشنبه</li>
                            <li style={weekDaysStyle}>شنبه</li>
                        </ul>
                    </li>
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
        </div>
    )
}

export default Customtable;