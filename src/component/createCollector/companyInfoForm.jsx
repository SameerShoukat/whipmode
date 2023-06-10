import { Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

//component
import FormButton from '../forms/button';
import CustomInputNumber from '../forms/inputNumber';
import CustomSelectBox from '../forms/selectBox';
import CustomUploadFile from '../forms/uploadFile';


// icon
import { CarOutlined } from '@ant-design/icons'




export default function CompanyInfo(props) {

    // loginSubmit
    const onSubmit = (values) => {
     
        props.postData(values)
        props.next()
      
    };

    const options = [
        {
            label : "Truck",
            value : "truck"
        },
        {
            label : "MotorBike",
            value : "motorbike"
        },
    ]

    // console.log(files)

    const prevStep = () =>{
        props.prev()
    }



    return (
        <>
        
        <Form
                    name="companyInfoCollector"
                    className='signin-form'
                    initialValues={{}}
                    onFinish={onSubmit}
                >
                     <Row>
                        <Col span={8} className="input-div">
                            <div className='mb-4'>
                                <CustomSelectBox name='vehicleType' icon={<UserOutlined />} message='Select Vehicle' options={options} />
                            </div>
                        </Col>
                        <Col span={8} className="input-div">
                            <CustomInputNumber name='vehicleNo' icon={<CarOutlined />} message='Enter Vehicle Number' type="string" />      
                        </Col>
                        <Col span={8} className="input-div">
                            <CustomInputNumber name='drivingLicenseNo' icon={<CarOutlined />} message='Enter Driving License Number' type="string" />      
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} className="input-div mt-4">
                            <div className='create-form-inner'>
                                <h2>Upload CNIC </h2>
                                <Row>
                                    <Col span={12}>
                                        <CustomUploadFile  name="cnicImgFront" message="Upload CNIC Front Picture" />
                                    </Col>
                                    <Col span={12}>
                                        <CustomUploadFile  name="cnicImgBack" message="Upload CNIC Back Picture" />
                                    </Col>
                                </Row>
                             
                            </div>
                        </Col>
                        <Col span={12} className="input-div mt-4">
                            <div className='create-form-inner'>
                                <h2>Upload Driving License </h2>
                                <Row>
                                    <Col span={12}>
                                        <CustomUploadFile  name="drivingLicenseFront" message="Upload driving license front" />
                                    </Col>
                                    <Col span={12}>
                                        <CustomUploadFile  name="drivingLicenseBack" message="Upload driving license back"  />
                                    </Col>
                                </Row>
                            </div>
                        </Col>


                    </Row>
                    <div className='mt-4 d-flex justify-content-end'>
                        <FormButton value="Next" type="submit" className="style-btn" />
                    </div>
                    
                </Form>
        
        
        </>

                
    );
};

