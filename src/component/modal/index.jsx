import { Modal } from 'antd';
import './style.scss';
const StyleModal = (props) => {
  return (
    <>
        <Modal {...props}>
            {props.children}
        </Modal>
    </>
  );
};
export default StyleModal;


