import React, { useEffect, useState } from "react";
import axios from "axios";
import { DatePicker, Table } from "antd";
import { NavLink, useNavigate } from "react-router-dom";

const columns = [
  {
    title: "trmRqstNo",
    dataIndex: "trmRqstNo",
    key: "trmRqstNo",
  },
  {
    title: "typeCd",
    dataIndex: "trmRqstTypeCd",
    key: "trmRqstTypeCd",
  },
  {
    title: "test",
    dataIndex: "trmRqstStd",
    key: "trmRqstStd",
  },
  {
    title: "trmRqstTlt",
    dataIndex: "trmRqstTlt",
    key: "trmRqstTlt",
  },
  {
    title: "trmRqstDueDt",
    dataIndex: "trmRqstDueDt",
    key: "trmRqstDueDt",
  },
];

function Test() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  interface Request {
    trmRqstNo: number;
    trmRqstTypeCd: string;
    trmRqstTlt: string;
    trmRqstDueDt: Date;
  }

  const getApi = () => {
    axios
      .get("/request/list")
      .then((res) => {
        console.log(res.data);
        setList(res.data);
        console.log("copyList");
        let copyList = res.data;
        console.log(copyList);
      })
      .catch(console.error);
  };

  return (
    <div>
      <DatePicker />

      <Table<Request>
        dataSource={list}
        columns={columns}
        onRow={(record) => ({
          onClick: () => navigate(`/detail/${record.trmRqstNo}`),
        })}
      />

      <NavLink to="/enrole">
        <span className="label">등록</span>
      </NavLink>
    </div>
  );
}

export default Test;
