import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceDetail from '../../ServiceDetail/ServiceDetail';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price,id } = service;
    const navigate =useNavigate();
    const navigateServiceDetail = (id,service) =>{
        navigate(`/service/${id}`);
        
        
    }
    return (
        <div className='service '>
            <h2>{name}</h2>
            <img className='' src={img} alt="" />
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
           <button onClick={()=>{navigateServiceDetail(id,service)}} className="btn btn-primary">Book:{name}</button>
          
        </div>
    );
};

export default Service;