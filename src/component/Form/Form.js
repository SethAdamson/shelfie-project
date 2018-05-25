import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Form extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            price: 0,
            imgurl: '',
            current: null
        }

        this.handleImage = this.handleImage.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.resetState = this.resetState.bind(this);
        this.postProduct = this.postProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.getSingle = this.getSingle.bind(this);
    }

    componentDidMount(){
        if(this.props.match.params.id){
            this.getSingle();
        }
    }

    componentDidUpdate(props){
        if(props.match.params.id!== this.props.match.params.id){
            this.resetState();
        }
    }

    // componentDidUpdate(props){
    //     if(props.changeProduct !== this.props.changeProduct){
    //         this.setState({
    //             current: this.props.changeProduct.id,
    //             name: this.props.changeProduct.name,
    //             price: this.props.changeProduct.price,
    //             imgurl: this.props.changeProduct.imgurl,
    //         })
    //     }
    // }

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
        imgurl: '',
        current: null
    })
}

postProduct(){
    let {name, price, imgurl} = this.state;
    axios.post('/api/product',{name, price, imgurl}).then(res => {
        // this.props.getProducts();
        this.resetState();
    }) 
}

editProduct() {
    let {name, price, imgurl, current} = this.state;
    axios.put(`/api/product/${current}`,{name, price, imgurl}).then(res => {
        // this.props.getProducts();
        this.resetState();
    })
}

getSingle() {
    axios.get(`/api/product/${this.props.match.params.id}`).then(res => {
    console.log(res.data);
    this.setState({
        name: res.data[0].name,
        price: res.data[0].price,
        imgurl: res.data[0].imgurl,
        current: res.data[0].id
    })
    })
}


    render(){
        console.log(this.state);
        // console.log(this.props.match.params.id);
        let {editting} = this.props
        let {name,price,imgurl} = this.state;
        return(
            <div className='formParent'>
                <form ref='form' >
                    Image URL:
                    <input 
                        className='image' 
                        onChange={(e) => this.handleImage(e.target.value)}
                        value={imgurl}
                        />
                    Product Name:
                    <input 
                        className='name' 
                        onChange={(e) => this.handleName(e.target.value)} 
                        value={name}
                        />
                    Price:
                    <input 
                        className='price' 
                        onChange={(e) => this.handlePrice(e.target.value)} 
                        value={price}
                        />                   
                    <button type='reset' className='cancel' onClick={() => this.resetState()} >Cancel</button>
                    {
                        this.props.match.params.id
                        ?
                        <Link to='/'><button type='submit' className='add' onClick={() => this.editProduct()} >Save Changes</button></Link>
                        :
                        <Link to='/'><button type='submit' className='add' onClick={() => this.postProduct()}>Add to Inventory</button></Link>
                    }
                </form>
            </div> 
        )
    }
}