import React, { useState } from "react";
import styled from "styled-components";

let ColorWrepper = styled.div`
    background-color: ${props => props.inputColor === 'Ошибка' ? "#E94B35" : props.inputColor}
`
const Hex2Rgb = () => {
    const [form, setForm] = useState({
        hexColor: '',
        rgbColor: 'rgb(52, 73, 94)'
    });
    let handleHexChange = (e) => {

        const value = e.target.value;
        if(value.length <= 7) {
            
            setForm(prevForm => ({...prevForm, hexColor: e.target.value}));

            if(value.length === 7){ 
                let color = hexToRgbConverter(value);
                setForm(prevForm => ({...prevForm, rgbColor: color}));
            }else{
                setForm(prevForm => ({...prevForm, hexColor: e.target.value}));
            }

        }else{
            setForm(prevForm => ({...prevForm, rgbColor: "Ошибка"}));
            setForm(prevForm => ({...prevForm, hexColor: ''}));
            // return;
        }
    }

    const hexToRgbConverter = (value) => {
        let  result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);  
        return result 
          ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` 
          : null;
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
                            maxLenght="7"
                            onChange={handleHexChange} 
                            value={form.hexColor}
                        />
                    </div>
                    
                    <div>
                        <input 
                            type="text" 
                            className="rgb" 
                            name="rgb"
                            value={form.rgbColor} 
                        />
                    </div>
                </form>
            </ColorWrepper>
        </div>
    );
}

export default Hex2Rgb;