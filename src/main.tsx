import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'
import { Store } from './store/Store'
import { PersistGate } from 'redux-persist/integration/react'
import './global.css'
import { persistStore } from 'redux-persist'

let persistor = persistStore(Store)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)
