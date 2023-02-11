import React, { useState } from "react";

const Form = (props) => {
    const {nameLabel, zoneLabel, btnName} = props.formData;

    const [form, setForm] = useState({
        id: '',
        name: '',
        tZone: ''
    });

    const handleNameChange = (e) => {
        const {name, value} = e.target;
        setForm(prevForm => ({...prevForm, [name]: value}));        
    }
    
    const handleTZoneChange = (e) => {
        const {name, value} = e.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }

    const handleSubmit = () => {

    }

    return (
        <form className={props.className} onSubmit={handleSubmit}>
            <label htmlFor="name" >
                {nameLabel}
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    onChange={handleNameChange} 
                    defaultValue={form.name}
                />
            </label>

            <label htmlFor="t-zone" >
                {zoneLabel}
                <input 
                    type="text" 
                    id="t-zone" 
                    name="t-zone" 
                    onChange={handleTZoneChange} 
                    defaultValue={form.tZone}
                />
            </label>

            <button>{btnName}</button>
        </form>
    );
}

export default Form;