import { Route, Redirect } from 'react-router-dom'
import { useEffect } from 'react'
import { useVerifyToken } from '../hooks'

/**
 * Protect routes that require a prior login by verifying access keys before
 * rendering a protected view
 * @param {React.Component} component - Component to render
 * @param {String} path - route path to capture
 * */
export default function PrivateRoute({ component, path }) {
    const { onVerifyToken } = useVerifyToken()

    // Check if exist a prev login access to can render request view
    const _component = true ? component : () => <Redirect to='/access' />

    useEffect(() => {
        onVerifyToken()
    }, [])

    return <Route exact path={path} component={_component} />
}
