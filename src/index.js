import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React Webpack Babel Setup Complete!';

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById('app')
);

module.hot.accept();