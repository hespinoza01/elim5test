// import hooks
import { useInput, useAppContext } from '../hooks'
import { actions } from '../store'

// import utils
import { Http } from '../utils'

export default function useAccess() {
    const { 1: dispatch } = useAppContext()

    const [name] = useInput('')
    const [email] = useInput('')

    const onSubmit = async e => {
        e.preventDefault()

        const dataSend = {
            name: name.value,
            email: email.value,
        }

        const { data } = await Http.post('/user', dataSend)

        if (!data.error) {
            dispatch(actions.setToken, data.token)
            window.open(`/?token=${data.token}`, '_blank').focus()
        }
    }

    return {
        name,
        email,
        onSubmit,
    }
}
