import { Button } from "antd";
import './style.css'



export default function VehicleCard({setCardDetail, cars}){
    console.log(cars.carImage)
  
    return(
        <>
     
            <div className="style-car-card d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                    <img src={cars.carImage.length > 0 && cars.carImage[0].url} alt="car1" />
                    <h3>{cars.vehicleName}</h3>
                </div>

                <div className="card-details">
                    <span>Starting at</span>
                    <h3>{cars.currency + ' '+ cars.pricePerHour}</h3>
                    <p>{cars.currency} {cars.pricePerHour * 8}</p>
                    <Button type="primary" className="round-btn" onClick={()=>{setCardDetail(true)}}>Select Car</Button>
                </div>
            </div>    
        
        </>
    )
}