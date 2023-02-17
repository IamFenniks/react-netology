import { nanoid } from "nanoid";
import React, { useState } from "react";
import PropTypes from "prop-types";
import CrudModel from "../CrudModel";

const CrudForm = ({ className, addData }) => {
    const [form, setForm] = useState({ text: '' });

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setForm(prevForm => ({...prevForm, [name]: value}));        
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        let noteText = new CrudModel(nanoid(), form.text)
        // console.log(noteText)
        addData(noteText);

        setForm({ text: ''})
    }

    return (
        <form onSubmit={handleSubmit} className={className}>
            <div className="form-wrapper">
                <label htmlFor="text">
                    <textarea 
                        name="text" 
                        id="text" 
                        cols="35" 
                        rows="6"
                        value={form.text}
                        onChange={handleChange}
                    ></textarea>
                </label>
            
                <button>&#10148;</button>  
            </div>
        </form>
    );
}

CrudForm.propTypes = {
    className: PropTypes.string,
    addData:   PropTypes.func.isRequired
}

export default CrudForm;