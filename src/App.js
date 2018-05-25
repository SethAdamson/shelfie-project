import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: [],
      editting: false,
      changeProduct: {}
    }

    this.getProducts = this.getProducts.bind(this);
    this.editStart = this.editStart.bind(this);
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

  editStart(obj){
    this.setState({
      editting: true,
      changeProduct: {
        id: obj.id,
        name: obj.name,
        price: obj.price,
        imgurl: obj.imgurl
      }
    })
  }


  render() {
    let {inventory, editting} = this.state;
    return (
      <div className="App">
        <Header />
        <Dashboard 
          inventory={inventory}
          editting={editting}
          editStartFn={this.editStart}
          getProducts={this.getProducts}
        />
        <Form 
          inventory={inventory}
          getProducts={this.getProducts}
          editting={editting}
          changeProduct={this.state.changeProduct}
        />
      </div>
    );
  }
}

export default App;
