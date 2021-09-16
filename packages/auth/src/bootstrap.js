import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

// Mount function to start up app
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {

    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
};

// 1. Development using this project index.html
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_auth-dev-root');
    if (el) {
        // probably running in isolation
        mount(el, { defaultHistory: createBrowserHistory() });
    }
}

// 2. Production using Container project index.html
export { mount };