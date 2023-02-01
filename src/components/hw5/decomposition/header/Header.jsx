import React from "react";
import ADV from "./adv/ADV";
import News from "./news/News";

const Header = ({advContent, currency, newsHead, newsList}) => {
// debugger
    return (
        <div className="deco-header">
            <News  currency={currency} newsHead={newsHead} newsList={newsList} />

            <ADV {...advContent} />
        </div>
    );
}

export default Header;