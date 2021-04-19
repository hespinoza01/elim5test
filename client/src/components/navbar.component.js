import { Link } from 'react-router-dom'
import { IoMdClose as CloseIcon } from 'react-icons/io'

// import components
import { Button } from '../components'
import { useQueryParams } from '../hooks'

export default function Navbar({ onClose = () => {} }) {
    const Queryparams = useQueryParams()

    return (
        <nav className='Navbar'>
            <div className='Navbar-content'>
                <button onClick={onClose} className='btn-close'>
                    <CloseIcon />
                </button>

                <Link
                    to={`page2?option=Demo_1&token=${Queryparams.get('token')}`}
                >
                    <Button>demo 1</Button>
                </Link>

                <Link
                    to={`'page2?option=Demo_2&token=${Queryparams.get(
                        'token'
                    )}`}
                >
                    <Button>demo 2</Button>
                </Link>

                <Link
                    to={`page2?option=Demo_3&token=${Queryparams.get('token')}`}
                >
                    <Button>demo 3</Button>
                </Link>
            </div>
        </nav>
    )
}
