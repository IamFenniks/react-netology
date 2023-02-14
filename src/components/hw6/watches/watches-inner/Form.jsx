import { nanoid } from "nanoid";
import React, { useState } from "react";
import ClockModel from "./../ClockModel";
import PropTypes from "prop-types";

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

        setForm({ name: '', tZone: '' })
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
                    value={form.name}
                />
            </label>

            <label htmlFor="tZone" >
                {zoneLabel}
                <input 
                    type="number" 
                    id="tZone" 
                    name="tZone" 
                    onChange={handleTZoneChange} 
                    value={form.tZone}
                />
            </label>

            <button>{btnName}</button>
        </form>
    );
}

Form.propTypes = {
    className: PropTypes.string,
    nameLabel: PropTypes.string,
    zoneLabel: PropTypes.string,
    btnName:   PropTypes.string,
    addData:   PropTypes.func.isRequired
}

export default Form;