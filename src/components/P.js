import React from 'react';

const P = ({ children, ...rest }) => {
    return (
        <p className="question" {...rest}> {...children}</p>
    )
};

export default P;

