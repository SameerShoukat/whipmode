import { TimePicker } from 'antd';
import { Form} from 'antd';
import moment from 'moment';



export default function StyleTimePicker({ name, message }) {
    return (
        <Form.Item
            className='custom-input mb-0'
            name={name}
            rules={[
                {
                    required: true,
                    message: message,
                },
            ]}
        >
            <TimePicker use12Hours format="h:mm a"   />
        </Form.Item>
    )
}

