import React from 'react';
import './Image.css';

const Pmg = (props) => {
    return (

        <div className='gallary-item' style={{height:`${props.size}`}} >

            <div className='box'>
                <img src={props.img} alt="" />
                <div className='overlay'>{props.price}$</div>
                <div><i className= {props.icon}></i></div>
            </div>

        </div>

    )
}

export default Pmg