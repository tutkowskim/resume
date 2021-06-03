import React from 'react';

function Education(props) {
  const {
    institution,
    location,
    startDate,
    endDate,
    degrees,
  } = props;
  return (
    <div className="row">
      <div className="row__item__grow">
        <div className="main_content__item_title">{institution}</div>
        {degrees.map((degree) => <div key={degree}>{degree}</div>)}
      </div>
      <div>
        <div className="row__item__right_align">{location}</div>
        <div className="row__item__right_align">{`${startDate} - ${endDate}`}</div>
      </div>
    </div>
  );
}

export default Education;
