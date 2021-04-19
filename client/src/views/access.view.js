import { FiAlertTriangle as AlertIcon } from 'react-icons/fi'

// import components
import { Button, TextField } from '../components'
import { useAccess } from '../hooks'

export default function Access() {
    const { name, email, onSubmit } = useAccess()

    return (
        <main className='Access'>
            <div className='Access-alert'>
                <AlertIcon className='Access-alert__icon' />

                <p className='Access-alert__message'>
                    Incorrect or missing access token entered. Please, create a
                    new access token and try again.
                </p>
            </div>

            <form className='Access-form' action='#' onSubmit={onSubmit}>
                <TextField
                    {...name}
                    label='Name'
                    placeholder='Juan Pérez'
                    required
                />

                <TextField
                    {...email}
                    label='Email'
                    placeholder='example@email.com'
                    required
                />

                <Button>create access token</Button>
            </form>
        </main>
    )
}
