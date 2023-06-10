import { Form } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined, PhoneOutlined, HeatMapOutlined, ShopOutlined, AimOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

//component
import InputIcon from '../forms/inputIcon';
import InputPassword from '../forms/inputPassword';
import FormButton from '../forms/button';
import InputConfirmPassword from '../forms/inputConfirmPassword';
import CustomInputNumber from '../forms/inputNumber';





export default function Personalnfo(props) {

    // loginSubmit
    const onSubmit = (values) => {
        console.log('Received values of form: ', values);
        props.postData(values)
        props.next()
    };



    return (
        <Form
            name="personalInfoCollector"
            className='signin-form'
            initialValues={{}}
            onFinish={onSubmit}
        >
            <Row>
                <Col span={8} className="input-div">
                    <InputIcon name='firstName' icon={<UserOutlined />} message='Enter your firstname' type="string" />
                </Col>
                <Col span={8} className="input-div">
                    <InputIcon name='lastName' icon={<UserOutlined />} message='Enter your lastname' type="string" />
                </Col>
                <Col span={8} className="input-div">
                    <CustomInputNumber name='phoneNo' icon={<PhoneOutlined />} message='Enter your phone number' type="string" max={11} min={11} />
                </Col>

            </Row>
            <Row>
                <Col span={8} className="input-div">
                    <InputIcon name='email' icon={<MailOutlined />} message='Enter your email' type="email" />
                </Col>
                <Col span={8} className="input-div">
                    <CustomInputNumber name='cnicNo' icon={<HeatMapOutlined />} message='Enter your CNIC' type="string" />
                </Col>
                <Col span={8} className="input-div">
                    <InputIcon name='area' icon={<ShopOutlined />} message='Enter your area name' type="string" />
                </Col>
            </Row>
            <Row>
                <Col span={16} className="input-div">
                    <InputIcon name='address' icon={<AimOutlined />} message='Enter your address' type="string" />
                </Col>
                <Col span={8} className="input-div">
                    <InputIcon name='city' icon={<ShopOutlined />} message='Enter your city name' type="string" />
                </Col>
            </Row>
            <Row>
                <Col span={8} className="input-div">
                    <InputIcon name='userName' icon={<UserSwitchOutlined />} message='Enter your username' type="string" />
                </Col>
                <Col span={8} className="input-div">
                    <InputPassword name='password' icon={<LockOutlined />} message='Enter your password' />
                </Col>

                <Col span={8} className="input-div">
                    <InputConfirmPassword name='passwordConfirmation' icon={<LockOutlined />} message='confirm your password' />
                </Col>
            </Row>
            <div className='mt-4 d-flex justify-content-end'>
                <FormButton value="Next" type="submit" className="style-btn" />
            </div>
        </Form>
    );
};

