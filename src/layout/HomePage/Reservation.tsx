import React from "react";
import {
  Row,
  Col,
  Input,
  DatePicker,
  Radio,
  Checkbox,
  Pagination,
  Select,
  Form,
  InputNumber,
  Button,
  message
} from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
export default function Reservation() {
  const [messageApi, contextHolder] = message.useMessage();
  const [email, setEmail] = useState<string>();

  const onFinish = (values: any) => {
    axios
      .post("https://web-developing.site/api/reservations", {
        name: values.Name,
        email: values.Email,
        phone: values.Phone,
      })
      .then((response) => {
        messageApi.success("Room reservation request has been sent.", 1);
      })
      .catch((error) => {
        messageApi.error(error.response.data.message, 1);
      });
  };
  return (
    <div className="container reservation-home">
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          width: "100%",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 0",
          paddingBottom: "0",
          marginTop: "50px",
        }}
      >
        <h2 className="reservation-title">Make a reservation</h2>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            padding: "10px",
            width: "80%",
            marginTop: "20px",
          }}
          validateMessages={validateMessages}
        >
          <Row>
            <Col span={24} lg={8}>
              <Form.Item name={["Name"]} rules={[{ required: true }]} labelCol={{ span: 24 }}>
                <Input
                  style={{ width: "100%" }}
                  placeholder="Your Name"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={24} lg={8}>
              <Form.Item name={"Email"} rules={[{ type: "email" }]}>
                <Input style={{ width: "100%" }} placeholder="Your Email" />
              </Form.Item>
            </Col>
            <Col span={24} lg={8}>
              <Form.Item name={["Phone"]} rules={[{ required: true }]}>
                <Input style={{ width: "100%" }} placeholder="Your Phone" />
              </Form.Item>
            </Col>{" "}
            <Col span={24} lg={8}>
              <Form.Item name={["location"]} rules={[{ required: true }]}>
                <Select
                  defaultValue=""
                  style={{ width: "100%" }}
                  options={[
                    { value: "", label: "Property Location" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                  ]}
                />
              </Form.Item>
            </Col>{" "}
            <Col span={24} lg={8}>
              <Form.Item name={["type"]} rules={[{ required: true }]}>
                <Select
                  defaultValue=""
                  style={{ width: "100%" }}
                  options={[
                    { value: "", label: "Property Type" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                  ]}
                />
              </Form.Item>
            </Col>{" "}
            <Col span={24} lg={8}>
              <Form.Item name={["bedroom"]} rules={[{ required: true }]}>
                <Select
                  defaultValue=""
                  style={{ width: "100%" }}
                  options={[
                    { value: "", label: "Bedroom" },
                    { value: "1", label: "1" },
                    { value: "2", label: "2" },
                  ]}
                />
              </Form.Item>
            </Col>{" "}
            <Col span={24}>
              <Row style={{justifyContent: 'center'}}>
              <Col span={24} lg={8}>
              <Form.Item name={["bathroom"]} rules={[{ required: true }]}>
                <Select
                  defaultValue=""
                  style={{ width: "100%" }}
                  options={[
                   { value: "", label: "Bathroom" },
                    { value: "1", label: "1" },
                    { value: "2", label: "2" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12} lg={3}>
              <Form.Item name={["Min Price"]} rules={[{ required: true }]}>
                <InputNumber min={1} defaultValue={3} />
              </Form.Item>
            </Col>
            <Col span={12} lg={3}>
              <Form.Item name={["Max Price"]} rules={[{ required: true }]}>
                <InputNumber min={1} defaultValue={3} />
              </Form.Item>
            </Col>
              </Row>
            
            </Col>

          </Row>

          <Form.Item
            wrapperCol={{ ...layout.wrapperCol }}
            style={{ width: "100%", display: 'flex', justifyContent: 'center' }}
          >
            <Button
              style={{
                backgroundColor: "#DEB25F",
                color: "white",
                width: "310px",
                marginTop: "30px"
              }}
              className="submit-reservation"
              htmlType="submit"
            >
              Send Us
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
