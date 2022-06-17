import React from 'react';
import three from '../images/3.jpeg';

const Three = () => {
    const to = () => {
        window.location.href="/three";
      };
    return (
        <div>
            <img onClick={to} src={three} />
        </div>
    );
};

export default Three;