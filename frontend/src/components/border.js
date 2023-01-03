import React, { Component }  from 'react';
import { useState, useEffect} from "react";
import PropTypes from 'prop-types'
import { Divider } from 'antd'

const Border = () => {

    const ulStyle = {
        listStyle: 'none',
        display: 'grid',
        paddingTop: '27.5px',
    }

    const liStyle = {

    }

    const dividerStyle = {
        paddingTop: '0.5%',
    }

    return (
        <div>
            <ul style={ulStyle}>
                <li style={liStyle}><Divider style={dividerStyle}/></li>
                <li style={liStyle}><Divider style={dividerStyle}/></li>
                <li style={liStyle}><Divider style={dividerStyle}/></li>
                <li style={liStyle}><Divider style={dividerStyle}/></li>
                <li style={liStyle}><Divider style={dividerStyle}/></li>
                <li style={liStyle}><Divider style={dividerStyle}/></li>
                <li style={liStyle}><Divider style={dividerStyle}/></li>
                <li style={liStyle}><Divider style={dividerStyle}/></li>
                <li style={liStyle}><Divider style={dividerStyle}/></li>
                <li style={liStyle}><Divider style={dividerStyle}/></li>
                <li style={liStyle}><Divider style={dividerStyle}/></li>
                <li style={liStyle}><Divider style={dividerStyle}/></li>
                <li style={liStyle}><Divider style={dividerStyle}/></li>
            </ul>
        </div>
    )
}

export default Border