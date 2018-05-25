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
      inventory: []
    }

    this.getProducts = this.getProducts.bind(this);

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


  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard 
          inventory={this.state.inventory}
        />
        <Form 
          getProducts={this.getProducts}
        />
      </div>
    );
  }
}

export default App;
