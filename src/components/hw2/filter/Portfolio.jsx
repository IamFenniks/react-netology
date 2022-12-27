import React, { Component } from "react";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all: [{
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
            filters: ['All', 'Websites', 'Flayers', 'Business Cards'],
            isActive: 'All',

            projects: []
        }
        this.state.projects = this.state.all
    }
    
    onSelectFilter = filter => {
        this.setState(prevState => {
            return { isActive: filter }
        });

        this.handleSFIlter(filter)
    }

    handleSFIlter(filter) {
        filter === 'All'
            ? this.setState(prevState => ({
                projects: prevState.all
            }))
            : this.setState(prevState => ({
                projects: prevState.all.filter(p => p.category === filter)
            }));
    }

    render() {
        const filters = this.state.filters;

        return (
            <div className="portfolio m-content">
                <Toolbar
                    filters={filters}
                    selected={this.state.isActive}
                    onSelectFilter={this.onSelectFilter}
                />
                
                <ProjectList projects={this.state.projects} />
            </div>
        )
    }
}



export default Portfolio;