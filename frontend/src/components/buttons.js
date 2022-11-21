import PropTypes from "prop-types";
import React, { Component }  from 'react';

const Button = ({color, text, onClick, onMouseOver, onMouseOut}) =>
{
    return <button onClick={onClick}
                   className='btn'
                   style={{backgroundColor: color, fontSize: '10px', fontStyle: ''}}
                   onMouseOver={onMouseOver}
                   onMouseOut={onMouseOut}>{text}</button>
}

Button.defaultProps = {
        color: 'steelblue',
    }

Button.propTypes = {
        text: PropTypes.string,
        color: PropTypes.string,
        onClick: PropTypes.func,
    }

export default Button