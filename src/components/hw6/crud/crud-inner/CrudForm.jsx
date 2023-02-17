import { nanoid } from "nanoid";
import React, { useState } from "react";
import PropTypes from "prop-types";
import CrudModel from "../CrudModel";

const CrudForm = (props) => {
    const [form, setForm] = useState({ text: '' });

    const handleChange = (evt) => {
        setForm(evt.target.value);        
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        let noteText = new CrudModel(nanoid(), form.text)
        props.addData(noteText);

        setForm({ text: ''})
    }

    return (
        <form onSubmit={handleSubmit} className={props.className}>
            <div className="form-wrapper">
                <label htmlFor="noteText">
                    <textarea 
                        name="noteText" 
                        id="noteText" 
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
    // nameLabel: PropTypes.string,
    // zoneLabel: PropTypes.string,
    // btnName:   PropTypes.string,
    addData:   PropTypes.func.isRequired
}

export default CrudForm;