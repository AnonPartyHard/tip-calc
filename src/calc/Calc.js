import { useEffect, useState } from 'react'
import Form from '../form/Form'
import Result from '../result/Result'
import './Calc.css'

const defaultInputs = {bill:0, people:1, tip:0};

const Calc = () => {
    const [inputs, setInputs] = useState(defaultInputs)
    const [calculated, setCalculated] = useState({total:0, tip:0})

    useEffect(()=>{
        //parseFloat all inputs values
        Object.entries(inputs).reduce(
            (obj, [key, value]) => (obj[key] = parseFloat(value), obj), 
            inputs
        )
        const tip = inputs.bill * (inputs.tip / 100)
        const tipPer = tip / inputs.people;
        const total = (inputs.bill + tip) / inputs.people
        setCalculated({total:total.toFixed(2), tip:tipPer.toFixed(2)})
    }, [inputs])

    const InputsChanged = (name, value) => {
        setInputs({...inputs, [name]:value})
    }

    const Reset = () => {
        setInputs(defaultInputs)
    }

    return(
        <div className='calc'>
            <div className='calc-form'>
                <Form inputs={inputs} inputChanged={InputsChanged}/>
            </div>
            <div className='calc-result'>
                <Result calculated={calculated} onReset={Reset}/>
            </div>
        </div>
    )
}


export default Calc