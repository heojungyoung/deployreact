import { Button, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { enrollUser } from "./EnrollService";
import "./index.css";

const EnrollComponent = () => {
  const navigate = useNavigate();

  const onFinish = (values: {
    trm_rqst_tlt: any;
    trm_rqst_type_cd: any;
    trm_rqst_comt: any;
    trm_rqst_own_guid: any;
    trm_rqst_std: any;
    item: "";
  }) => {
    console.log("values:", values);

    const data = {
      requestM: {
        trmRqstTlt: values.trm_rqst_tlt,
        trmRqstTypeCd: values.trm_rqst_type_cd,
        trmRqstComt: values.trm_rqst_comt,
        trmRqstOwnGuid: values.trm_rqst_own_guid,
        trmRqstStd: values.trm_rqst_std,
      },
      requestItemL: {
        id: {
          trmItm: values.item,
        },
      },
    };

    enrollUser(data)
      .then((response) => {
        // Handle the response if the request is successful
        console.log("Status Code:", response.status);
        console.log("Response Data:", response.data);

        navigate("/test");
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error Status:", error.response.status);
          console.error("Error Data:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error", error.message);
        }
      });
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className={"enroll"}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{
            remember: true,
            trm_rqst_type_cd: "example",
            trm_rqst_comt: "example",
            trm_rqst_own_guid: "example",
            trm_rqst_tlt: "example",
            trm_rqst_std: "scheduling",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="trm_rqst_type_cd"
            name="trm_rqst_type_cd"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="trm_rqst_tlt"
            name="trm_rqst_tlt"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="trm_rqst_comt"
            name="trm_rqst_comt"
            rules={[
              { required: true, message: "Please input your trm_rqst_comt!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="trm_rqst_own_guid"
            name="trm_rqst_own_guid"
            rules={[
              { required: true, message: "Please input your trmRqstOwnGuid!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Select" name="trm_rqst_std">
            <Select>
              <Select.Option value="infogress">infogress</Select.Option>
              <Select.Option value="scheduling">scheduling</Select.Option>
              <Select.Option value="delay">delay</Select.Option>
              <Select.Option value="check">check</Select.Option>
              <Select.Option value="completed">completed</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="item" name="item">
            <Select mode="multiple">
              <Select.Option value="pp">pp</Select.Option>
              <Select.Option value="sub">sub</Select.Option>
              <Select.Option value="tex">tex</Select.Option>
              <Select.Option value="hook">hook</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Button className={"main_button"} onClick={() => navigate("/")}>
          main
        </Button>
      </div>
    </>
  );
};
export default EnrollComponent;
