import { QueryClient, QueryClientProvider } from 'react-query'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/Store';
import { analytics } from './Firebase.config';
import { Provider } from 'react-redux'
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <Provider store={store} appAnalytics={analytics}>
    <QueryClientProvider client={queryClient}>    
    <PersistGate persistor={persistor} loading={"loading"}>
    <App />
    </PersistGate>
    </QueryClientProvider>
    </Provider>
  </>,
)
