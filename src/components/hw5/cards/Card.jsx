import React from "react";
import { Link } from "react-router-dom";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import CardText from "./CardText";
import Title5 from "./Title5";

const Card = (props) => {
    return (
        <div className="card">
            {props.children}
        </div>
    );
}

export default Object.assign(Card, {
    Img:  CardImage,
    Body: CardBody,
    Title: Title5,
    Text: CardText,
    Link: Link
});
