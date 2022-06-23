import Button from '../components/button/Button'
import './Result.css'

const Result = ({calculated, onReset}) => {

    return(
        <div className='result'>
            <div className='result-table'>
                <table>
                    <tbody>
                        <tr>
                            <td>Tip Amount <br/> <small>/ person</small> 
                            </td><td>${calculated.tip}</td>
                        </tr>
                        <tr>
                            <td>Total <br/> <small>/ person</small> </td>
                            <td>${calculated.total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='result-button'>
                <div className='reset'><Button label="RESET" onClickFunc={onReset} /></div>
            </div>
        </div>
    )
}

export default Result