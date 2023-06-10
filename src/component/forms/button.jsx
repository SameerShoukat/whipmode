
import { Form, Button } from "antd";

export default function FormButton({ value, type }) {
    return (
        <Form.Item>
            <Button type="primary" htmlType={type} className="style-btn style-btn-theme w-100">
                {value}
            </Button>
        </Form.Item>
    )

}
