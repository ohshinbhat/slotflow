import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  {BrowserRouter as Router} from 'react-router-dom'
import { AppContextProvider } from './context/AppContext.jsx'
import { UserContextProvider } from './context/UserContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <Router>  
      <AppContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </AppContextProvider>      
    </Router>
  </StrictMode>,
)
