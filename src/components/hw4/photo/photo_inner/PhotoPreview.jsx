import React from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import styled from "styled-components";

let BackgroundImage = styled.div`
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const PhotoPreview = ({ dataUrls, handleRemove }) => {
    const handleDelete = (urlData) => { handleRemove(urlData) };

    return (
        <div className="preview-block">
            { dataUrls.map(url => {
                return (
                    <div key={nanoid()} className="preview">
                        <button  onClick={ () => handleDelete(url) }>&#9587;</button>

                        <BackgroundImage className="img-wrep" background={url} />
                    </div>    
                );
            }) }
        </div>
    );
}

PhotoPreview.propTypes = { dataUrls: PropTypes.string.isRequired }

export default PhotoPreview;
