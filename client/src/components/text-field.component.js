import React, { useMemo } from 'react'
import { FaInfoCircle } from 'react-icons/fa'

// import utils
import { randomKey } from '../utils'

/**
 * @param {String} label - message to describe input
 * @param {String} placeholder
 * @param {String} type - type of input
 * @param {String} value - input value
 * @param {Function} - capture on change input value
 * @param {Boolean} required - show required indicator
 */
export default React.memo(function TextField({
    label,
    placeholder = '',
    type = 'text',
    value,
    onChange = () => {},
    required,
}) {
    // create id for link label with input
    const inputId = useMemo(() => randomKey(), [])

    return (
        <fieldset className='TextField'>
            {label && (
                <label className='TextField-label' htmlFor={inputId}>
                    {label}
                </label>
            )}

            <input
                className='TextField-input'
                id={inputId}
                placeholder={placeholder}
                required={required}
                type={type}
                value={value}
                onChange={onChange}
            />

            {required && (
                <div className='TextField-required'>
                    <FaInfoCircle />
                    <span>required</span>
                </div>
            )}
        </fieldset>
    )
})
