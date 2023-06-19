import { Button } from "antd";
import './style.css'



export default function VehicleCard({setCardDetail}){
  
    return(
        <>
     
            <div className="style-car-card d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img src={require("../../assets/images/car1.png")} alt="car1" />
                    <h3>Hyundai ElantraEmail</h3>
                </div>

                <div className="card-details">
                    <span>Starting at</span>
                    <h3>$15.00/hr</h3>
                    <p>$136.25/day</p>
                    <Button type="primary" className="round-btn" onClick={()=>{setCardDetail(true)}}>Select Car</Button>
                </div>
            </div>    
        
        </>
    )
}