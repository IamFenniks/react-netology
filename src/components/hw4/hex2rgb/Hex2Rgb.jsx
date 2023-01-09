import React from "react";
const handleSubmit = (e) => {
    e.preventDefault();
}
let handleHex = () => {

}
let handleRgb = () => {

}

const Hex2Rgb = () => {
    return (
        <div className="m-content">
            <div className="color-wrapper">
                <form className="input-box" onSubmit={handleSubmit}>
                    <div><input type="text" className="hex" name="hex" onChange={handleHex} value="#eh32lf" /></div>
                    <div><input type="text" className="rgb" name="rgb" onChange={handleRgb} value="#eh32lf" /></div>
                </form>
            </div>
        </div>
    );
}

export default Hex2Rgb;