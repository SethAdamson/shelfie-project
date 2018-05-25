import React, {Component} from 'react';
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor(){
        super();

    }

    render(){
        let display = this.props.inventory.map(item => {
            return( <Product key={item.id} name={item.name} price={item.price} imgurl={item.imgurl}/>)
        });
        return(
            <div>
                Dashboard
                <div>
                    {display}
                </div> 
            </div> 
        )
    }
}