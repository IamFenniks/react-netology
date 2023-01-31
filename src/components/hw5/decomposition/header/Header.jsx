import React from "react";
import ADV from "./adv/ADV";
import News from "./news/News";

const Header = ({advContent, currency}) => {
// debugger
    return (
        <div className="deco-header">
            <News  currency={currency} />

            <ADV {...advContent} />
        </div>
    );
}

export default Header;