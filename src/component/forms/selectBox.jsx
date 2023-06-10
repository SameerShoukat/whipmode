import { Form } from 'antd';
import { Select } from 'antd';
import React from 'react';
const { Option } = Select;




export default function CustomSelectBox({ options, message, name }) {
    return (
        <Form.Item
            name={name}
            rules={[
                {
                    required: true,
                    message: message,
                },
            ]}
        >
            <Select
                showSearch
                placeholder={message}
                optionFilterProp="children"
                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                className="custom-select"
            >
                {
                    options && options.length > 0 && options.map((val, key) => {
                        if (val) return <Option value={val.value} key={key}>{val.label}</Option>
                    })
                }

            </Select>
        </Form.Item>


    )

}
