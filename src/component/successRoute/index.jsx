

import './success.scss'
import sucesss from '../../assets/images/check.png'


export default function SuccessRoute({heading, message}) {
    return (
       
                <div className='success-route'>
                    <img src={sucesss} alt="sucess" />
                    <h3>{heading}</h3>
                    <p>{message}</p>
                </div>
    
    )
}