import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import "./index.css";
import { Button, Input, Space, Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";

const { confirm } = Modal;

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  interface RequestItem {
    trmRqstNo: number;
    trmItm: string[];
  }

  interface Request {
    trmRqstNo: number;
    trmRqstTypeCd: string;
    trmRqstTlt: string;
    trmRqstDueDt: Date;
    items: RequestItem[];
  }

  const [request, setRequest] = useState<Request | null>(null);

  const [trmItm, setTrmItm] = useState("");

  let getApi = () => {
    axios
      .get(`/request/detail/${id}`)
      .then((res) => {
        console.log("detail");
        console.log(res.data);
        setRequest(res.data);

        const trmItm = res.data.items.flatMap((item: RequestItem) => {
          return item.trmItm.map((trmItm) => {
            console.log(trmItm);
            return trmItm;
          });
        });

        console.log(trmItm);
        setTrmItm(trmItm);
      })
      .catch(console.error);
  };

  getApi();

  const deleteData = () => {
    axios
      .delete(`/request/delete/${id}`)
      .then((res) => {
        console.log("success data" + res);
        navigate("/test");
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
        <div>{trmItm}</div>

        <Button type="primary" onClick={() => showConfirm()}>
          delete
        </Button>
      </Space>
    </>
  );
}

export default Detail;
