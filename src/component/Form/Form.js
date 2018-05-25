import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            price: 0,
            imgurl: '',
            current: null
        }
    }

    componentDidUpdate(props){
        if(props.changeProduct !== this.props.changeProduct){
            this.setState({
                current: this.props.changeProduct.id,
                name: this.props.changeProduct.name,
                price: this.props.changeProduct.price,
                imgurl: this.props.changeProduct.imgurl,
            })
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
    this.refs.form.reset();
}

postProduct(){
    let {name, price, imgurl} = this.state;
    axios.post('/api/product',{name, price, imgurl}).then(res => {
        this.props.getProducts();
        this.resetState();
    }) 
}

editProduct() {
    let {name, price, imgurl, current} = this.state;
    axios.put(`/api/product/${current}`,{name, price, imgurl}).then(res => {
        this.props.getProducts();
        this.resetState();
    })
}


    render(){
        console.log(this.state)
        let {editting} = this.props
        return(
            <div className='formParent'>
                <form ref='form' >
                    Image URL:
                    <input 
                        className='image' 
                        onChange={(e) => this.handleImage(e.target.value)}
                        />
                    Product Name:
                    <input 
                        className='name' 
                        onChange={(e) => this.handleName(e.target.value)} 
                        />
                    Price:
                    <input 
                        className='price' 
                        onChange={(e) => this.handlePrice(e.target.value)} 
                        />                   
                    <button type='reset' className='cancel' onClick={() => this.resetState()} >Cancel</button>
                    {
                        editting
                        ?
                        <button type='submit' className='add' onClick={() => this.editProduct()} >Save Changes</button>
                        :
                        <button type='submit' className='add' onClick={() => this.postProduct()}>Add to Inventory</button>
                    }
                </form>
            </div> 
        )
    }
}