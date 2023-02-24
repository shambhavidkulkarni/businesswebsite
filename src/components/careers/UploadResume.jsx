import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { Row, Col } from "react-bootstrap";
import './careers.css'

// const props = {
  // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  // onChange({ file, fileList }) {
    // if (file.status !== "uploading") {
    //   console.log(file, fileList);
    // }
  // },
  // defaultFileList: [
    // {
      // uid: "1",
      // name: "xxx.png",
      // status: "uploading",
      // url: "http://www.baidu.com/xxx.png",
      // percent: 33,
    // },
  // ],
// };

export const UploadResume = () => {
  return (
    <>
      <Upload>
        <div className="upload-btn row mt-4 mx-auto" style={{ width: "1200px" }}>
          <div className="col m-1">
          <Button
                className="bg-dark rounded"
                style={{ borderRadius: "10px", color: "white" }}
                icon={<UploadOutlined />}
              >
                Upload
              </Button>
          </div>
        </div>
        {/* <div className="mx-auto">
          <div className="row mx-auto">
            <div className="col">
              
            </div>
          </div>
        </div> */}
      </Upload>
    </>
  );
};
