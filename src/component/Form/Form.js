import React, {Component} from 'react';

export default class Form extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }

//Handle changes for each input, post to database, clear inputs.3

handleImage(val){
    this.setState({
        imgurl: val
    })
}

handleName(val){
    this.setState({
        name: val
    })
}

handlePrice(val){
    this.setState({
        price: val
    })
}

resetState(){
    this.setState({
        name: '',
        price: 0,
        imgurl: ''
    })
}


    render(){
        console.log(this.state)
        return(
            <div className='formParent'>
                Image URL:
                <input className='image' onChange={(e) => this.handleImage(e.target.value)}/>
                Product Name:
                <input className='name' onChange={(e) => this.handleName(e.target.value)} />
                Price:
                <input className='price' onChange={(e) => this.handlePrice(e.target.value)} />
                <button className='cancel' onClick={() => this.resetState()} >Cancel</button>
                <button  className=''>Add to Inventory</button>
            </div> 
        )
    }
}