import React, { useState } from "react";
import PhotoPreview from "./photo_inner/PhotoPreview";

const PhotoManager = () => {
    const [dataUrls, setDataUrls] = useState([]);

    const fileToDataUrl = file => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.addEventListener('load', evt => {
                resolve(evt.currentTarget.result);
            });

            fileReader.addEventListener('error', evt => {
                reject(new Error(evt.currentTarget.error));
            });

            fileReader.readAsDataURL(file);
        });
    }

    const handleSelect = async (evt) => {
        const files = [...evt.target.files]; 
        const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
        setDataUrls(prevDataUrls => [...prevDataUrls, ...urls]);
    }

    const handleRemove = urlData => {
        setDataUrls(prevDataUrls => prevDataUrls.filter(o => o !== urlData));
    }

    return (
        <div className="m-content">
            <form className="click-to-select" >
                <input 
                    onChange={handleSelect} 
                    id="file-input" 
                    type="file" 
                    name="file" 
                    multiple 
                    accept=".jpeg,.jpg"
                />
                <label htmlFor="file-input">Click to select</label>
            </form>

            <PhotoPreview dataUrls={dataUrls} handleRemove={handleRemove} />
        </div>
    );
}

export default PhotoManager;
