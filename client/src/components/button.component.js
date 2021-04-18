/**
 * @param {String} className
 * @param {React.Component} children
 * @param {Function} onClick
 * @param {Boolean} primary
 */
export default function Button({
    className = '',
    children,
    onClick = () => {},
    primary,
}) {
    return (
        <button
            className={`Button ${primary ? 'primary' : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
