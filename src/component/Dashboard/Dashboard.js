import React, {Component} from 'react';
import Product from '../Product/Product'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            inventory: [],
        }

        this.getProducts = this.getProducts.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount(){
        this.getProducts();
      }

    getProducts() {
        axios.get('/api/inventory').then(res => {
        console.log(res.data);
        this.setState({
          inventory: res.data
        })
      })
    }

    deleteProduct(id){
        axios.delete(`api/product/${id}`).then(res => this.getProducts())
      }


    render(){
        let {editStartFn} = this.props;
        let {inventory} = this.state;
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