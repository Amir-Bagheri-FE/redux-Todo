import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import { Provider } from 'react-redux'
import { Store } from './App/Store'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={Store}>
 <Home />
 </Provider>
  </StrictMode>
)
