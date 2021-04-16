import { BrowserRouter as Router } from 'react-router-dom'

// import styles
import './styles/index.scss'

// import routes
import AppRoutes from './App.routes'

export default function App() {
    return (
        <main className='App'>
            <Router>
                <AppRoutes />
            </Router>
        </main>
    )
}
