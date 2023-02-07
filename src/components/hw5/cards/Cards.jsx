import React from "react";
import Card from "./Card";
import CardImage from "./CardImage";

const CardRow = props =>
    <div className={props.className}>
        {props.children}
    </div>

const Cards = (props) => {
    const cardBodyContent = [
        {
            title: 'Заголовок карточки',
            introtext: 'Небольшой пример текста, который должен основываться на названии карточки и составлять основную часть содержимого карты.',
            btnTitle: 'Перейти куда-нибудь'
        },{
            title: 'Особое обращение с заголовком',
            introtext: 'С вспомогательным текстом ниже в качестве естественного перехода к дополнительному контенту.',
            btnTitle: 'Перейти куда-нибудь'
        }
    ];

    return (
        <div className="m-content">
            <h2>Карточки</h2>

            <CardRow className="row">
                <Card >
                    <Card.Img className="card-img-top" alt={cardBodyContent.title} title={cardBodyContent.title} />
                    <Card.Body>
                        <Card.Title className="card-title">{cardBodyContent[0].title}</Card.Title>
                        <Card.Text className="card-text">{cardBodyContent[0].introtext}</Card.Text>
                        <Card.Link href="#" className="btn btn-primary">{cardBodyContent[0].btnTitle}</Card.Link>
                    </Card.Body>
                </Card>

                <Card>
                <Card.Body>
                        <Card.Title className="card-title">{cardBodyContent[1].title}</Card.Title>
                        <Card.Text className="card-text">{cardBodyContent[1].introtext}</Card.Text>
                        <Card.Link href="#" className="btn btn-primary">{cardBodyContent[1].btnTitle}</Card.Link>
                    </Card.Body>
                </Card>
            </CardRow>
        </div>
    );
};

    export default Cards;