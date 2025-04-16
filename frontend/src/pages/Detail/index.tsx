import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";
import { Button, Input, Space, Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";

const { confirm } = Modal;

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  interface Request {
    trmRqstNo: number;
    trmRqstTypeCd: string;
    trmRqstTlt: string;
    trmRqstDueDt: Date;
  }

  const [request, setRequest] = useState<Request | null>(null);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    axios
      .get(`/request/detail/${id}`)
      .then((res) => {
        console.log("detail");
        console.log(res.data);
        setRequest(res.data);
      })
      .catch(console.error);
  };

  const deleteData = () => {
    axios
      .delete(`/request/delete/${id}`)
      .then((res) => {
        console.log("success data");
        navigate("/");
      })
      .catch(console.error);
  };

  const showConfirm = () => {
    confirm({
      title: "Do you want to delete items?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      onOk() {
        console.log("OK");
        deleteData();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <>
      <Space direction="vertical" className={"details"}>
        <Input value={request?.trmRqstDueDt.toString()} />
        <Input value={request?.trmRqstTypeCd} />
        <Input value={request?.trmRqstTlt} />
        <Input value={request?.trmRqstNo} />

        <Button type="primary" onClick={() => showConfirm()}>
          delete
        </Button>
      </Space>
    </>
  );
}

export default Detail;
