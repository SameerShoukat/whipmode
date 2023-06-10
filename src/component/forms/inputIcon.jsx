import {Form, Input } from 'antd';

export default function InputIcon({name, icon, message, type}) {
    return (
        <Form.Item
            name={name}
            className='custom-input'
            rules={[
                {
                    required: true,
                    type : type,
                    message: message,
                },
            ]}
        >
            <Input prefix={icon} placeholder={message} />
        </Form.Item>
    )
}