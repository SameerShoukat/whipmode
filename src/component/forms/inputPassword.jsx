import { Form, Input } from 'antd';
import { EyeTwoTone } from '@ant-design/icons';
import { useState } from 'react';

export default function InputPassword({ name, icon, message }) {
    return (
        <Form.Item
            className='custom-input'
            name={name}
            rules={[
                {
                    required: true,
                    message: message,
                    min:4
                },
            ]}
        >
            <Input.Password
                prefix={icon}
                type="password"
                placeholder="Password"
            />
        </Form.Item>
    )
}

