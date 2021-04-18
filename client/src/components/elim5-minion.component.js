import { BiPlus } from 'react-icons/bi'

// inmport assets
import { ReactComponent as Elim5MinionIcon } from '../assets/elim5_minion.svg'

// import hooks
import { useElim5Minion } from '../hooks'

export default function Elim5Minion() {
    const {
        buttonTopPosition,
        buttonLeftPosition,
        showAlert,
        alertTopPosition,
        alertLeftPosition,
        elim5MinionRef,
        calcAlertPosition,
    } = useElim5Minion()

    return (
        <div ref={elim5MinionRef} className='Elim5Minion'>
            <Elim5MinionIcon />
            <button
                style={{ top: buttonTopPosition, left: buttonLeftPosition }}
                className='Elim5Minion-button'
                onClick={calcAlertPosition}
            >
                <BiPlus className='Elim5Minion-button__icon' />
            </button>

            {showAlert && (
                <span
                    style={{ top: alertTopPosition, left: alertLeftPosition }}
                    className='Elim5Minion-alert'
                >
                    hello!
                </span>
            )}
        </div>
    )
}
