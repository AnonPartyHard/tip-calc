import Calc from '../calc/Calc'
import './Layout.css'

const Layout = () => 
<div className='layout'>
    <div className='header'>
        <span>SPLI<br/>TTER</span>
    </div>
    <div className='body'>
        <div className='tip-calc'>
            <Calc/>
        </div>
    </div>
</div>

export default Layout