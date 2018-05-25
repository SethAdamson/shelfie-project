import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();

    this.state = {
      editting: false,
      changeProduct: {}
    }

    this.editStart = this.editStart.bind(this);
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
    let {editting} = this.state;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route component={Dashboard} path='/' exact />
          <Route component={Form} path='/add' />
          <Route component={Form} path='/edit/:id' exact />
        </Switch>
      </div>
    );
  }
}

export default App;


{/* <Header />
<Dashboard 
  editting={editting}
  editStartFn={this.editStart}
/>
<Form 
  editting={editting}
  changeProduct={this.state.changeProduct}
/> */}