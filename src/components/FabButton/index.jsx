import './fab-button.style.css'

export function FabButton({ children, ...rest }) {
    return (
        <button className='fab'{...rest}>
            {children}
        </button>
    )
}