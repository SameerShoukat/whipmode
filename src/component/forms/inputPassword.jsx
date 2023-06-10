import { Form, Input } from 'antd';

export default function InputPassword({ name, icon, message }) {
    return (
        <Form.Item
            className='custom-input mb-0'
            name={name}
            rules={[
                {
                    required: true,
                    message: message,
                    min:4
                },
            ]}
        >
            <Input
                prefix={icon}
                type="password"
                placeholder="Password"
            />
        </Form.Item>
    )
}

