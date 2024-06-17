import React from 'react';
import Button from './Button';

const list = [
    'All',
    'Cricket',
    'Football',
    'Bollywood',
    'News',
    'NEET',
    'Elections',
    'WWE',
    'Weather',
    'Study',
    'Tech',
    'Food',
    'Games',
];
const ButtonList = () => {
    return (
        <div className="flex">
            {list.map((name, i) => (
                <Button key={i} name={name} />
            ))}
        </div>
    );
};

export default ButtonList;
