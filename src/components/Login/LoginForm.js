import { Button, Checkbox, Form, Input, Typography } from 'antd';
import React from 'react';

const LoginForm = () => {
  const { Title } = Typography;
  
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div style={{marginTop:'150px'}}>
            <div style={{
              margin:'0 auto',
              marginLeft: '225px',
              marginTop: '50px'
            }}>
            <Title level={2}>LogIn</Title>
            </div>
            <div style={{
            top: '50%', 
            left:'50%', 
            marginTop: '50px', 
            marginRight:'200px'}}>
        
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off">
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}>
                <Input />
              </Form.Item>
        
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}>
                <Input.Password />
              </Form.Item>
        
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
        
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;