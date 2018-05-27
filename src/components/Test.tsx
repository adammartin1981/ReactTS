import * as React from 'react'
import { Welcome } from './Welcome';

const getStuff = (): string => {
    return 'foo';
};

export const Test: React.SFC<null> = () => (<div>
    <p>{getStuff()}</p>
    <p>Morris</p>

    {Welcome({name: 'Morris'})}
</div>);
