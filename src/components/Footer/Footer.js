import { Space, Typography } from 'antd';
import React from 'react';

const Footer = () => {
    const { Text, Link } = Typography;
    
    return (
        <div style={{marginTop:'100px'}}>
            <Space direction="vertical">
            <Text type="secondary">&copy; copyright 2021-2022 Medicalic. All other trademarks and copyrights are the property of their respective owners. All rights reserved 
            <Link href="#" target="_blank">Medicalic - Health Cente</Link></Text>
                                
            </Space>
        </div>
    );
};

export default Footer;