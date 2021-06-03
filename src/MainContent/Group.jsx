import React from 'react';

function Group(props) {
  const { title, children } = props;
  return (
    <>
      <div className="main_content__item main_content__header">
        {title}
      </div>
      <div className="main_content__item">
        {children}
      </div>
    </>
  );
}

export default Group;