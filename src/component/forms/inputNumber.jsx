import {Form, Input } from 'antd';

export default function CustomInputNumber({name, icon, message, type, max, min}) {
    return (
        <Form.Item
            name={name}
            className='custom-input'
            rules={[
                {
                    required: true,
                    type : type,
                    message: message,
                    pattern : new RegExp(/^[0-9-]*$/),
                    max:max && max,
                    min : min && min
                    
                },
            ]}
        >
            <Input prefix={icon} placeholder={message}  />
        </Form.Item>
    )
}