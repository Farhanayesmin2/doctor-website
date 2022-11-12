import React from 'react';

const SharedButton = ({children}) => {
    return (
        <button 
        className="btn text-white bg-gradient-to-b from-amber-100 via-amber-900 to-amber-600">{children}</button>
    );
};

export default SharedButton;