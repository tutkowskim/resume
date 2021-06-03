import React from 'react';

function Experience(props) {
  const {
    company,
    roles,
  } = props;
  return (
    <>
      <div className="main_content__item_title">{company}</div>
      {roles.map((role) => (
        <div key={`${company}_${role.title}`}>
          <div className="row">
            <div className="row__item__grow">
              <div>
                {role.title}
              </div>
            </div>
            <div>
              <div className="row__item__right_align">
                {`${role.startDate} - ${role.endDate}`}
              </div>
            </div>
          </div>
          { role.roleDetails && role.roleDetails.length > 0
          && (
          <div className="row">
            <div className="row__item__grow">
              <ul>
                {role.roleDetails.map((detail) => <li key={`${role.title}_${detail}`}>{detail}</li>)}
              </ul>
            </div>
          </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Experience;
