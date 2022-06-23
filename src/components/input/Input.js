import { useRef, useState } from "react";
import './Input.css'

const InputNum = ({name, value, label, placeholder, defaultValue, min, Icon, onChangeFunc, onFocusFunc}) => {
    const [focused, setFocused] = useState(false)
    const [highlight, setHighlight] = useState(false)
    const ref = useRef(null)

    const onChange = (e) => {
        if(e.target.value !== ""){
            onChangeFunc(name, e.target.value)
        }
        setHighlight(e.target.value > min)
    }

    const Focus = () => {
        setFocused(true)
        onFocusFunc && onFocusFunc(name, value)
        ref.current.focus()
    }
    
    return(
        <div className={`input-num ${highlight ? 'highlight' : 'default'}`}>
            { label && <div className="input-label"><label>{label}</label></div> }
            { Icon && <div className="input-icon"><Icon/></div> }
            <input 
                ref={ref}
                name={name}
                type='number' 
                min={min}
                value={value}
                onFocus={Focus}
                onBlur={()=>{setFocused(false)}}
                onChange={onChange}/>
            { 
                placeholder && value <= min && !focused && 
                <div className="input-placeholder-cover" onClick={Focus}>
                    <div className="input-placeholder-label">{placeholder}</div>
                </div> 
            }
        </div>
    )
}

export default InputNum;