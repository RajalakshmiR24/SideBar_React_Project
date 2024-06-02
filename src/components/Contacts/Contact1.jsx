import React from 'react';
import { useParams } from 'react-router-dom';

function Contact1() {
    const { id, name } = useParams();
    return (
        <div>Contact {id}, {name}</div>
    );
}

export default Contact1;
