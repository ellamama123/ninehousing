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
} from "antd";

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
  const onFinish = (values: any) => {
    let id = router.query.id;
    axios
      .post("https://web-developing.site/api/reservations", {
        name: values.Name,
        email: values.Email,
        phone: values.Phone,
        room_id: id,
      })
      .then((response) => {
        messageApi.success("Room reservation request has been sent.", 1);
      })
      .catch((error) => {
        messageApi.error(error.response.data.message, 1);
      });
  };
  return (
    <div className="container">
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          width: "100%",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 0",
          paddingBottom: "0",
          marginTop: "50px",
        }}
      >
        <h2>Make a reservation</h2>
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
            <Col span={8}>
              <Form.Item name={["Name"]} rules={[{ required: true }]}>
                <Input
                  style={{ width: "100%" }}
                  placeholder="Your Name"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={"Email"} rules={[{ type: "email" }]}>
                <Input style={{ width: "100%" }} placeholder="Your Email" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={["Phone"]} rules={[{ required: true }]}>
                <Input style={{ width: "310px" }} placeholder="Your Phone" />
              </Form.Item>
            </Col>{" "}
            <Col span={8}>
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
            <Col span={8}>
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
            <Col span={8}>
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
            <Col span={8}>
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
            <Col span={8}>
              <Form.Item name={["Min Price"]} rules={[{ required: true }]}>
                <InputNumber min={1} defaultValue={3} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={["Max Price"]} rules={[{ required: true }]}>
                <InputNumber min={1} defaultValue={3} />
              </Form.Item>
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
              }}
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
