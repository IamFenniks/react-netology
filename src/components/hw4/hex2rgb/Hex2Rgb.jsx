import React, { useState } from "react";
import styled from "styled-components";
import colors from "./../../../data/hex-colors"

let ColorWrepper = styled.div`
    background-color: ${props => props.inputColor === 'Ошибка' ? "#E94B35" : props.inputColor}
`
// console.log(colors);

const Hex2Rgb = () => {
    const [form, setForm] = useState({
        hexColor: '',
        rgbColor: 'rgb(52, 73, 94)'
    });
    let handleHexChange = (e) => {
        if(form.hexColor.length < 8) {
            setForm(prevForm => ({...prevForm, hexColor: e.target.value}));

            if(form.hexColor.length === (7 - 1) && colors.filter(color => color === form.hexColor)){ 
                handleRgbChange(form.hexColor);
            }

        }else{
            setForm(prevForm => ({...prevForm, rgbColor: "Ошибка"}));
            setForm(prevForm => ({...prevForm, hexColor: ''}));
            return;
        }
    }

    function handleRgbChange(hex) {
         const color = 'rgb(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).join(',') + ')';
        // const r = parseInt(hex.slice(1, 3), 16);
        // const g = parseInt(hex.slice(3, 5), 16);
        // const b = parseInt(hex.slice(5, 7), 16);
        // const color =  "rgb(" + r + ", " + g + ", " + b + ")" // return an object
        // // return [ r, g, b ]
        setForm(prevForm => ({...prevForm, rgbColor: color}));
    }

    return (
        <div className="m-content">
            <ColorWrepper className="color-wrapper" inputColor={form.rgbColor}>
                <form className="input-box">
                    <div>
                        <input 
                            type="text" 
                            className="hex" 
                            name="hex" 
                            onChange={handleHexChange} 
                            value={form.hexColor}
                        />
                    </div>
                    
                    <div>
                        <input 
                            type="text" 
                            className="rgb" 
                            name="rgb"
                            onChange={handleRgbChange} 
                            value={form.rgbColor} 
                        />
                    </div>
                </form>
            </ColorWrepper>
        </div>
    );
}

export default Hex2Rgb;