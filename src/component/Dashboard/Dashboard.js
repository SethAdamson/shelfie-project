import React, {Component} from 'react';
import Product from '../Product/Product'
import { SIGTERM } from 'constants';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(){
        super();

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id){
        axios.delete(`api/product/${id}`).then(res => this.props.getProducts())
      }


    render(){
        let {inventory, editStartFn} = this.props;
        let display = inventory.map(item => {
            return(
                <div key={item.id} className='productParent'>
                    <Product id={item.id} name={item.name} price={item.price} imgurl={item.imgurl} editStart={editStartFn} deleteProduct={this.deleteProduct}/>
                </div>
        )});  
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