import { Route, Switch } from 'react-router-dom'

// import components
import { PrivateRoute } from './components'

// import views
import { Home, Page2, Access } from './views'

export default function AppRoutes() {
    return (
        <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute path='/page2' component={Page2} />
            <Route path='/access' component={Access} />
        </Switch>
    )
}
