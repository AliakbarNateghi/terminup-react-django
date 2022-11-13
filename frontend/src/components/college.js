import React, { Component }  from 'react';
import { useState } from "react";
import PropTypes from 'prop-types'

const College = ({college, onShowCourses}) => {
    return(
          <option onClick={onShowCourses}>
              {college}
          </option>
  )
}

College.prototype = {
    college: PropTypes.string,
    onShowCourses: PropTypes.func,
}

export default College;