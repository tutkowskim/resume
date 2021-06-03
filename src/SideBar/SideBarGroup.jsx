import React from 'react';

function SideBarGroup(props) {
  const { title, items } = props;
  return (
    <>
      <div className="side_content__header"><div className="side_content__item">{title}</div></div>
      {items.map((item) => <div key={item} className="side_content__item">{item}</div>)}
    </>
  );
}

export default SideBarGroup;
