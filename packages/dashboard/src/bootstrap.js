import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function to start up app
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

// 1. Development using this project index.html
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_dashboard-dev-root');
    if (el) {
        // probably running in isolation
        mount(el);
    }
}

// 2. Production using Container project index.html
export { mount };