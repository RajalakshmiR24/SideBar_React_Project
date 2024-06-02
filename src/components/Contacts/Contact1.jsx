import React from 'react';
import { useParams } from 'react-router-dom';

function Contact1() {
    const { name } = useParams();
    return (
        <div>Contact {name}</div>
    );
}

export default Contact1;
