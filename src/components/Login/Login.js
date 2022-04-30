import { Col, Image, Row, Space, Typography } from 'antd';
import React from 'react';
import Logo from '../../logo/logo.png';
import Footer from '../Footer/Footer';
import LoginForm from './LoginForm';

const Login = () => {
    const { Title, Text } = Typography;
    return (
        <div>
        <>
            <Row>
                <Col span={12}>
                    <div style={{margin:'0 auto', textAlign:'center'}}>
                        {/* Logo Image */}
                        <div style={{
                            top: '50%',
                            left:'50%',
                            margin: '121px'}}>
                            <Image width={'auto'} height={'100%'} preview={false} src={Logo}/>
                        </div>
                        
                        {/* Service Tag Lines */}
                        <div>
                            <Title level={2}>Your Care Center</Title>
                            <Space direction="vertical">
                                <Text strong mark>We are here 24/7 for your care.</Text>
                            </Space>
                        </div>
                        
                        {/* Footer Component */}
                        <div>
                            <Footer></Footer>
                        </div>
                        
                    </div>
                </Col>
                <Col span={12}>
                    {/* Right side user login options */}
                    <LoginForm></LoginForm>
                </Col>
            </Row>
        </>
        </div>
    );
};

export default Login;