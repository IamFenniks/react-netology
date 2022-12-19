import React from 'react';
import styled from 'styled-components';
import {endDayOfWM, 
        isCurrentDay, 
        isThisMonthDay,
        startDayOfWM
    } 
    from '../../../utils/moment-utils';

const TBodyGrid = styled.div`
    display: grid;         grid-template-columns: repeat(7, 1fr);
    align-content: center; text-align: center;    color: #999999;
    font-weight: 200;      line-height: 36px;
`;
const DateCell = styled.div`
    background-color: ${props => props.isWeekend ? "#b4cbe5" : "#ffffff"};
    color: ${props => props.isThisMonthDay ? "#000000" : "#999999"};
`;
const CurrentDay = styled.div`
    background-color: #284B72;
    color: white;
`;

const calendar = [];
const day = startDayOfWM.clone();

while(!day.isAfter(endDayOfWM)) {
    calendar.push(day.clone());
    day.add(1, 'day');
}

const CalendarTBody = () => {
    return (
        <TBodyGrid>
             { calendar.map(c => {
                return (
                    <DateCell 
                        key={c}
                        isWeekend={c.day() === 6 || c.day() === 0}
                        isThisMonthDay={isThisMonthDay((c))}
                    >
                        {!isCurrentDay(c) && c.format('D')}
                        {isCurrentDay(c) && <CurrentDay>{c.format('D')}</CurrentDay>}
                    </DateCell> 
                )
            }) }
        </TBodyGrid>
    );
}

export default CalendarTBody;