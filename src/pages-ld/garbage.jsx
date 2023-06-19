
import { useState, useEffect } from 'react';
import { Menu, Card, Button, message} from 'antd';
import StyleTable from '../component/table/table';
import UseIsMounted from '../hooks/mousted';
import StyleDropdown from '../component/styleDropdown';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { allDATA, getGarbageInfo, assignGarbage } from '../store/action/forSaleGarbage';
import {CheckCircleOutlined, StopOutlined } from '@ant-design/icons';
import StyleDrawer from '../component/drawer';


export default function Garbage() {
    const disptach = useDispatch();
    const forSaleGarbage = useSelector(state => state.forSaleGarbage.data, shallowEqual)

    const [viewData, setViewData] = useState({})
    const [showPurchaserModal, setShowPurchaserModal] = useState(false)

    const isMounted = UseIsMounted();

    const getPurchaserDetail =  (val) =>{
        getGarbageInfo(val)
        .then((data) =>{
            setViewData(data)
            setShowPurchaserModal(true)
        })
    }

    const updateOffer = (id) =>{
        assignGarbage(id)
        .then((data) =>{
            message.success('Garbage has been updated')
            disptach(allDATA())
            setShowPurchaserModal(false)
        })
    }

    console.log(viewData)

    const column = [
        {
            title: 'Garbage Type',
            dataIndex: "garbageType",
            key: 'garbageType',
        },
        {
            title: 'Offer Price',
            dataIndex: 'offeredPrice',
            key: 'offeredPrice',
            render: (value) => (
                <>
                    {'Rs.' + value}
                </>

            )
        },
        {
            title: 'PerKg Perice',
            dataIndex: 'perKgPrice',
            key: 'perKgPrice',
            render: (value) => (
                <>
                     {'Rs.' + value}
                </>

            )
        },
        {
            title: 'Sale Status',
            dataIndex: 'saleStatus',
            key: 'saleStatus',
            render: (value) => (value ? 'Sold' : 'On Sale')
        },
        {
            title: 'Weight',
            dataIndex: 'weight',
            key: 'weight',
            render: (value) => (
                <>
                    {value + 'KG'}
                </>

            )
        },
        {
            title: 'Actions',
            dataIndex: '_id',
            key: '_id',
            render: (value, {_id , purchaser} ) => {
                const menuDropdown = (
                    <Menu>
                        <Menu.Item key={2} onClick={() => getPurchaserDetail(_id)}>View Info</Menu.Item>
                    </Menu>
                );
                return (
                    <>
                        <StyleDropdown menu={menuDropdown} />
                    </>
                )

            }

        },
    ]


    useEffect(() => {
        disptach(allDATA())
    }, [disptach])


    let propsData = {
        columns: column,
        data: forSaleGarbage.prevMonth && forSaleGarbage.prevMonth.length > 0 ? forSaleGarbage.prevMonth : [],
        pageSize: 50,
        height: 700,
    }

    return (
        <>
            <div className='row pt-3'>
                {
                forSaleGarbage.currentMonth && forSaleGarbage.currentMonth.length > 0 && forSaleGarbage.currentMonth.map((val,key)=>(
                    <div className='col-md-4' key={key}>
                        <div className={val.saleStatus ? 'garbage-box sale' : 'garbage-box' }>
                            <h3>{val.garbageType}</h3>
                            <h5>Offer Price Rs.{val.offeredPrice}</h5>
                            <span>Weight {val.weight}KG, PerKG Rs.{val.perKgPrice}</span>
                            {
                                val.saleStatus ?   <CheckCircleOutlined title='Purchaser Detail' onClick={() => getPurchaserDetail(val._id)} /> :     <StopOutlined title='Purchaser Detail' onClick={() => getPurchaserDetail(val._id)} /> 
                            }
                        </div>
                    </div>
                ))
            }
            </div>
            <div className="create-form-cont bg-white mt-4">
                <div className='d-flex justify-content-between'>
                    <h2 className='text-center sub-heading mb-4'>Monthly For Sale Garbage</h2>
                </div>
                {isMounted.current > 0 ? <StyleTable {...propsData} /> : <p className='text-center'>Fetching Garbage</p>}
            </div>
            {showPurchaserModal && 
            <StyleDrawer open={showPurchaserModal}>
                {viewData ? 
                <Card className='style-card collector-card'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h2>Garbage Info</h2>
                        <div className='time-place'>
                            {viewData.garbage.purchaser ? 'Sold to ' + viewData.garbage.purchaser.organizationName.toUpperCase() :  
                            <>
                            {viewData && viewData.garbage.hours < 0 ? <Button type='primary' onClick={()=>updateOffer(viewData.garbage._id)}>{ viewData.offerPrices.length > 0 ? 'Sold To Highest' : 'Increase Time'}</Button>
                            : <p>{viewData.garbage.hours} : {viewData.garbage.minutes} : {viewData.garbage.seconds}</p>
                            }
                            </>
                            }

                        </div>
                    </div>
                    <table>
                        <tbody>
                        <tr>
                                <td>
                                    <span>Garbage Type</span>
                                    <span>{viewData.garbage.garbageType}</span>
                                </td>
                                <td>
                                    <span>offeredPrice</span>
                                    <span>Rs. {viewData.garbage.offeredPrice}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <span>PerKgPrice</span>
                                    <span>Rs. {viewData.garbage.perKgPrice}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Weight</span>
                                    <span>{viewData.garbage.weight} KG</span>
                                </td>
                                <td>
                                    <span>Purcahse</span>
                                    <span>{viewData.garbage.purchaser ? 'Sold' : 'On Sale'}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='my-3'>
                    <h2>Offer Prices</h2>
                    {viewData.offerPrices.length > 0 ?  viewData.offerPrices.map((val, key)=>(
                         <table className='my-3'>
                            <tbody>
                                <tr>
                                    <td>
                                        <span>Organiation Name</span>
                                        <span>{val.purchaser.organizationName}</span>
                                    </td>
                                    <td>
                                        <span>Offered Price</span>
                                        <span>Rs. {val.offeredPrice}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <span>Create Time</span>
                                        <span>Rs. {new Date(val.createdAt).toDateString()}</span>
                                    </td>
                                    <td>
                                    <span>Update Time</span>
                                        <span>Rs. {new Date(val.updatedAt).toDateString()}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    ))
                    :  <p className='text-center'>No Offer Exist</p>
                    }

                    </div>
                    <Button  className='w-100 mt-4' type="primary" onClick={() => setShowPurchaserModal(false)}>close</Button>
                </Card>
                : 'Reopen Supervisor'
                }
               
            </StyleDrawer>
        }

        </>
    )
}