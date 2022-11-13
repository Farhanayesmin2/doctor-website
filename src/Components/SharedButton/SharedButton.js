import React from 'react';

const SharedButton = ({children}) => {
    return (
        <button 
        className="btn text-white bg-gradient-to-b from-stone-100 via-stone-900 to-stone-400">{children}</button>
    );
};

export default SharedButton;