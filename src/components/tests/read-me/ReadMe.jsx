import { nanoid }        from "nanoid";
import React, {useState} from "react";
import BookModel         from "./ModelBook";
import BookList          from "./tests-inner/BookList";
import Filter            from "./tests-inner/Filter";
import BookAddForm       from "./tests-inner/BookAddForm";

function ReadMe(props) {
    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState('');
    const handleFilter = value => { setFilter(value); };
    const handleAdd = book => { setBooks(prevBooks => [prevBooks, book]) };
    console.log(books);
    const handleDone = id => {
        setBooks(prevBooks => prevBooks.map(              // Перебираем книги
            o => o.id === id                              // Если id совпадает с присланным,
                ? new BookModel(o.id, o.name, !o.read)    // пересоздаём данный экз. класса, указав "не прочтено"
                : o                                       // иначе оставляем как есть
        ));
    }

    const handleRemove = id => {
        /* Перебираем книги в массиве - предыдущее состояние,
         * если первой книги id не совпадает с присланным, то переустанавливается,
         * иначе
         * если id совпадают, то пропускаем и не переустанавливаеам
        */ 
        setBooks(prevBooks => prevBooks.filter(o => o.id !== id));
    }

    const filtered = books.filter( // Перебираем книги.
        o => o.name.toLowerCase()  // Преобразуем все в нижний регистр
            .includes(filter       // содержит ли стэйт-массив "filter" искомый элемент  
            .trim().toLowerCase()) // trim() удаляет пробельные символы с начала и конца строки
    );                             // Если совпадения найдены, то записываем их в константу "filtered"                                    

    return (
        <div className="m-content">
            <Filter onFilter={handleFilter} filter={filter} />
            <BookList books={filtered} onRemove={handleRemove} onDone={handleDone} />
            <BookAddForm onAdd={handleAdd} />
        </div>
    );
}
export default ReadMe;