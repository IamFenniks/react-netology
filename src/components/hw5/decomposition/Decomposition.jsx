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
    const [newsHead, setNewsHead] = useState(['Сейчас в СМИ', 'в Германии', 'Рекомендуем', '31 июдя, среда 02:32']);
    const [newsList, setNewsList] = useState([
        { svg: 'https://avatars.dzeninfra.ru/get-ynews-logo/135513/1002-1544074003449-square/logo-square', newsText: 'Путин упростил плучение автомобильных номеров' },
        { svg: 'https://avatars.dzeninfra.ru/get-ynews-logo/135513/1002-1544074003449-square/logo-square', newsText: 'В команде Зеленского раскрыли план реформ на Украине' },
        { svg: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1116-1478692904205-square/logo-square', newsText: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье' },
        { svg: 'https://avatars.dzeninfra.ru/get-ynews-logo/135513/254114979-1478693761853-square/logo-square', newsText: 'Суд закрыл дела Демпартии США против России' },
        { svg: 'https://avatars.dzeninfra.ru/get-ynews-logo/41096/1040-1640775230584-square/logo-square', newsText: 'На Украине призвали создать ракеты для ударов по Москве' }
    ]);
    // ++++++++++++ Header end ++++++++++
    const [serchNav, setSeachNav] = useState([
        'Видео', 'Картинки', 'Новости', 'Крты', 'Мркет', 'Переводчик', 'Эфир', 'ещё']);

    
    return (
        <div className="m-content">
            <h2>Декомпозиция</h2>

            <Header advContent={advContent} currency={currency} newsHead={newsHead} newsList={newsList} />

            <Search serchNav={serchNav} />

            <Bunner />

            <Info />
        </div>
    );
};

export default Decomposition;