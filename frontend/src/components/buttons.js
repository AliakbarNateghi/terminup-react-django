import PropTypes from "prop-types";
import React, { Component }  from 'react';

const Button = ({color, text, onClick, onMouseOver, onMouseOut, disable}) =>
{
    return <button onClick={onClick}
                   className='btn'
                   style={{backgroundColor: color}}
                   onMouseOver={onMouseOver}
                   onMouseOut={onMouseOut}>{text}</button>
}

Button.defaultProps = {
        color: 'steelblue',
        text: 'هنوز انتخاب نکردی',
    }

Button.propTypes = {
        text: PropTypes.string,
        color: PropTypes.string,
        onClick: PropTypes.func,
    }


export default Button