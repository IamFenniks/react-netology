import React from "react";

const CardRow = props =>
    <div className={props.className}>
        {props.children}
    </div>

const CardImage = props =>
    <img src="..." className={props.className} alt={props.imgTitle} title={props.imgTitle} />

const CardBody = props =>
    <div className={props.className}>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.introtext}</p>
        <a href="#" className="btn btn-primary">{props.btnTitle}</a>
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
                <div className="card">
                    <CardImage 
                        className="card-img-top" 
                        imgTitle={cardBodyContent[0].title}
                    />
                    <CardBody 
                        className="card-body"
                        title={cardBodyContent[0].title}
                        introtext={cardBodyContent[0].introtext}
                        btnTitle={cardBodyContent[0].btnTitle}
                    />
                </div>

                <div class="card">
                    <CardBody 
                        className="card-body"
                        {...cardBodyContent[1]}
                    />
                </div>
            </CardRow>
        </div>
    );
};

    export default Cards;