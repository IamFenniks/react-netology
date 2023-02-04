import React from "react";
import { useState } from "react";
import Bunner from "./bunner/Bunner";
import Header from "./header/Header";
import Info from "./info/Info";
import Search from "./search/Search";

/**
 * Компонент хранит глобальный Стейт и передаёт в дочерние компоненты соответсвующие данные из него
 * @returns {jsx} Возвращает дочерние элементы в ввиде (jsx-code)
 */

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
    // ++++++++++++ Search end ++++++++++
    const [infoBlocks, setInfoBlocks] = useState([
        {
            infoTitle: 'Погода',
            infoData: [{
                img: 'https://static.dzeninfra.ru/weather/i/icons/funky/dark/ovc.svg',
                degrees: '+17',
                prognoz: 'утром +17, днём +20'
            }]
        },
        {
            infoTitle: 'Посещаемое',
            infoData: ['Недвижимость-о сталинках', 'Маркет-люстры и светильники', 'Авто.ру-привод 4х4 до 500000']
        },{
            infoTitle: 'Карта Германии',
            infoData: ['Расписание']
        },{
            infoTitle: 'Телепрограмма',
            infoData: ['02:00 THT. Best. THT international', '02:15 Джинглики. Карусель INT', '02:25 Наедине со всеми. Первый']
        },{
            infoTitle: 'Эфир',
            infoData: ['Управление как искусство Успех', 'Ночь. Мир в это время EarthTV', 'Андрей Возн. Совершенно секретно']
        }
    ]);
    // ++++++++++++ Info block end ++++++++++
    
    return (
        <div className="m-content">
            <h2>Декомпозиция</h2>

            <Header advContent={advContent} currency={currency} newsHead={newsHead} newsList={newsList} />

            <Search serchNav={serchNav} />

            <Bunner />

            <Info infoBlocks={infoBlocks} />
        </div>
    );
};

export default Decomposition;