import { Form} from 'antd';
import TextArea from 'antd/lib/input/TextArea';

export default function StyleTextArea({ name, message }) {
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
            <TextArea rows={4} placeholder={message} />
        </Form.Item>
    )
}

