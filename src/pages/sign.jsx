import { Col, Row} from 'antd';
import Signin from '../component/signin';
import { Navigate } from 'react-router-dom';

// local import



//sign paege
export default function SignInPage() {
    if (localStorage.getItem('uswms-login')) {
        return <Navigate to="/" replace />;
      }
    return (
        <div className='signin-container'>
            <Row className='justify-content-center' align="center">
                <Col span={12}>
                    <div className='text-center'>
                        <h1>WHIPMODE</h1>
                        <h4>SIGN IN</h4>
                    </div>
                    <Signin />
                </Col>
            </Row>
            
        </div>
    )
}