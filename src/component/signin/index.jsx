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
import { postResponse } from '../../hooks/axios';
import UseIsMounted from '../../hooks/mounted.jsx'
import { useForm } from 'antd/lib/form/Form';
import { useEffect } from 'react';



const Signin = () => {
  const [form] = useForm();
  const Navigate = useNavigate();
  const [formToggle, setFormToggle] = useState(true)
  const isMounted = UseIsMounted()

  useEffect(()=>{
    function getUserInfo(){
      if(isMounted.current){
        let loginDetail =  JSON.parse(localStorage.getItem('wipsignDetails'))
        if(loginDetail){
          form.setFieldsValue({
            email : loginDetail.email,
            password : loginDetail.password,
            remember : loginDetail.remember
          })
        }
      }
    }
    getUserInfo()
    

  },[])



  // loginSubmit
  const onLoginFinish = (values)=>{
    if(values.remember){
      localStorage.setItem('wipsignDetails', JSON.stringify(values))
    }

    postResponse('/users/signin', values)
    .then(response => {
      if(response && response.data){
        message.success(response.data.message)
        localStorage.setItem('wipUserInfo', JSON.stringify(response.data.data))
        Navigate('/searchVehicle')
      }
      else{
        message.error(response.data.message)
      }
    })
    .catch(error => message.error(error.response.data.message))
  }



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
                form={form}
                name="login"
                className='signin-form'
                initialValues={{
                  remember: true,
                }}
                onFinish={onLoginFinish}
              >
                <InputIcon name='email' icon={<UserOutlined />} message='Enter your email' type="string" />
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