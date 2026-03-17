import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
 
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux';
import Store from './CrudRedux/store.jsx';
 
 
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={Store }>
      <App />
    </Provider>
  </BrowserRouter>
 
 
)
 
 