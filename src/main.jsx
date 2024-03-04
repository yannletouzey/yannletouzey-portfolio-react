import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './scss/style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
