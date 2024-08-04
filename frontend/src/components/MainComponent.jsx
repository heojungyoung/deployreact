import React, { Component } from "react";
import axios from 'axios';
import { DatePicker } from 'antd';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    componentDidMount() {
        this.getApi();
    }

    getApi = () => {
        axios.get("/api/hello")
            .then(res => {
                console.log(res);
                this.setState({
                    message: res.data.message
                });
            }).catch(console.error);
    }

    render() {
        return (
            <div>
                Main 페이지 변경<br />
                서버로부터 온 메시지: {this.state.message}
                <DatePicker />
            </div>
        );
    }
}
export default MainComponent;