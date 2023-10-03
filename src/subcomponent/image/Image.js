// Image.js
import React, { useState } from 'react';
import Pmg from '../image/Pmg';
import { Link, useNavigate } from 'react-router-dom';
import db from './database';

const Image = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/singlepage/${id}`);
  };

  return (
    <section id='gallary-conatiner'>
      <div className='gallary'>
        {db.products.map((element) => (
          <div key={element.id} onClick={() => handleClick(element.id)}>
            <Pmg img={element.imgsrc} price={element.price} icon={element.icon} id={element.id}  size = {"15rem"}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Image;
