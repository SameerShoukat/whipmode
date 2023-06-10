

import { Dropdown, Menu } from "antd"
import { EllipsisOutlined } from "@ant-design/icons";




export default function StyleDropdown({menu}){
    return(
    <Dropdown overlay={menu}>
        <EllipsisOutlined className="dropicon" /> 
      </Dropdown>
    )
}