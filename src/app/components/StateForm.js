'use client'
import React, { useState } from 'react';

const StateForm = () => {
    const [number, setNumber] = useState(0);
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => { setNumber(number + 1) }}>increase</button>

        </div>
    );
};

export default StateForm;