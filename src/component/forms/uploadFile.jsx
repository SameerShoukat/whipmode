import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import React from 'react';
import { Form } from "antd";

// const getBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     reader.onload = () => resolve(reader.result);

//     reader.onerror = (error) => reject(error);
//   });

const CustomUploadImage = ({name , message }) => {
  // const [previewVisible, setPreviewVisible] = useState(false);
  // const [previewImage, setPreviewImage] = useState('');
  // const [previewTitle, setPreviewTitle] = useState('');


  // const handleCancel = () => setPreviewVisible(false);

  // const handlePreview = async (file) => {
  //   if (!file.url && !file.preview) {
  //     file.preview = await getBase64(file.originFileObj);
  //   }
  //   setPreviewImage(file.url || file.preview);
  //   setPreviewVisible(true);
  //   setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  // };

  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e &&  e.fileList;
  };

 
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          width : "100%"
        }}
      >
        {message}
      </div>
    </div>
  );
  return (
    <>
     <Form.Item
            name={name}
            rules={[
                {
                    required: true,
                    message: message,
                },
            ]}
            valuePropName="fileList"
            getValueFromEvent={normFile}
            className="upload-input"
        >
      <Upload
          name={name}
          listType="picture-card"
          // onPreview={handlePreview}
          maxCount={1}
          beforeUpload={()=> {
            /* update state here */
            return false; }}
        >
         { uploadButton}
        </Upload>
        {/* <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
          <img
            alt="example"
            style={{
              width: '100%',
            }}
            src={previewImage}
          />
        </Modal> */}
      </Form.Item>
    </>
  
  );
};

export default CustomUploadImage;