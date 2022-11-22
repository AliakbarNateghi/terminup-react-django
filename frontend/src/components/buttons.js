import PropTypes from "prop-types";
import React, { Component }  from 'react';

const Button = ({color, text, onClick, onMouseOver, onMouseOut}) =>
{
    return <div><button onClick={onClick}
                   className='btn'
                   style={{color: 'black',
                           backgroundColor: color,
                           fontSize: '10px',
                           width: '95%',
                           height: '8%',
                           border: '0.01px solid black',}}
                   onMouseOver={onMouseOver}
                   onMouseOut={onMouseOut}>{text}</button></div>
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