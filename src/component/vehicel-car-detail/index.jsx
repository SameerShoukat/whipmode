import { Button } from "antd";
import './style.css'
import { useState } from "react";
import { ArrowLeftOutlined, FieldTimeOutlined, PartitionOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';



export default function VehicalCarDetail({setCardDetail}){
  
    return(
        <>

            <div className="car-card-detail ">
                <p> <ArrowLeftOutlined className="mx-3" onClick={()=>{ setCardDetail(false)}} /> <b>Hyundai Santa Fe</b> <span className="theme-color">Paxton</span> </p>
                <div className="style-car-card no-border grey-border-card d-flex align-items-center justify-content-between">
                    <img src={require("../../assets/images/car1.png")} alt="car1" />
                    <div className="card-details text-start">
                        <p className="mb-1"><FieldTimeOutlined className="mx-2" />06/14, 4:30 AM — 5:30 AM EDT</p>
                        <p><PartitionOutlined className="mx-2" />car address will come here 4C9 <Button type="link"> View details</Button></p>
                    </div>
                </div>  
                <div className="feature-card grey-border-card">
                    <h4>Features</h4>
                    <ul className="list-inline">
                        <li><CheckOutlined /> Fuel level 82%</li>
                        <li><CheckOutlined /> Drive train front wheel drive</li>
                        <li><CheckOutlined /> 5 seats</li>
                        <li><CheckOutlined /> Automatic transmission</li>
                        <li><CheckOutlined /> 4 doors</li>
                    </ul>
                </div>
                <div >
                    <div className="feature-card border-bottom mb-4">
                        <h4>Trip</h4>
                        <ul className="list-inline">
                            <li className="mb-2">
                                <h6 className="mb-1">Rates</h6>
                                <div className="d-flex justify-content-between">
                                    <span>$17.00 x 1 hour</span> <span>$17.00</span> 
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="feature-card style-car-card mb-4 ">
                        <h4>Included</h4>
                        <ul className="list-inline">
                            <li><CheckOutlined /> Gas included</li>
                            <li><CheckOutlined /> 200 KM per day</li>
                            <li><CheckOutlined /> Secondary insurance</li>
                            <li><CheckOutlined /> 24/7 roadside assistance</li>
                        </ul>
                    </div>
                    <div className="feature-card style-car-card mb-2">
                        <h4>Excluded</h4>
                        <ul className="list-inline">
                            <li><CloseOutlined /> $25.00 application fee</li>
                            <li><CloseOutlined /> Membership fee</li>
                            <li><CloseOutlined /> Young driver fee</li>
                        </ul>
                    </div>
                    <p className="text-danger label-font mb-4">
                        The cost of a trip may be updated when other charges, such as tolls and violations, are applied. In some cases, these charges may take weeks to appear.
                    </p>
                </div>
                <Button type="primary" className="round-btn w-100"> Apply</Button>

               
            </div>        
        </>
    )
}