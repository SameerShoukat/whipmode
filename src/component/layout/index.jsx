import {
  DesktopOutlined,
  PieChartOutlined,
  NotificationOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Dropdown, List } from 'antd';
import { Avatar } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const getItem = (label, key, icon, children) => ({
  key,
  icon,
  children,
  label,
});

const items = [
  getItem('Collectors', '2', <DesktopOutlined />),
  getItem('Complains', '3', <NotificationOutlined />),
];

const itemsAdmin = [
  getItem('Home', '1', <PieChartOutlined />),
  getItem('Supervisors', '2', <NotificationOutlined />),
  getItem('For Sale Garbage', '3', <DesktopOutlined />),
  getItem('Rejected Collectors', '4', <UserDeleteOutlined />),
];
const data1 = [
  {
    title: 'New message from Haris',
  },
  {
    title: 'New album by Travis Haris',
  },
  {
    title: 'Payment completed',
  },
];

const menu = (
  <List
    className='header-notifications-dropdown '
    itemLayout='horizontal'
    dataSource={data1}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta title={item.title} description={item.description} />
      </List.Item>
    )}
  />
);

const Wrapper = (props) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const logOut = () => {
    localStorage.removeItem('uswms-login');
    navigate('/signin');
  };

  const showSupervisorMenu = (e) => {
    switch (e.key) {
      case '1':
        navigate('/');
        break;
      case '2':
        navigate('/collector');
        break;
      case '3':
        navigate('/complains');
        break;
      default:
        navigate('/');
        break;
    }
  };

  const showAdminMenu = (e) => {
    switch (e.key) {
      case '1':
        navigate('/');
        break;
      case '2':
        navigate('/supervisors');
        break;
      case '3':
        navigate('/garbage');
        break;
      case '4':
        navigate('/rejectedCollectors');
        break;
      default:
        navigate('/');
        break;
    }
  };

  const menuDropdown = (
    <Menu>
      <Menu.Item onClick={logOut}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className='style-menu'>
          <h3 className='sidebar-heading'>USWMS</h3>
          {userInfo && userInfo['userType'] === 'supervisor' ? (
            <Menu
              onClick={showSupervisorMenu}
              theme='dark'
              defaultSelectedKeys={['1']}
              mode='inline'
              items={items}
            />
          ) : (
            <Menu
              onClick={showAdminMenu}
              theme='dark'
              defaultSelectedKeys={['1']}
              mode='inline'
              items={itemsAdmin}
            />
          )}
        </div>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background'>
          <div className='col-md-12 d-flex align-items-center justify-content-end h-100'>
            <Dropdown overlay={menuDropdown} placement='bottomRight'>
              <Avatar
                size={40}
                icon={localStorage?.getItem('userName')?.slice(0, 1)}
                className='cursor-pointer'
              />
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Wrapper;
