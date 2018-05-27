import * as React from 'react'

import { Test } from './Test'
import { Welcome } from './Welcome'

export const Main = () => (<div>
    <p>Main Bar</p>
    <Test />
    <Welcome name='123' />
</div>);
