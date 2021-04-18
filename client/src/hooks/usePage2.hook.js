/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, useCallback } from 'react'

// import hooks
import { useQueryParams } from '../hooks'

export default function usePage2() {
    const QueryParams = useQueryParams()

    const demo1Ref = useRef(null)
    const demo2Ref = useRef(null)
    const demo3Ref = useRef(null)

    /**
     * Make scroll to respective demo when page is loaded
     */
    const scrollToDemo = () => {
        // extract demo option from url param
        const demoOption = QueryParams.get('option')
        const scrollOptions = { behavior: 'smooth', block: 'start' }

        switch (demoOption) {
            case 'Demo_1':
                demo1Ref?.current.scrollIntoView(scrollOptions)
                break

            case 'Demo_2':
                demo2Ref?.current.scrollIntoView(scrollOptions)
                break

            case 'Demo_3':
                demo3Ref?.current.scrollIntoView(scrollOptions)
                break

            default:
                return
        }
    }

    const goToDemoSection = useCallback(() => {
        setTimeout(scrollToDemo, 500)
    }, [])

    useEffect(() => {
        goToDemoSection()
    }, [])

    return {
        demo1Ref,
        demo2Ref,
        demo3Ref,
    }
}
