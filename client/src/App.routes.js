import { Route, Switch } from 'react-router-dom'

// import components
import { PrivateRoute } from './components'

// import views
import { Home, Page2 } from './views'

export default function AppRoutes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/page2' component={Page2} />
        </Switch>
    )
}
