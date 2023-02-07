import React from "react";

const BtnGroup = ({props}) => {
    return (
        <p>
            <a class="btn btn-primary" 
                data-bs-toggle="collapse" 
                href="#collapseExample" 
                role="button" 
                aria-expanded="false" 
                aria-controls="collapseExample"
            >
                Link with href
            </a>
            <button class="btn btn-primary" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseExample" 
                aria-expanded="false" 
                aria-controls="collapseExample"
            >
                Button with data-bs-target
            </button>
        </p>
    );
}

export default BtnGroup;