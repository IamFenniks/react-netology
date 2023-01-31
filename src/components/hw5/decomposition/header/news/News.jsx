import React from "react";
import ExchageRotes from "./news-inner/ExchageRotes";

const News = ({currency}) => {
    // debugger
    return (
        <div className="news">
            <div className="collaps-bar">
                <div className="bar-head"></div>
                <div className="bar-body"></div>
            </div>
            
            <ExchageRotes currency={currency} />
        </div>
    );
}

export default News;