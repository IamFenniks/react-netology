import React, { useState } from "react";

const StepsForm = (props) => {
    // debugger;
    const [form, setForm] = useState({
        date: '',
        steps: ''
    });
    
    const handleDateChange = (e) => {
        setForm(prevForm => ({...prevForm, date: e.target.value}));        
    }
    
    const handleStepsChange = (e) => {
        setForm(prevForm => ({...prevForm, steps: e.target.value}));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        evt.type && form.date !== '' && form.steps !== null
            ? props.addData(form.date, form.steps)
            : alert("Вы не ввели все данные");

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

export default StepsForm;