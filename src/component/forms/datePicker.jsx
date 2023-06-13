import { Form , DatePicker } from "antd";
import moment from "moment";

export default function CustomDatePicker(props) {
    let customDate = moment().format("YYYY-MM-DD");
    return (
        <Form.Item
            
            name={props.name}
            className='custom-input'
            rules={[
                {
                  
                    required :true,
                    type : props.type,
                    message: props.message,
                },
            ]}
            getValueFromEvent={(onChange) => moment(onChange).format('YYYY-MM-DD')}
            getValueProps={(i) => ({value: moment(i)})}
        >
                <DatePicker 
                disabledDate={(current) => {
                  return current && current  < moment(customDate, "YYYY-MM-DD").add(1 , 'days');
                }}  
                placeholder={props.message}  
                {...props}
            />         
        </Form.Item>
    )
}