import React from 'react';
import { useState } from 'react';

const DepositsCalc = () => {
    const [depoSum, setDepoSum] = useState('1');
    const [period, setPeriod] = useState('1');

    const handleSumChange = (event) => {
        setDepoSum(event.target.value)
    }
    const handlePerChange = (event) => {
        setPeriod(event.target.value)
    }

    let compoundInterest = (persent) => {
        let sum = depoSum * Math.pow(1 + (persent/100)/365, period*30);
        return Math.round(sum * 100) / 100;
    };

    let persent = 0.0;
    const persents = () => {
        let sum = parseInt(depoSum);
        let months = parseInt(period);

        sum > 100000 && sum < 1000000 && months > 0 && months < 6
            ? persent = 4
        :sum > 100000 && sum < 1000000 && months > 5 && months < 13
            ? persent = 4.5 
        :sum > 100000 && sum < 1000000 && months > 12
            ? persent = 1.5 
        :sum >= 1000000 && months > 0 && months < 6
            ? persent = 4.5 
        :sum >= 1000000 && months > 5 && months < 13
            ? persent = 5.5 
        :sum >= 1000000 && months > 12
            ? persent = 1.5
            : persent = 1.5;
        
        return persent;
    }

    return (
        <div className="m-content">
            <div className="calc-wrapper">
                <h2>Калькулятор инвестора</h2>
                <br />
                <form className='depo-form'>
                    <fieldset>
                        <legend>Сумма (руб.)</legend>
                        <input
                            type="number"
                            value={depoSum} 
                            name="depoSum" 
                            id="depoSum" 
                            onChange={handleSumChange} 
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Срок (мес.)</legend>
                        <input
                            type="number"
                            value={period} 
                            name="period" 
                            id="period" 
                            onChange={handlePerChange} 
                        />
                    </fieldset>
                </form>

                <p className="calc_responce">
                    Ваша процентная ставка: { persents() }%
                    <br />
                    Сумма к окончанию срока: { compoundInterest(persent) } &#8381;
                </p>
            </div>
        </div>
    );
}

export default DepositsCalc; 