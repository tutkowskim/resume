import React from 'react';
import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { personalInformation } from './data';

function ContactInformation() {
  return (
    <>
      <label>
        <a className="contact-info-link" href={`tel:${personalInformation.phoneNumber}`} color="inherit" variant="body2">
          <FontAwesomeIcon icon={faPhone} />
          <span>{personalInformation.phoneNumber}</span>
        </a>
      </label>
      <label>
        <a className="contact-info-link" target="_blank" href={`mailto:${personalInformation.email}`} rel="noreferrer" color="inherit" variant="body2">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>{personalInformation.email}</span>
        </a>
      </label>
      <label>
        <a className="contact-info-link" target="_blank" href={personalInformation.website.url} rel="noreferrer" color="inherit" variant="body2">
          <FontAwesomeIcon icon={faGlobe} />
          <span>{personalInformation.website.display}</span>
        </a>
      </label>
      <label>
        <a className="contact-info-link" target="_blank" href={personalInformation.linkedIn.url} rel="noreferrer" color="inherit" variant="body2">
          <FontAwesomeIcon icon={faLinkedin} />
          <span>{personalInformation.linkedIn.display}</span>
        </a>
      </label>
      <label>
        <a className="contact-info-link" target="_blank" href={personalInformation.github.url} rel="noreferrer" color="inherit" variant="body2">
          <FontAwesomeIcon icon={faGithub} />
          <span>{personalInformation.github.display}</span>
        </a>
      </label>
    </>
  );
}

export default ContactInformation;
