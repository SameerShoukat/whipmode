
import Card from 'antd/lib/card/Card';
import { useState, useEffect } from 'react';
import{Menu, Button, Col, Row} from 'antd';
import StyleTable from '../component/table/table';
import UseIsMounted from '../hooks/mousted';
import StyleDropdown from '../component/styleDropdown';
import StyleDrawer from '../component/drawer';
import { message } from 'antd';
import { useSelector, useDispatch,shallowEqual } from 'react-redux';
import { allDATA, approvedRequest, deniedCollectorRequest } from '../store/action/collectorRequest';
import StyleModal from '../component/modal';

import Form from 'antd/es/form/Form';
import FormButton from '../component/forms/button';
import StyleTextArea from '../component/forms/styleTextArea';


export default function CollectoreRequest() {
    const disptach = useDispatch();
    const collector = useSelector(state => state.collectorRequest.data, shallowEqual)

    const [viewDrawer, setViewDrawer] = useState(false)
    const [viewData, setViewData] =  useState({})
    const isMounted = UseIsMounted();
    const [collectorId, setCollectorId] = useState(0)
    const [deniedModal, setDeniedModal] = useState(false)

    const approveCandidate = (value) =>{
        approvedRequest(value)
        message.success('Collector has been approved')
        disptach(allDATA())
    }

    const deniedDrawer = (value) =>{
        setCollectorId(value)
        setDeniedModal(true)
    }

    const openDrawer = (index) =>{
        setViewDrawer(true)
        setViewData(index)
    }

    const deniedCollectorForm = (value) =>{
        let reposnse = deniedCollectorRequest(collectorId, value)
        console.log(reposnse)
        disptach(allDATA())
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
            title: 'Status',
            dataIndex: 'activeStatus',
            key: 'activeStatus',
            render : (value) =>(
                <>
                  {!value ? 'Pending' : value}
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
                      <Menu.Item key={1} onClick={()=> approveCandidate(value)} >Approved</Menu.Item>
                      <Menu.Item key={2} onClick={()=>openDrawer(index)}>View Request</Menu.Item>
                      <Menu.Item key={3} onClick={()=> deniedDrawer(value)}>Denied</Menu.Item>
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
                <h2 className='text-center sub-heading mb-4'>Collector Request</h2>
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

           {/* assign writer modal */}
           {deniedModal && <StyleModal title="Enter Reason to Denied Collector" open={deniedModal} footer={null} onCancel={() => setDeniedModal(false)} >
        
                        <Form
                            name="deniedCollectorRequest"
                            className='signin-form'
                            initialValues={{}}
                            onFinish={deniedCollectorForm}
                        >
                            <Row gutter={10} align="center">
                                <Col span={24} className="mb-4">
                                    <StyleTextArea name="reason" message="Reason is required" />

                                </Col>
                                <Col span={12} >
                                    <FormButton value="submit" type="submit" />
                                </Col>
                            </Row>
                        </Form>
                </StyleModal>
                }
        </>
    )
}