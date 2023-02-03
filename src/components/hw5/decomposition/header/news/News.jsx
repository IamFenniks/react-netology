import React from "react";
import ULSimple from "../../ULSimple";
import ExchageRotes from "./news-inner/ExchageRotes";

let CollapsBar = props =>
    <div className={props.className}> {props.children}</div>
    
let BarBody = props =>
    <div className={props.className}>{props.children}</div>


const News = ({currency, newsHead, newsList}) => {
    const bodyItem = newsList.map((item, index) => 
        <BarBody key={index} className="bar-body">
            <p>
               <img src={item.svg} alt={item.newsText} /> 
               <span>{item.newsText}</span>
            </p> 
        </BarBody>)

    return (
        <div className="news">
            <CollapsBar className="collaps-bar">
                <ULSimple navList={newsHead} />

                <div>{ bodyItem }</div>
            </CollapsBar>
            
            <ExchageRotes currency={currency} />
        </div>
    );
}

export default News;