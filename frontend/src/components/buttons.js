import PropTypes from "prop-types";
import React, { Component }  from 'react';

const Button = ({courseItem, color, text, onClick, onMouseOver, onMouseOut}) =>
{
    return <button onMouseOut={onMouseOut} onClick={onClick} onMouseOver={onMouseOver} value={courseItem}
                        className='btn'
                        style={{color: 'black',
                                backgroundColor: color,
                                fontSize: '10px',
                                width: '95%',
                                height: '35px',
                                border: '0.01px solid black',
                            }}>{text}</button>
}

Button.defaultProps = {
        color: 'steelblue',
    }

Button.propTypes = {
        text: PropTypes.string,
        color: PropTypes.string,
        onClick: PropTypes.func,
        onMouseOut: PropTypes.func,
        onMouseOver: PropTypes.func,
    }

export default Button