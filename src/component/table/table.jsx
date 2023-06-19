import { Table } from 'antd';
import React from 'react';
import './style.css'
const StyleTable = (props) => (
  <Table
    columns={props.columns}
    dataSource={props.data}
    pagination={{
      pageSize: props.pageSize
    }}
    scroll={{
      y: props.height,
    }}
  />
);
export default StyleTable;