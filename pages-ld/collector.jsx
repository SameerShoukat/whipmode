
import Card from 'antd/lib/card/Card';
import { useState, useEffect } from 'react';
import{Menu, Button} from 'antd';
import StyleTable from '../component/table/table';
import UseIsMounted from '../hooks/mousted';
import StyleDropdown from '../component/styleDropdown';
import StyleDrawer from '../component/drawer';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch,shallowEqual } from 'react-redux';
import { allDATA} from '../store/action/collector';


export default function CollectoreRequest() {
    const disptach = useDispatch();
    const collector = useSelector(state => state.collector.data, shallowEqual)


    const [viewDrawer, setViewDrawer] = useState(false)
    const [viewData, setViewData] =  useState({})
    const isMounted = UseIsMounted();



    const openDrawer = (index) =>{
        setViewDrawer(true)
        setViewData(index)
    }
    
    const column = [
        {
            title: 'User Name',
            dataIndex: "userName",
            key: 'userName',
        },
        {
            title: 'Area',
            dataIndex: 'area',
            key: 'area',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Phone Approved',
            dataIndex: 'isPhoneApproved',
            key: 'isPhoneApproved',
            render : (value) =>(
                <>
                  {!value ? 'Not Approved' : 'Approved'}
                </>
              
            )
        },
        {
            title: 'Vehicle Type',
            dataIndex: 'vehicleType',
            key: 'vehicleType',
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
                      <Menu.Item key={1} onClick={()=>openDrawer(index)}>View Collector Info</Menu.Item>
                      <Menu.Item key={2} ><Link to={'/users/'+value}>View Users</Link></Menu.Item>
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
        data: collector,
        pageSize: 50,
        height: 700,
    }
    return (
        <>
            <div className="create-form-cont bg-white mt-4">
                <div className='d-flex justify-content-between'>
                    <h2 className='text-center sub-heading mb-4'>Your Collector</h2>
                    <Link to="/collectorRequest"><Button type="primary">View Collector Request</Button></Link>
                </div>
               
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