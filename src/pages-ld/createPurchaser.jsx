
import PurchaserForm from "../component/createPurchase"
import bg from '../assets/images/clean.jpg'

export default function AddPurchaser(){
    return(
        <>
        <div className="section banner overlay d-flex align-items-center" style={{minHeight : "100vh", backgroundImage : `url(${bg})`}}>
            <div className="container position-relative">
                    <PurchaserForm />
            </div>
        </div>
        
        </>
    )
}