import React from "react";

const Info = ({infoBlocks}) => {
    return (
        <div className="info">
            <div className="info-blocks">
                { infoBlocks.map(block => 
                    <div key={block.infoTitle} className="block">
                        <h3>{block.infoTitle}</h3>
                        <ul>
                            block.infoData.map{(data, index) => 
                                data.img
                                ? <li key={index}>
                                    <img src={data.img} alt="IMG" />
                                    <span>{data.degrees}</span>
                                    <span>{data.prognoz}</span>
                                </li>
                                : <li key={index}>{data}</li>
                            }
                        </ul>
                    </div>
                ) }
            </div>
        </div>
    );
}

export default Info;