import { nanoid } from "nanoid";
import React, { useState } from "react";
import ClockModel from "./../ClockModel";

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

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let data = new ClockModel(nanoid(), form.name, form.tZone)
        props.addData(data);
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

            <label htmlFor="tZone" >
                {zoneLabel}
                <input 
                    type="text" 
                    id="tZone" 
                    name="tZone" 
                    onChange={handleTZoneChange} 
                    defaultValue={form.tZone}
                />
            </label>

            <button>{btnName}</button>
        </form>
    );
}

export default Form;