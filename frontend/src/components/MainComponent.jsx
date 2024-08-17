import React, { Component } from "react";
import axios from 'axios';
import { DatePicker } from 'antd';

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
                {this.state.list.map((item, index) => (
                    <div key={index}>
                        <p>No {item.trmRqstNo}</p>
                        <p>Request Type Code: {item.trmRqstTypeCd}</p>
                        <p>Request Title: {item.trmRqstTlt}</p>
                        <p>Due Date: {item.trmRqstDueDt}</p>
                        <p>Comment: {item.trmRqstComt}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default MainComponent;