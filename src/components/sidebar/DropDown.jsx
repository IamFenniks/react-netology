import { nanoid } from "nanoid";
import React from "react";
import LinkItem from "./LinkItem";

const DropDown = ({menu}) => {
    debugger;
    return (
        <div className="dr-down active">
                    ДЗ №{menu.id +1}
            <div className="dr-inner">
                { menu.map(m => <LinkItem key={nanoid()} menu={m.drop} />) }
            </div>
        </div>
    )
}

export default DropDown;