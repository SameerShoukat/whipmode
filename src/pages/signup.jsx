import { Col, Row} from 'antd';
import SignUp from '../component/signup';
import { Navigate } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import { Link } from 'react-router-dom';

// local import



//sign paege
export default function SignUpPage() {
    return (
        <>
        <div className='signin-container'>
            <Row className='justify-content-center' align="center">
                <Col span={20} md={12}>
                <h5 className='tagline text-center'>New To Wipmode <Link to="/signin">Sign In</Link></h5>
                    <div className='text-center'>
                        <h1>Create your account</h1>
                        <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <SignUp />
                </Col>
            </Row>
        </div>
        <Footer />
        </>
        
    )
}