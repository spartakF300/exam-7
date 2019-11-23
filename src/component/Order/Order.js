import './Order.css'
import React from 'react';
import {menu} from "../../component/Items/Items.js";
const red = {color: 'red'};
const green = {color: 'green'};
const Order = (props) => {
    const indexMenu = menu.findIndex(p => p.name === props.name);
    return (
        <div className={'order-list'}>
            <p>{props.index + 1 + '.' + props.name}</p>  <span
            style={props.count > 3 ? red : green}>{'x'+ props.count}</span> <span>{menu[indexMenu].cost +' KGS'}</span>
            <button onClick={props.remove} className={'remove'}></button>
        </div>
    );
};

export default Order;