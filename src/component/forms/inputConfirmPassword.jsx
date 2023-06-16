import { Form, Input } from 'antd';

export default function InputConfirmPassword({ name, icon, message }) {
    return (
        <Form.Item
        className='custom-input mb-0'
        name={name}
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: message,
            min:4
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
        >
            <Input
                prefix={icon}
                type="password"
                placeholder="Confirm Password"
            />
      </Form.Item>
    )
}



