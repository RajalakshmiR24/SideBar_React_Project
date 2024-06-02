import React from 'react';
import { useParams } from 'react-router-dom';

function Contact2() {
    const { name } = useParams();
    return (
        <div>Contact {name}</div>
    );
}

export default Contact2;
