import React from "react";
import { useState } from "react";
import Bunner from "./bunner/Bunner";
import Header from "./header/Header";
import Info from "./info/Info";
import Search from "./search/Search";

 const Decomposition = () => {
    const [advContent, setAdvContent] = useState(
        {imgSrc: '', advTitle: 'Работа над ошибками', advText: 'Смотрите на Яндексе и запоминайте'}
    );
    const [currency, setCurrency] = useState([
        {curTitle: 'CNY', curPrice: '10.43', curArrow: '↑'},
        {curTitle: 'USD', curPrice: '70.52', curArrow: '↓'},
        {curTitle: 'EUR', curPrice: '76.3', curArrow: '↓'}
    ]);
    
    return (
        <div className="m-content">
            <h2>Декомпозиция</h2>

            <Header advContent={advContent} currency={currency} />

            <Search />

            <Bunner />

            <Info />
        </div>
    );
};

export default Decomposition;