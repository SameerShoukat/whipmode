import AppRoutes from './routes';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'


export default function App() {
    return (
        <BrowserRouter>
            <Provider store={store} >
                <AppRoutes />
            </Provider>
        </BrowserRouter>
    )
}

