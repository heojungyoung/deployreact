import React, {useEffect, useState} from "react";
import axios from 'axios';
import {DatePicker, Table} from 'antd';
import {NavLink, useNavigate} from "react-router-dom";

const columns = [
    {
        title: 'trmRqstNo',
        dataIndex: 'trmRqstNo',
        key: 'trmRqstNo',
    },
    {
        title: 'trmRqstTypeCd',
        dataIndex: 'trmRqstTypeCd',
        key: 'trmRqstTypeCd',
    },
    {
        title: 'trmRqstTlt',
        dataIndex: 'trmRqstTlt',
        key: 'trmRqstTlt',
    },
    {
        title: 'trmRqstDueDt',
        dataIndex: 'trmRqstDueDt',
        key: 'trmRqstDueDt',
    },
];


function Test() {

    const navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        getApi();
    }, []);

    interface Request {
        trmRqstNo: number;
        trmRqstTypeCd : string;
        trmRqstTlt : string;
        trmRqstDueDt : Date;
    }

    const getApi = () => {
        axios.get("/api/hello")
            .then(res => {
                console.log(res);
                console.log(res.data);
                setList(res.data);
                setMessage('hello');
            }).catch(console.error);
    }

    return (
        <div>

            서버로부터 온 메시지: {message}
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