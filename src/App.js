import React, {Component} from 'react';
import './App.css';
import Items, {menu} from "./component/Items/Items";
import Order from "./component/Order/Order";

class App extends Component {
    state = {
        order: [],
        total: 0
    };

    addOrder = (name, cost) => {
        const order = this.state.order;
        const index = order.findIndex((item) => item.name === name);
        index === -1 ? order.push({name: name, count: 1}) : order[index].count++;
        let total = this.state.total;
        total+= cost;
        this.setState({order,total});
    };

    removeOrder = (index, name) => {
        const order = this.state.order;
        order[index].count > 1 ? order[index].count-- : order.splice(index,1);
        const indexMenu = menu.findIndex(item => item.name === name);
        let total = this.state.total;
        total-= menu[indexMenu].cost;
        this.setState({order,total})
    };

    render() {
        return (
            <div className={'container'}>
                <div className={'orders'}>
                    <h2 className={'title'} >Order Details:</h2>
                  {this.state.order.length ?  this.state.order.map((item,index) =>
                    <Order name={item.name}
                           total={this.state.order}
                         index={index}
                           count={item.count}
                           key={index}
                           remove={()=> this.removeOrder(index, item.name)}
                    />
                    ):<div><p>{'Order is empty!'}</p> <p>{'Please add some items!'}</p> </div>}
                    <h4 className={'total'}>{'Total: '+this.state.total}</h4>
                </div>
                <div>
                    <div className={'items'}>
                        <h2 style={{textAlign:'center'}}>Add items</h2>
                        {menu.map((item, index) =>
                            <Items
                                index={index}
                                key={index}
                                cost={item.cost}
                                name={item.name}
                                type={item.type}
                                addOrder={() => this.addOrder(item.name,item.cost)}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;