import React from 'react'
import { Download } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function DownloadButton() {
    return (
        <a href="/mark_tutkowski.pdf" download>
            <IconButton
                    color="secondary"
                    variant="outlined"
                    aria-label="Download Resume"
                    component="span"
                    size="large">
                <Download />
            </IconButton>
        </a>
    )
}

export default DownloadButton
