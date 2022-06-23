import InputNum from '../components/input/Input'
import Button from '../components/button/Button'
import './Form.css'
import { ReactComponent as dollarIcon } from '../images/icon-dollar.svg'
import { ReactComponent as peopleIcon } from '../images/icon-person.svg'
import { useState } from 'react'

const buttons = [
    {label:"5%", value:5},
    {label:"10%", value:10},
    {label:"15%", value:15},
    {label:"25%", value:25},
    {label:"50%", value:50},
]

const Form = ({inputs, inputChanged}) => {
    const [currentTip, setCurrentTip] = useState(null)

    const TipChange = (name, value) => {
        inputChanged(name, value)
        setCurrentTip(value)
    }

    return(
        <div className='form'>
            <InputNum 
                name={'bill'} 
                value={inputs.bill} 
                label={'Bill'} 
                defaultValue="0" 
                min="0" 
                Icon={dollarIcon} 
                onChangeFunc={inputChanged}/>
            <label>Select tip %</label>
            <div className='buttons-group'>
                {
                    buttons.map( b => 
                        <div className='buttons-group-item'>
                            <Button 
                                key={b.label+b.value}
                                name="tip" 
                                label={b.label} 
                                value={b.value} 
                                active={currentTip == b.value} 
                                onClickFunc={TipChange}
                            />
                        </div>
                    )
                }
                <div className='buttons-group-item'>
                    <InputNum 
                        name={'tip'} 
                        value={inputs.tip}
                        defaultValue="0" 
                        placeholder={"Custom"}  
                        min="0" 
                        onChangeFunc={TipChange} 
                        onFocusFunc={TipChange}/>
                </div>
            </div>
            <InputNum 
                name={'people'} 
                value={inputs.people} 
                label={'Number of People'} 
                defaultValue="1" 
                min="1" 
                Icon={peopleIcon} 
                onChangeFunc={inputChanged}/>
        </div>
    )
}
export default Form