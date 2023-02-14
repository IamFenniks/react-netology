import * as React from "react";

export default class Clock extends React.Component {
    clockInterval = "";
    constructor(props) {
        super(props);
        this.handleDate = this.handleDate.bind(this);
        this.state = {
            hours: "",
            minutes: "",
            seconds: ""
        };
    }

    componentDidMount() {
        this.clockInterval = setInterval(this.handleDate, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockInterval);
    }

    handleDelete = id => { this.props.deleteData(id); }
    
    render() {
        const { hours, minutes, seconds } = this.state;
        const secondsStyle = {
            transform: `rotate(${seconds * 6}deg)`
        };
        const minutesStyle = {
            transform: `rotate(${minutes * 6}deg)`
        };
        const hoursStyle = {
            transform: `rotate(${hours * 30}deg)`
        };
        const { id, title } = this.props;
        return (
            <div className={"clock"}>
                <div className="clock-top">
                    <h3>{title}</h3>
                    <button onClick={ () => this.handleDelete(id) }>&#10008;</button>
                </div>

                <div className={"analog-clock"}>
                    <div className={"dial seconds"} style={secondsStyle} />
                    <div className={"dial minutes"} style={minutesStyle} />
                    <div className={"dial hours"} style={hoursStyle} />
                </div>
                <div className={"digital-clock"}>
                    {hours}:{minutes}:{seconds}
                </div>
            </div>
        );
    }

    handleDate() {
        
        const dateDiff = this.props;
        const date = new Date();
        date.setHours(date.getHours() + dateDiff);
        let hours = this.formatTime(date.getHours());
        let minutes = this.formatTime(date.getMinutes());
        let seconds = this.formatTime(date.getSeconds());
        this.setState({ hours, minutes, seconds });
    }

    formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
}
