import { useState } from 'react';
import { Form, Button } from 'antd';
import { LockOutlined, UserOutlined , MailOutlined} from '@ant-design/icons';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
//component
import InputIcon from '../forms/inputIcon';
import InputPassword from '../forms/inputPassword';
import InputCheckBox from '../forms/inputCheckbox';
import FormButton from '../forms/button';

import { Tabs } from 'antd';


import { api } from '../../api';
//component scss
import './signin.scss'
import axios from 'axios';


const SigninForm = ({route}) => {
  const navigate = useNavigate()
  const [formToggle, setFormToggle] = useState(true)



  // loginSubmit
  const onLoginFinish = (values) => {
    let apiPath = {
      supervisor : api+ '/supervisor/signin',
      admin : api + '/admins/signin',
  
    }
    axios.post(apiPath[route], values)
    .then((res)=>{
      console.log(res)
      if(res && res.status){
        let userInfo = {
          userName :  res.data.firstName,
          userType : route,
          user_id : res.data.id
        }
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        localStorage.setItem('uswms-login', res.data.token)
        message.success("Successful Login")
        setTimeout(() => {
          if (res.data.userType === 'supervisor') {
            
            navigate('/collector')
          } else {
           
            navigate('/')
          }
          
        }, 1000);
      }
      else{
        message.error(res.data.message)
      }
    })
    .catch(error =>  error.response && error.response.data.message
      ? message.error(error.response.data.message)
      : message.error(error.message), )
        
  };

  const onPasswordFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
   
      <div className='signin-form-cont'>

        {
          formToggle ?
            <>
              {/* Sign in screen */}
              <div className='form-heading'>
                <h2 className='sub-heading'>Welcome Back !</h2>
                <h6>Welcome back! Please enter your details</h6>
              </div>
              <Form
                name="login"
                className='signin-form'
                initialValues={{
                  remember: true,
                }}
                onFinish={onLoginFinish}
              >
                <InputIcon name='userName' icon={<UserOutlined />} message='Enter your username' type="string" />
                <InputPassword name='password' icon={<LockOutlined />} message='Enter your password' type="string" />
                {/* <div className='d-flex justify-content-between remember-me'>
                  <InputCheckBox name="remember" />
                 {route !== 'admin' && <Button type="link" onClick={()=>{setFormToggle(false)}}> 
                    Forgot Password
                  </Button>
                  }
                </div> */}
                <FormButton value="Log in" type="submit" />
              </Form>

            </>
            :
            <>
              {/* Forgot Password */}
              <div className='form-heading'>
                <h2 className='sub-heading'>Forgot Password !</h2>
                <h6>Please enter your email</h6>
              </div>
              <Form
                name="forgot_password"
                className='signin-form'
                onFinish={onPasswordFinish}
              >
                <InputIcon name='email' icon={<MailOutlined />} message='Enter your email' type="email" />
                <FormButton value="Recover Password" type="submit" />
                {/*create account */}
                <div className='d-flex align-items-center justify-content-between'>
                  <Button type="link" onClick={()=>{setFormToggle(true)}}>
                   Go Back To Login 
                  </Button>
                </div>
              </Form>
            </>
        }

      </div>
  );
};



const items = [
  {
    key: '1',
    label: `Sign In as Supervisor`,
    children: <SigninForm route="supervisor" />,
  },
  {
    key: '2',
    label: `Sign In as Admin`,
    children: <SigninForm route="admin" />,
  },
];
const Signin = () =>  <div className=' d-flex justify-content-center align-items-center h-100'><Tabs defaultActiveKey="1" items={items} /></div>;
export default Signin;