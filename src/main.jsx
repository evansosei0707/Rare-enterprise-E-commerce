import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ProductsProvider } from './Context/products_context.jsx';
import { CartProvider } from './context/cart_context.jsx';
import { UserProvider } from './context/user_context.jsx';
UserProvider
import { Auth0Provider } from '@auth0/auth0-react';
import { FilterProvider } from './Context/filter_context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain={import.meta.env.VITE_APP_DOMAIN}
    clientId={import.meta.env.VITE_APP_CLIENTID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider> 
      </ProductsProvider>
    </UserProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
