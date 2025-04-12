import React from 'react';
import axios from 'axios';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const EnrollComponent = () => {
    const navigate = useNavigate();

    const onFinish = (values: { trm_rqst_tlt: any; trm_rqst_type_cd: any; trm_rqst_comt: any; trm_rqst_own_guid: any; trm_rqst_std: any; }) => {
        console.log('Success:', values);
        const data = {
            trmRqstTlt: values.trm_rqst_tlt,
            trmRqstTypeCd: values.trm_rqst_type_cd,
            trmRqstComt: values.trm_rqst_comt,
            trmRqstOwnGuid: values.trm_rqst_own_guid,
            trmRqstStd: values.trm_rqst_std
        };

        axios.post("api/enroll", data)
            .then((response) => {
                // Handle the response if the request is successful
                console.log('Status Code:', response.status);
                console.log('Response Data:', response.data);

                navigate('/test');

            })
            .catch((error) => {
                if (error.response) {
                    console.error('Error Status:', error.response.status);
                    console.error('Error Data:', error.response.data);
                } else if (error.request) {
                    console.error('No response received:', error.request);
                } else {
                    console.error('Error', error.message);
                }
            });


    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (

        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

            <Form.Item
                label="trm_rqst_type_cd"
                name="trm_rqst_type_cd"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="trm_rqst_tlt"
                name="trm_rqst_tlt"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item
                label="trm_rqst_comt"
                name="trm_rqst_comt"
                rules={[{required: true, message: 'Please input your trm_rqst_comt!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="trm_rqst_own_guid"
                name="trm_rqst_own_guid"
                rules={[{required: true, message: 'Please input your trmRqstOwnGuid!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="trm_rqst_std"
                name="trm_rqst_std"
                rules={[{required: true, message: 'Please input your trm_rqst_std!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" label={null}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>

    );
}
export default EnrollComponent;