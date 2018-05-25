import React, {Component} from 'react';

export default function Product(props){
    console.log(props)
    let {id, name, price, imgurl} = props
        return(
            <div key={props.id} className='productParent'>
                <h1>{props.name}</h1>
                <h1>{props.price}</h1>
                <h1>{props.imgurl}</h1>
                <h2>
                    <button className='edit' onClick={() => props.editStart({id, name, price, imgurl})} >Edit</button>
                    <button className='delete' onClick={() => props.deleteProduct(props.id)} >Delete</button>
                </h2>
            </div> 
        )
}