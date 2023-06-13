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
        <>
            <Row>
                <Col span={12}>
                    {/* sign in text */}
                    <div className='sign-banner d-flex justify-content-center align-items-center'>
                        <div className='text-center'>
                            <h2 className="main-heading">USWMS</h2>
                            <h5 className='sub-heading'>Urban Solid Waste Management System</h5>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <Signin />
                </Col>
            </Row>

        </>
    )
}