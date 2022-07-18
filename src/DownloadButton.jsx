import React from 'react'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DownloadButton() {
    return (
        <a href="/mark_tutkowski.pdf" download>
            <FontAwesomeIcon aria-label="Download Resume" icon={faDownload} />
        </a>
    );
}

export default DownloadButton
