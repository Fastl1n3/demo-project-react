import React, { useState } from 'react';

export function RandomNumberGenerator() {
    const [randomNumber, setRandomNumber] = useState<number>(0); //переменная которая динамически меняется + экшн для смены

    let [clickCount, clikkk] = useState<number>(0);

    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 100);
        setRandomNumber(newRandomNumber);
        clikkk(++clickCount);
    };

    return (
        <div>
            <h1>Случайные числа</h1>
            <button onClick={generateRandomNumber}>Generate</button>
            <p>Число: {randomNumber}</p>
            <p>Кол-во кликов: {clickCount}</p>
        </div>
    );
}
