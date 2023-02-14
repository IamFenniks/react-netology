import React from 'react';
import styled from 'styled-components';

const THeadGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-content: center;
    text-align: center;
    color: #999999;
    font-weight: 200;
    height: 33px;
    line-height: 36px;
`;
const DateCell = styled.div`
    background-color: ${props => props.isWeekend ? "#b4cbe5" : "#ffffff"};
`;

const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const CalendarWdHeader = () => {
    return (
        <THeadGrid>
            { weekdays.map((wd, index) => {
                return (
                    <DateCell 
                        key={index}
                        isWeekend={index === 6 || index === 5}
                    >  
                        {wd}
                    </DateCell>
                )}  
            )}
        </THeadGrid>
    );
}

export default CalendarWdHeader;