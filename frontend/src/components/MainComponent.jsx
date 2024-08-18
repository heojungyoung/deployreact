import React, { Component } from "react";
import axios from 'axios';
import { DatePicker } from 'antd';
import {Table} from 'antd';


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

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            list: []
        }
    }

    componentDidMount() {
        this.getApi();
    }

    getApi = () => {
        axios.get("/api/hello")
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({
                    list: res.data
                });


            }).catch(console.error);
    }

    render() {
        return (
            <div>
                Main 페이지 변경<br />
                서버로부터 온 메시지: {this.state.message}
                <DatePicker />

                <Table dataSource={this.state.list} columns={columns}/>
            </div>

        );
    }
}

export default MainComponent;