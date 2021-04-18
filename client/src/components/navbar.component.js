import { IoMdClose as CloseIcon } from 'react-icons/io'

// import components
import { Button } from '../components'

export default function Navbar({ onClose = () => {} }) {
    return (
        <nav className='Navbar'>
            <div className='Navbar-content'>
                <button onClick={onClose} className='btn-close'>
                    <CloseIcon />
                </button>
                <Button>demo 1</Button>
                <Button>demo 2</Button>
                <Button>demo 3</Button>
            </div>
        </nav>
    )
}
