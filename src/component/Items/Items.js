import React from 'react';
import './Items.css'

export const menu = [
    {name: 'Hamburger', type: 'food', cost: 80},
    {name: 'Coffee', type: 'drink', cost: 70},
    {name: 'Cheeseburger', type: 'food', cost: 90},
    {name: 'Tea', type: 'drink', cost: 50},
    {name: 'Fries', type: 'food', cost: 45},
    {name: 'Cola', type: 'drink', cost: 40}
];
const Items = (props) => {
    return (
        <div className={'item ' + props.type}  onClick={props.addOrder}>
            <h4>{props.name}</h4>
            <p>{props.cost}KGS</p>
        </div>

    );
};

export default Items;