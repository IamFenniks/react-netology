import React, { useState } from "react";
import PropTypes from "prop-types";
import BookModel from "../ModelBook";
import { nanoid } from "nanoid";

const BookAddForm = ({ onAdd }) => {
    const [form, setForm] = useState({name: ''}); 
    
    const handleChange = evt => {
        // const name = evt.target.name; ...
        // Деструктурирование. Сохраняем два значения объекта по ключам, без объявления переменной
        const {name, value} = evt.target; 
        setForm(prevForm => ({...prevForm, [name]: value}));
        // console.log(evt.target.value) ... typing sim1, then + typing simb2 itc... - смотрит в строку инпута
    }
    // console.log(form); ...Здесь все символы по факту

    const handleSubmit = evt => {
        evt.preventDefault();                             // Отменяет обновление DOM
        const book = new BookModel(nanoid(), form.name);  // Создаём экз. класса с id и названием новой книги
        // Заносим это экз. в массив состояния
        onAdd(book);                                      // Добавляем книгу в состояние
        setForm({name: ''});                              // Очищаем строку инпута
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} />
        </form>
    );
}

BookAddForm.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default BookAddForm;
