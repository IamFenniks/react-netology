import React from "react";
import './../../App.css';
import DropDown from "./DropDown";

const SideNav = () => {
    
    const menu = [
        {
            id: 0,
            drop : [
                {
                    link: 'shopitem',
                    name: 'Карточка товара'
                },{
                    link: 'calendar',
                    name: 'Календарь'
                }
            ]
        },{
            id: 1,
            drop : [
                {
                    link: 'portfolio',
                    name: 'Портфолио'
                },{
                    link: 'store',
                    name: 'Магазин'
                },{
                    link: 'dropdown',
                    name: 'Выпадающий список'
                }
            ]
        },{
            id: 2,
            drop : [
                {
                    link: 'stars',
                    name: 'Рейтинг фильмов'
                },{
                    link: 'listing',
                    name: 'Список предложений'
                },{
                    link: 'chat',
                    name: 'История чата'
                }
            ]
        },{
            id: 3,
            drop : [
                {
                    link: 'hex2grb',
                    name: 'Конвертор цветов'
                },{
                    link: 'steps',
                    name: 'Учёт тренировок'
                },{
                    link: 'photo',
                    name: 'Менеджер фото'
                },{
                    link: 'deposits',
                    name: 'Калькулятор вклада'
                }
            ]
        }
    ];

    // debugger;
    return (
        <div className="side_nav">
            <nav>
                { menu.map(m => <DropDown key={m.id} id={m.id} drop={m.drop} />) }
            </nav>
        </div>
    );
}

export default SideNav;