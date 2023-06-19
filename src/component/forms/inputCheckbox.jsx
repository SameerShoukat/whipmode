import { Form , Checkbox} from 'antd';

export default function InputCheckBox(props) {
    return (
        <Form.Item name={props.name} valuePropName="checked" noStyle>
        <Checkbox {...props}>Remember me</Checkbox>
        </Form.Item>
    )
}




