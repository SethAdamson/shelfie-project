import React, {Component} from 'react';
import '../../shelfie_icon.png';
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header(){
        return(
            <div className='header'>
                <img className='shelfie' src={require('../../shelfie_icon.png')} alt='shelfie' />
                <h1 className='title'>Shelfie</h1>
                <Link to='/'><button className='dashboard'>Dashboard</button></Link>
                <Link to='/add'><button className='inventory'>Add Inventory</button></Link>
            </div> 
        )
}