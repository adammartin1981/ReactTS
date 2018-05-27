import * as React from 'react'

const getStuff = () => {
    return 'foo';
};

export const Test = (
    <div>
        <p>{getStuff()}</p>
        <p>Morris</p>
    </div>
);
