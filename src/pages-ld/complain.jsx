
import Card from 'antd/lib/card/Card';
import { useState, useEffect } from 'react';
import{Menu, Button, Col, Row} from 'antd';
import StyleTable from '../component/table/table';
import UseIsMounted from '../hooks/mousted';
import StyleDropdown from '../component/styleDropdown';
import StyleDrawer from '../component/drawer';
import { message } from 'antd';
import { useSelector, useDispatch,shallowEqual } from 'react-redux';
import { allDATA, closeRequest} from '../store/action/complain';



export default function Complains() {
    const disptach = useDispatch();
    const complains = useSelector(state => state.complains.data, shallowEqual)



    const [viewDrawer, setViewDrawer] = useState(false)
    const [viewData, setViewData] =  useState({})
    const isMounted = UseIsMounted();

    const changeStatus = (value) =>{
        let res =  closeRequest(value)
        message.success(res)
        disptach(allDATA())
    }



    const openDrawer = (index) =>{
        setViewDrawer(true)
        setViewData(index)
    }




    
    const column = [
        {
            title: 'Title',
            dataIndex: "complainTitle",
            key: 'complainTitle',
        },
        {
            title: 'Complain',
            dataIndex: 'complainText',
            key: 'complainText',
        },
        {
            title: 'Complain Type',
            dataIndex: 'complainType',
            key: 'complainType',
        },
        {
            title: 'Time',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render : (value) =>(
                <>
                  {new Date(value).toDateString()}
                </>
              
            )
        },
        {
            title: 'Status',
            dataIndex: 'complainStatus',
            key: 'complainStatus',
            render : (value) =>(
                <>
                  {value}
                </>
              
            )
        },
        {
            title: 'Actions',
            dataIndex: '_id',
            key: '_id',
            render : (value,index) =>{
                const menuDropdown = (
                    <Menu>
                      <Menu.Item key={1} onClick={()=> changeStatus(value)} >Close Complain</Menu.Item>
                      <Menu.Item key={2} onClick={()=>openDrawer(index.collector)}>View Collector</Menu.Item>
                    </Menu>
                  );
                  return(
                    <StyleDropdown menu={menuDropdown} />
                  )
               
            }

        },
    ]
  
    
    useEffect(() => {
        disptach(allDATA())
    }, [disptach])


    let propsData = {
        columns: column,
        data: complains && complains.length > 0 ? complains : [], 
        pageSize: 50,
        height: 700,
    }
    return (
        <>
            <div className="create-form-cont bg-white mt-4">
                <h2 className='text-center sub-heading mb-4'>Complains</h2>
                {isMounted.current > 0 ? <StyleTable {...propsData} /> : ''}
            </div>
  
        {viewDrawer && 
            <StyleDrawer open={viewDrawer}>
                {viewData ? 
                <Card className='style-card collector-card'>
                        <h2>{viewData.firstName}</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                <span>Address</span>
                                    <span>{viewData.address}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>City</span>
                                    <span>{viewData.city}</span>
                                </td>
                                <td>
                                    <span>Area</span>
                                    <span>{viewData.area}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Phone</span>
                                    <span>{viewData.phoneNo}</span>
                                </td>
                                <td>
                                    <span>Create Account</span>
                                    <span>{new Date(viewData.createdAt).toDateString()}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Vehicle Type</span>
                                    <span>{viewData.vehicleType}</span>
                                </td>
                                <td>
                                    <span>Vehicle Number</span>
                                    <span>{viewData.vehicleNo}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>CNIC</span>
                                    <span>{viewData.cnicNo}</span>
                                </td>
                                <td>
                                    <span>Driving License</span>
                                    <span>{viewData.drivingLicenseNo}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='image-td'>
                                    <h4>CNIC</h4>
                                     <span><img src={viewData.cnicImg.front.url} alt="cnicImage" height={200} /></span>
                                     <span><img src={viewData.cnicImg.back.url} alt="cnicImage"   height={200} /></span>
                                </td>
                            </tr>
                            <tr>
                                <td className='image-td'>
                                    <h4>Driving License</h4>
                                     <span><img src={viewData.drivingLicenseImg.front.url} alt="cnicImage" height={200} /></span>
                                     <span><img src={viewData.drivingLicenseImg.back.url} alt="cnicImage"   height={200} /></span>
                                </td>
                            </tr>
                        </tbody>
                        
                    </table>

                    <Button  className='w-100' type="primary" onClick={() => setViewDrawer(false)}>close</Button>
                </Card>
                : 'Reopen Collector'
                
                
                }
               
            </StyleDrawer>
        }
        </>
    )
}