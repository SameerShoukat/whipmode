import { Drawer } from 'antd';
const StyleDrawer = (props) => {
  return (
      <Drawer
        placement="right"
        closable={false}
        visible={props.open}
        getContainer={false}
        style={{
          position: 'absolute',
        }}
        width="50%"
      >
        {props.children}
      </Drawer>
  );
};
export default StyleDrawer;