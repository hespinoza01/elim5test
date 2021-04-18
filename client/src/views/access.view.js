import { FiAlertTriangle as AlertIcon } from 'react-icons/fi'

// import components
import { Button, TextField } from '../components'

export default function Access() {
    return (
        <main className='Access'>
            <div className='Access-alert'>
                <AlertIcon className='Access-alert__icon' />

                <p className='Access-alert__message'>
                    Incorrect or missing access token entered. Please, create a
                    new access token and try again.
                </p>
            </div>

            <form className='Access-form' action='#'>
                <TextField label='Name' placeholder='Juan Pérez' required />

                <TextField
                    label='Email'
                    placeholder='example@email.com'
                    required
                />

                <Button>create access token</Button>
            </form>
        </main>
    )
}
