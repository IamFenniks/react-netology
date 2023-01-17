import React, {useState} from "react";
import './../../App.css';
import DropDown from "./DropDown";

const SideNav = () => {
    const [active, setActive] = useState(false);
    
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
                    link: 'chat',
                    name: 'История чата'
                }
            ]
        }
    ];
    debugger;
    return (
        <div className="side_nav">
            <nav>
                { menu.map(m => <DropDown key={m.id} menu={m.drop} />) }
                {/* <div className="dr-down active">
                    ДЗ №1
                    <div className="dr-inner">
                        <div>&#x26C4; <Link to='shopitem'>Карточка товара</Link></div>
                        <div>&#x26C4; <Link to='calendar'>Календарь</Link></div>
                    </div>
                </div>
                <div className="dr-down">
                    ДЗ №2
                    <div className="dr-inner">
                        <div>&#x26C4; <Link to='portfolio'>Портфолио</Link></div>
                        <div>&#x26C4; <Link to='store'>Магазин</Link></div>
                        <div>&#x26C4; <Link to='dropdown'>Выпадающий список</Link></div>
                    </div>
                </div>
                <div className="dr-down">
                    ДЗ №3
                    <div className="dr-inner">
                        <div>&#x26C4; <Link to='stars'>Рейтинг фильмов</Link></div>
                        <div>&#x26C4; <Link to='listing'>Список предложений</Link></div>
                        <div>&#x26C4; <Link to='chat'>История чата</Link></div>
                    </div>
                </div>
                <div className="dr-down">
                    ДЗ №4
                    <div className="dr-inner">
                        <div>&#x26C4; <Link to='hex2grb'>Конвертор цветов</Link></div>
                        <div>&#x26C4; <Link to='steps'>Учёт тренировок</Link></div>
                    </div>
                </div>
                <div className="dr-down">
                    <div className="dr-inner"></div>
                </div> */}
            </nav>
        </div>
    );
}

export default SideNav;