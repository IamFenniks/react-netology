import React, { useState } from "react";
import styled from "styled-components";

let ColorWrepper = styled.div`
    background-color: ${props => props.inputColor}
`

// const handleSubmit = (e) => {
//     e.preventDefault();
// }


const Hex2Rgb = () => {
    
    const [form, setForm] = useState({
        hexName: '#34495e',
        rgbName: ''
    });
    let handleHexChange = (e) => {
        setForm(prevForm => ({...prevForm, hexName: e.target.value}));
    
        // var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(form.hexName);
        // result = result ? {
        //     r: parseInt(result[1], 16),
        //     g: parseInt(result[2], 16),
        //     b: parseInt(result[3], 16)
        // } : 'Ошибка';
    }

    function getRGB(color){
        if(color.length == 7){
          var r = parseInt(color.substr(1,2),16);
          var g = parseInt(color.substr(3,2),16);
          var b = parseInt(color.substr(5,2),16);    
          return 'rgb('+r+','+g+','+b+')' ;
        }    
        else
          console.log('Enter correct value');
      }
      var a = getRGB('#f0f0f0');
      if(!a){
       a = 'Enter correct value'; 
      
      setForm(prevForm => ({...prevForm, rgbName: a}))
      }

    return (
        <div className="m-content">
            <ColorWrepper className="color-wrapper" inputColor={form.hexName}>
                <form className="input-box">
                    <div>
                        <input 
                            type="text" 
                            className="hex" 
                            name="hex" 
                            onChange={handleHexChange} 
                            value={form.hexName}
                        />
                    </div>
                    
                    <div>
                        <input 
                            type="text" 
                            className="rgb" 
                            name="rgb" 
                            value={form.rgbName} 
                        />
                    </div>
                </form>
            </ColorWrepper>
        </div>
    );
}

export default Hex2Rgb;