import React from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    }
    ,
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'uploading',
        url: 'http://www.baidu.com/xxx.png',
        percent: 33,
      }
    ],
  };

export const UploadResume = () => {
  return (
    <>
        <Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
    </>
  )
}
