import { Form , DatePicker } from "antd";
import moment from "moment";
export default function CustomDatePicker(props) {
    return (
        <Form.Item
            
            name={props.name}
            className='custom-input'
            rules={[
                {
                  
                    type : props.type,
                    message: props.message,
                },
            ]}
            getValueFromEvent={(onChange) => moment(onChange).format('YYYY-MM-DD')}
            getValueProps={(i) => ({value: moment(i)})}
        >
            <DatePicker 
            disabledDate={(current) => {
              let customDate = moment().format("YYYY-MM-DD");
              return current && current < moment(customDate, "YYYY-MM-DD");
            }}  
            placeholder={props.message}  
            {...props}
            />
        </Form.Item>
    )
}