import React, { Component } from "react";
import Toolbar from "./Toolbar";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
                category: "Business Cards"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
                category: "Websites"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
                category: "Business Cards"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
                category: "Websites"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
                category: "Websites"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
                category: "Flayers"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
                category: "Websites"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
                category: "Business Cards"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
                category: "Websites"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
                category: "Websites"
            }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
                category: "Flayers"
            }],
            filters: ["All", "Websites", "Flayers", "Business Cards"],

        }
    }

    render() {
        const items = this.state.items;

        return (
            <div className="portfolio m-content">
                <Toolbar
                    filters={["All", "Websites", "Flayers", "Business Cards"]}
                    selected="All"
                    onSelectFilter={(filter) => { console.log(filter); }}
                />

                <div className="toolbar-body">
                    {items.map((item, index) => <img key={index} src={item.img} alt={item.category} />)}
                </div>
            </div>
        )
    }
}



export default Portfolio;