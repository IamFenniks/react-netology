import { nanoid } from "nanoid";
import React, { useState } from "react";
import PropTypes from "prop-types";
// import ChatModel from "../ChatModel";

const ChatForm = ({ className, addData }) => {
    const [form, setForm] = useState({ message: '' });

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setForm(prevForm => ({...prevForm, [name]: value}));        
    }
    
    const handleSubmit = (evt) => {
        // debugger;
        evt.preventDefault();
        
        const messText = (form.message);
        addData(messText);

        setForm({ message: ''});
    }

    return (
        <form onSubmit={handleSubmit} className={className}>
            <div className="form-wrapper">
                <label htmlFor="message">
                    <textarea 
                        name="message" 
                        id="message" 
                        rows="2"
                        value={form.message}
                        onChange={handleChange}
                    ></textarea>
                </label>
            
                <button>&#10148;</button>  
            </div>
        </form>
    );
}

ChatForm.propTypes = {
    className: PropTypes.string,
    addData:   PropTypes.func.isRequired
}

export default ChatForm;