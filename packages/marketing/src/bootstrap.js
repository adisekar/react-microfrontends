import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    );
};

// 1. Development using this project index.html
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_marketing-dev-root');
    if (el) {
        // probably running in isolation
        mount(el);
    }
}

// 2. Production using Container project index.html
export { mount };