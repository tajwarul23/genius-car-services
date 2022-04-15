import React, { useEffect, useState } from 'react';
import useServices from '../../../Hooks/useServices';
import ServiceDetail from '../../ServiceDetail/ServiceDetail';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services,setServices]=useServices([]);
    return (
        <div id="services" className='container '>
          <div className="row">
          <h2 className='title  text-primary m-5'>Our Total Services:({services.length})</h2>
            <div className="services-container">
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                
                
                ></Service>)
                
                
            }
            
            </div>
          </div>
        </div>
    );
};

export default Services;