import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SideBarGroup from './SideBarGroup';

function ContactInformation(props) {
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
      <FontAwesomeIcon icon={faPhone} />
      {' '}
      {phoneNumber}
    </a>,
    <a target="_blank" href={website} rel="noreferrer">
      <FontAwesomeIcon icon={faGlobe} />
      <i className="fa fa-globe" />
      {' '}
      {personalWebsiteDisplayValue}
    </a>,
    <a target="_blank" href={`mailto:${email}`} rel="noreferrer">
      <FontAwesomeIcon icon={faEnvelope} />
      {' '}
      {email}
    </a>,
    <a target="_blank" href={linkedIn} rel="noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
      {' '}
      {linkedinDisplayValue}
    </a>,
  ];
  return <SideBarGroup title="Contact Information" items={items} />;
}

export default ContactInformation;
