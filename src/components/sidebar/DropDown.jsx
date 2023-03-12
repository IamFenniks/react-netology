import { nanoid } from "nanoid";
import React, {useState} from "react";
import LinkItem from "./LinkItem";

const DropDown = ({id, drop}) => {
    const [active, setActive] = useState(false);

    return (
        <div className="dr-down">
            <span className={active ? 'active' : ''} onClick={()=>{setActive(!active)}}>
                ДЗ №{id +1}
            </span>
            <div className="dr-inner ">

                { drop.map(d => 
                    <LinkItem 
                        key={nanoid()} 
                        className={({ isActive }) => 
                            (`${isActive ? "active" : ""}`)
                        } 
                        link={d.link} 
                        name={d.name} 
                    />) 
                }
    
            </div>
        </div>
    )
}

export default DropDown;