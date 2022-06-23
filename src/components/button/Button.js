import './Button.css'

const Button = ({name, label, value, active, onClickFunc}) => {
    return(
        <div className={`button ${active ? 'active' : 'inactive'}`}>
            <button 
                name={name} 
                value={value} 
                onClick={()=>{onClickFunc(name, value)}}>
                {label}
            </button>
        </div>
    )
}

export default Button;