import { useState } from 'react';
import { Form, Button } from 'antd';
import { LockOutlined, UserOutlined , MailOutlined} from '@ant-design/icons';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//component
import InputIcon from '../forms/inputIcon';
import InputPassword from '../forms/inputPassword';
import InputCheckBox from '../forms/inputCheckbox';
import FormButton from '../forms/button';
import { api } from '../../api';
//component scss
import axios from 'axios';




const Signin = () => {
  const navigate = useNavigate()
  const [formToggle, setFormToggle] = useState(true)

  // loginSubmit
  const onLoginFinish = (values) => {
    console.log(values)
  };

  const onPasswordFinish = (values) =>{
    console.log(values)
  }


  return (
      <div className='signin-form-cont'>
        {
          formToggle ?
            <>
              {/* Sign in screen */}
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
                <div className='d-flex remember-me align-items-center justify-content-between'>
                    <label htmlFor="remember" className='text-white mx-2'>
                    <InputCheckBox name="remember" message="Remember me" className="text-white" />
                    </label>
                  <Button type="link" className='mt-0' onClick={()=>{setFormToggle(false)}}> 
                      Forgot Password
                  </Button>
                </div>
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
                <div className='d-flex align-items-center justify-content-end'>
                  <Button type="link" className='mt-0' onClick={()=>{setFormToggle(true)}}>
                   Go Back To Login 
                  </Button>
                </div>
                <FormButton value="Recover Password" type="submit" />
                {/*create account */}
             
              </Form>
            </>
        }
        <h5 className='tagline text-center'>New To Wipmode <Link to="/signup">Join Here</Link></h5>
      </div>
  );
};



export default Signin;