import React from 'react';
import SideBarGroup from './SideBarGroup';

function SideBarContactInformation(props) {
  const {
    phoneNumber,
    email,
    website,
    linkedIn,
  } = props;

  const linkedinUrl = new URL(linkedIn);
  const linkedinDisplayValue = linkedinUrl.hostname + linkedinUrl.pathname;

  const personalWebsiteUrl = new URL(website);
  const personalWebsiteDisplayValue = personalWebsiteUrl.hostname;

  const items = [
    <a href={`tel:${phoneNumber}`}>
      <i className="fa fa-phone" />
      {' '}
      {phoneNumber}
    </a>,
    <a target="_blank" href={website} rel="noreferrer">
      <i className="fa fa-globe" />
      {' '}
      {personalWebsiteDisplayValue}
    </a>,
    <a target="_blank" href={`mailto:${email}`} rel="noreferrer">
      <i className="fa fa-envelope" />
      {' '}
      {email}
    </a>,
    <a target="_blank" href={linkedIn} rel="noreferrer">
      <i className="fa fa-linkedin-square" />
      {' '}
      {linkedinDisplayValue}
    </a>,
  ];
  return <SideBarGroup title="Contact Information" items={items} />;
}

export default SideBarContactInformation;
