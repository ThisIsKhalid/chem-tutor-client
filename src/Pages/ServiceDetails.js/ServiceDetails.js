import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    let {id} = useParams();

    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [id])


    return (
        <div>
            <h1>service details</h1>
        </div>
    );
};

export default ServiceDetails;