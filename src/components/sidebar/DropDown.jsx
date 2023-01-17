import { nanoid } from "nanoid";
import React, {useState} from "react";
import LinkItem from "./LinkItem";

const DropDown = ({id, drop}) => {
    const [active, setActive] = useState(false);

    return (
        <div className={active ? 'dr-down active' : 'dr-down'} onClick={()=>{setActive(!active)}}>
                    ДЗ №{id +1}
            <div className="dr-inner ">
                { drop.map(d => <LinkItem key={nanoid()} link={d.link} name={d.name} />) }
                {/* drop : [
                    { link: 'shopitem',
                      name: 'Карточка товара' } 
                ]*/}
            </div>
        </div>
    )
}

export default DropDown;