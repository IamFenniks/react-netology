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

            if(form.hexColor.length === 7 && colors.filter(color => color === form.hexColor)){ 
                handleRgbChange(form.hexColor);
            }

        }else{
            setForm(prevForm => ({...prevForm, rgbColor: "Ошибка"}));
            setForm(prevForm => ({...prevForm, hexColor: ''}));
            // return;
        }
    }

    function handleRgbChange(hex) {
        const color = 'rgb(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).join(',') + ')';
        setForm(prevForm => ({...prevForm, rgbColor: color}));
    }

    return (
        <div className="m-content">
            <ColorWrepper className="color-wrapper" inputColor={form.rgbColor}>
                <form className="input-box">
                    <div>
                        <input 
                            autoFocus={true}
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