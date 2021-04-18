import { useEffect, useCallback, useRef, useState } from 'react'

export default function useElim5Minion() {
    const [buttonTopPosition, setButtonTopPosition] = useState(0)
    const [buttonLeftPosition, setButtonLeftPosition] = useState(0)
    const elim5MinionRef = useRef(null)

    const [showAlert, setShowAlert] = useState(false)
    const [alertTopPosition, setAlertTopPosition] = useState(0)
    const [alertLeftPosition, setAlertLeftPosition] = useState(0)

    /**
     * calc box positions for button based on parent container dimensions
     */
    const calcButtonPosition = () => {
        if (elim5MinionRef.current) {
            const { current } = elim5MinionRef
            const clientRect = current.getBoundingClientRect()

            // extract component dimensions
            const { width, height } = clientRect

            // calc top and left positions for button
            const _top = height * 0.2
            const _left = width * 0.8

            setButtonTopPosition(_top)
            setButtonLeftPosition(_left)
        }
    }

    /**
     * calculate alert position based on the current location of the button
     */
    const calcAlertPosition = e => {
        const clientRect = e.target.getBoundingClientRect()

        // extract component dimensions
        const { left, top } = clientRect

        setAlertTopPosition(top)
        setAlertLeftPosition(left)
        setShowAlert(true)
        setTimeout(() => setShowAlert(false), 5000)
    }

    // init button positions
    const initButtonPosition = useCallback(calcButtonPosition, [elim5MinionRef])

    useEffect(() => {
        initButtonPosition()
        window.addEventListener('resize', calcButtonPosition)

        return () => {
            window.removeEventListener('resize', calcButtonPosition)
        }
    }, [])

    return {
        buttonTopPosition,
        buttonLeftPosition,
        showAlert,
        alertTopPosition,
        alertLeftPosition,
        elim5MinionRef,
        calcAlertPosition,
    }
}
