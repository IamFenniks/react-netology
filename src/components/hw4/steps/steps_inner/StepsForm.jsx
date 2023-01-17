import { nanoid } from "nanoid";
import React, { useState } from "react";
import StepsModel from "../StepsModel";
import PropTypes from "prop-types";

const StepsForm = ({ addData }) => {
    // debugger;
    const [form, setForm] = useState({
        date: '',
        steps: ''
    });
    
    const handleDateChange = (e) => {
        const {name, value} = e.target;
        setForm(prevForm => ({...prevForm, [name]: value}));        
    }
    
    const handleStepsChange = (e) => {
        const {name, value} = e.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        const date =form.date.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`);
        const data = new StepsModel(nanoid(), date, form.steps); 
        addData(data);
        setForm({date: '', steps: ''});

        // console.log(evt.type); // выводит submit
        // console.log(evt.target); // выводит всю форму в html
    }
    // console.log(form.steps)
    return (
        <form onSubmit={ handleSubmit } className="steps-form">
            <label htmlFor="date">
                Дата (ДД.ММ.ГГ)
                <input type="date" id="date" name="date" onChange={handleDateChange} value={form.date} />
            </label>
            <label htmlFor="steps">
                Пройдено км
                <input type="text" id="steps" name="steps" onChange={handleStepsChange} value={form.steps} />
            </label>
            <button type="submit">OK</button>
        </form>
    );
}

StepsForm.propTypes = {
    addData: PropTypes.func.isRequired
}

export default StepsForm;