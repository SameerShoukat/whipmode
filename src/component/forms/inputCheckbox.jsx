import { Form , Checkbox} from 'antd';

export default function InputCheckBox(props) {
    return (
        <Form.Item
        name={props.name}
        rules={[
            {
                required: true,
                message: props.alert,
            },
        ]}
        valuePropName="checked">
        <Checkbox {...props}>{props.message}</Checkbox>
    </Form.Item>
    )
}




