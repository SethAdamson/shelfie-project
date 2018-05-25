import React from 'react';
import {Link} from 'react-router-dom';
import '../../default-img.png'

export default function Product(props){
    console.log(props)
    let {id, name, price, imgurl} = props
        return(
            <div key={props.id} className='productParent'>
                <h1 className='img'><img src={props.imgurl} onError={(e)=> e.target.src='../../default-img.png'}/></h1>
                <p>
                    <h1>{props.name}</h1>
                    <h1>{props.price}</h1>
                </p>
                <h2>
                    <Link to={`/edit/${id}`} ><button className='edit'>Edit</button></Link>
                    <button className='delete' onClick={() => props.deleteProduct(props.id)} >Delete</button>
                </h2>
            </div> 
        )
}

// onClick={() => props.editStart({id, name, price, imgurl})} 