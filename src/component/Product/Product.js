import React, {Component} from 'react';

export default function Product(props){
        return(
            <div className='productParent'>
                <h1>{props.name}</h1>
                <h1>{props.price}</h1>
                <h1>{props.imgurl}</h1>
            </div> 
        )
}