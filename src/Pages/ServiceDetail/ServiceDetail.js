import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServices from '../../Hooks/useServices';


const ServiceDetail = () => {
    const {serviceId}=useParams();
    const [services]=useServices();
    
    
   
    console.log(services)
    return (
        <div>
            <h2>Welcome to Details: {serviceId} </h2>
            
            
            <div className='d-flex justify-content-center'>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
