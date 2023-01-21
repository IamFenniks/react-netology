import React from "react";

const PhotoManager = () => {
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
        debugger;
        const files = [...evt.target.files];
        const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
        // У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img
    }

    return (
        <div className="m-content">
            <form className="click-to-select" >
                <input onSelect={handleSelect} id="file-input" type="file" name="file" multiple />
                <label htmlFor="file-input">Click to select</label>
            </form>
        </div>
    );
}

export default PhotoManager;
