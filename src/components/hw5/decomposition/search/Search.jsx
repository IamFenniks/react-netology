import React from "react";
import ULSimple from "../ULSimple";

const Search = ({searchNav}) => {
    return (
        <div className="search">
            <div className="nav">
                <ULSimple>Just a fool day</ULSimple>  
            </div> 

            <div className="input">
                <label htmlFor="">
                    <iput></iput>
                    <button></button>
                </label>
            </div>
            
            <div className="hint"></div>
        </div>
    );
}

export default Search;