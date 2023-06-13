
import Card from 'antd/lib/card/Card';
import { useState, useEffect } from 'react';
import{Menu, Button, List} from 'antd';
import StyleTable from '../component/table/table';
import UseIsMounted from '../hooks/mousted';
import StyleDropdown from '../component/styleDropdown';
import StyleDrawer from '../component/drawer';
import axios from 'axios';
import { api } from '../api';


const headers = {
    'authorization': `Bearer ${localStorage.getItem('uswms-login')}`
}

export default function RejectedCollectors() {

    const [viewDrawer, setViewDrawer] = useState(false)
    const [listData, setListData] = useState([])
    const [viewData, setViewData] =  useState({})
    const isMounted = UseIsMounted();

    useEffect(() => {
        function allUsers() {
            const config = {
                headers: {
                  authorization: `Bearer ${localStorage.getItem('uswms-login')}`,
                }
              }
            axios.get(`${api}/admins/get-rejected-collectors`,config)
            .then(res => {
                setListData(res.data)
            })
        }
        allUsers()
    }, [])


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
                    </Menu>
                  );
                  return(
                    <StyleDropdown menu={menuDropdown} />
                  )
               
            }

        },
    ]




    let propsData = {
        columns: column,
        data: listData && listData.length > 0 ? listData : [],
        pageSize: 50,
        height: 700,
    }
    return (
        <>
            <div className="create-form-cont bg-white mt-4">
                <div className='d-flex justify-content-between'>
                    <h2 className='text-center sub-heading mb-4'>Rejected Collectors</h2>
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
                                <td>
                                    <span>Reason</span>
                                    <span>{viewData.reason}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <Button  className='w-100 my-4' type="primary" onClick={() => setViewDrawer(false)}>close</Button>
                </Card>
                : 'Reopen Collector'
                }
               
            </StyleDrawer>
        }
        </>
    )
}