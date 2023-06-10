import { Form , Checkbox} from 'antd';

export default function InputCheckBox({name}) {
    return (
        <Form.Item name={name} valuePropName="checked" noStyle>
        <Checkbox>Remember me</Checkbox>
        </Form.Item>
    )
}




