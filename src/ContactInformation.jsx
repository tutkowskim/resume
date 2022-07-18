import React from 'react';
import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { personalInformation } from './data';

function ContactInformation() {
  return (
    <>
      <label>
        <a className="contact-info-link" href={`tel:${personalInformation.phoneNumber}`} color="inherit" variant="body2">
          <FontAwesomeIcon className="contact-info-icon" icon={faPhone} />
          <span>{personalInformation.phoneNumber}</span>
        </a>
      </label>
      <label>
        <a className="contact-info-link" target="_blank" href={`mailto:${personalInformation.email}`} rel="noreferrer" color="inherit" variant="body2">
          <FontAwesomeIcon className="contact-info-icon" icon={faEnvelope} />
          <span>{personalInformation.email}</span>
        </a>
      </label>
      <label>
        <a className="contact-info-link" target="_blank" href={personalInformation.website.url} rel="noreferrer" color="inherit" variant="body2">
          <FontAwesomeIcon className="contact-info-icon" icon={faGlobe} />
          <span>{personalInformation.website.display}</span>
        </a>
      </label>
    </>
  );
}

export default ContactInformation;
