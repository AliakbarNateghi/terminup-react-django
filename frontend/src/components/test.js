import React, { Component }  from 'react';
import { useState } from "react";
import PropTypes from 'prop-types'

const Test = ({title, author, number}) => {
    return(
      <div className={`task ${number > 10 ? 'reminder' : ''}`} style={{width: '20%', float: 'right'}}>
            <h3>
                {title}
            </h3>
            <p>{author}</p>
      </div>
  )
}

Test.prototype = {
    book: PropTypes.object
}

export default Test