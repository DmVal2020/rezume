import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer';
import Resume from './index';

function Pdf() {
    return (
        <div>
            <Resume />
            <PDFDownloadLink document={<Resume /> } fileName="example.pdf">
                            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download pdf!')}
            </PDFDownloadLink>
        </div>
    )
}

export default Pdf

