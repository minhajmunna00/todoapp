import React from "react";
import { Link } from "react-router-dom";

import { Document,Page} from 'react-pdf/dist/esm/entry.webpack';

export default function PDF(props){
    // get filename and file from the database // currrently the whole pdf is being passed through props 
    // const filename = "file";
    const filename = props.pdf.name;
    const url = props.pdf.url;
    

    // passes the variable FILENAME to the LINK component which will pass it to the AnnotationPage - multiple variables can be passed
    return (
        <Link to= "/annotate-pdf" state={{ filename: filename, url: url}}>
            <div>
                <Document file={url}>
                    <Page pageNumber={1} height="180" width="150" renderTextLayer={false}/>
                </Document>
                <p>{filename}</p>
            </div>
        </Link>

    )
}