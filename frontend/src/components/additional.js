import React from 'react';
import PropTypes from 'prop-types';

const Additional = ({course, backgroundColor, boolean}) => {

  const liStyle = {
    fontSize: '13px',
  }

  if(boolean === true) {
    return (
        <ul className='additional' style={{
                backgroundColor: 'rgba(104, 104, 104, 1)',
                borderRadius: '7px',
                height: '200px',
                width: '15%',
                position: 'absolute',
                backgroundColor: backgroundColor,
                border: '0.01px solid black',
                listStyle: 'none',
            }}>
            <li style={liStyle}>{course.title}</li>
            <li style={liStyle}>{course.group}:گروه</li>
            <li style={liStyle}>{course.unit}:واحد</li>
            <li style={liStyle}>{course.capacity}:ظرفیت</li>
            <li style={liStyle}>{course.date}:تاریخ امتحان</li>
            <li style={liStyle}>{course.start}:ساعت شروع امتحان</li>
            <li style={liStyle}>{course.requirements}:پیش نیاز</li>
            <li style={liStyle}>{course.synthesis}:همنیاز</li>
            <li style={liStyle}>{course.ps}:پینوشت</li>
        </ul>
    )
  }
}

Additional.prototype = {
  course: PropTypes.object,
  backgroundColor: PropTypes.string,
}

Additional.defaultProps = {
  Additional: {}
}

export default Additional