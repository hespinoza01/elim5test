import { Redirect } from 'react-router-dom'
import { Http } from '../utils'
import { useHistory } from 'react-router-dom'
import { useQueryParams } from '../hooks'

export default function useVerifyToken() {
    const History = useHistory()
    const QueryParams = useQueryParams()

    const onVerifyToken = async () => {
        const { status } = await Http.get('/user', {
            headers: { Authorization: QueryParams.get('token') },
        })

        if (status === 401) {
            History.push('/access')
        }
    }

    return {
        onVerifyToken,
    }
}
