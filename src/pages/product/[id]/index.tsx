import React from "react";
import { Row, Col, Button, Image, Form, Input, message, InputNumber, Select } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Layout from "../../../layout/Layout";

const images = [
  "https://via.placeholder.com/150", // Image1
  "https://via.placeholder.com/150", // Image2
  "https://via.placeholder.com/150", // Image3
  "https://via.placeholder.com/150", // Image4
  "https://via.placeholder.com/150", // Image5
];

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

export default function ProductDetail() {
  const router = useRouter();
  const [product, setProduct] = useState<{name: any, address: any, bathroom: any, bedroom: any, acreage: any, price: any, unit: any, description: any}>();
  const [email, setEmail] = useState<string>();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    let id = router.query.id;

    if (id) {
      axios
        .get("https://web-developing.site/api/rooms/" + id)
        .then((response) => {
          setProduct(response.data);
        });
    }
  }, [router.query.id]);

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
    <>
      <Head>
        <title>{product?.name} | Nine Housing</title>
      </Head>
      <Layout>
        <div style={{ margin: "30px 0 50px 0" }}>
          {contextHolder}
          <div
            style={{
              width: "80%",
              margin: "0 auto",
            }}
          >
            <div className="image-product-wrap">
              <Image.PreviewGroup
                preview={{
                  onChange: (current, prev) =>
                    console.log(
                      `current index: ${current}, prev index: ${prev}`
                    ),
                }}
              >
                <Row>
                  <Col lg={12} span={24}>
                    <Col span={24}>
                      <Image
                        className="product-image-big"
                        width={"100%"}
                        src="http://localhost:3000/image/product-1.png"
                      />
                    </Col>
                  </Col>
                  <Col lg={12} span={24} className="product-image-small-wrap">
                    <Row>
                      {[2, 3, 4, 5].map((index) => (
                        <Col span={12} key={index}>
                          <div
                            className="image-small-wrap"
                            style={{
                              marginRight:
                                index == 3 || index == 5 ? "0px" : "20px",
                              paddingTop:
                                index == 2 || index == 3 ? "0px" : "20px",
                            }}
                          >
                            <Image
                              className="product-image-small"
                              width={"100%"}
                              src="http://localhost:3000/image/product-1.png"
                            />
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Image.PreviewGroup>
            </div>
            <div style={{ marginTop: "40px" }}>
              <Row justify="space-between">
                <Col lg={14} span={24}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      width={20}
                      style={{ marginRight: "10px" }}
                      src={`/icon/eye.png`}
                    />
                    <span>1550 Views</span>
                  </div>
                  <div>
                    <Row>
                      <Col span={18} style={{ marginTop: 30 }}>
                        <h1>{product?.name}</h1>
                        <p style={{ marginTop: 15 }}>{product?.address}</p>
                        <Row style={{ marginTop: 15 }}>
                          <Col
                            lg={4}
                            span={8}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img width={20} src={`/icon/bed.png`} />
                            <span>{product?.bedroom} Br</span>
                          </Col>
                          <Col
                            lg={4}
                            span={8}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img width={20} src={`/icon/water.png`} />
                            <span>{product?.bathroom} Ba</span>
                          </Col>
                          <Col
                            lg={4}
                            span={8}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img width={20} src={`/icon/square-Medical.png`} />
                            <span>{product?.acreage} Sq.Ft</span>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={6}>
                        <h2 style={{ marginTop: "50px" }}>
                          ${product?.price}/{product?.unit}
                        </h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <div style={{ marginTop: "50px" }}>
                          <h3 style={{ marginBottom: "20px" }}>Description</h3>
                          <p>{product?.description}</p>
                        </div>
                      </Col>
                      <div style={{ marginTop: "50px" }}>
                        <h3 style={{ marginBottom: "20px" }}>
                          General amenities
                        </h3>
                        <Row>
                          <Col span={12}>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <img
                                width={20}
                                style={{ marginRight: "20px" }}
                                src={`/icon/badge.png`}
                              />
                              <span>Air Conditioner</span>
                            </div>
                          </Col>
                          <Col span={12}>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <img
                                width={20}
                                style={{ marginRight: "20px" }}
                                src={`/icon/badge.png`}
                              />
                              <span>Air Conditioner</span>
                            </div>
                          </Col>
                          <Col span={12}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "10px",
                              }}
                            >
                              <img
                                width={20}
                                style={{ marginRight: "20px" }}
                                src={`/icon/badge.png`}
                              />
                              <span>Air Conditioner</span>
                            </div>
                          </Col>
                          <Col span={12}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "10px",
                              }}
                            >
                              <img
                                width={20}
                                style={{ marginRight: "20px" }}
                                src={`/icon/badge.png`}
                              />
                              <span>Air Conditioner</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div style={{ marginTop: "50px" }}>
                        <h3 style={{ marginBottom: "20px" }}>
                          Outdoor facilities
                        </h3>
                        <Row>
                          <Col span={12}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "10px",
                              }}
                            >
                              <img
                                width={20}
                                style={{ marginRight: "20px" }}
                                src={`/icon/badge.png`}
                              />
                              <span>Air Conditioner</span>
                            </div>
                          </Col>
                          <Col span={12}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "10px",
                              }}
                            >
                              <img
                                width={20}
                                style={{ marginRight: "20px" }}
                                src={`/icon/badge.png`}
                              />
                              <span>Air Conditioner</span>
                            </div>
                          </Col>
                          <Col span={12}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "10px",
                              }}
                            >
                              <img
                                width={20}
                                style={{ marginRight: "20px" }}
                                src={`/icon/badge.png`}
                              />
                              <span>Air Conditioner</span>
                            </div>
                          </Col>
                          <Col span={12}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "10px",
                              }}
                            >
                              <img
                                width={20}
                                style={{ marginRight: "20px" }}
                                src={`/icon/badge.png`}
                              />
                              <span>Air Conditioner</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Row>
                  </div>
                </Col>
                <Col
                  className="reservation-wrap"
                  lg={10}
                  span={24}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    height: "fit-content",
                  }}
                >
                  <div
                    className="reservation-product"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      width: "350px",
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
                        width: "330px",
                        marginTop: "20px",
                      }}
                      validateMessages={validateMessages}
                    >
                      <Form.Item name={["Name"]} rules={[{ required: true }]}>
                        <Input
                          style={{ width: "310px" }}
                          placeholder="Your Name"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Item>
                      <Form.Item name={"Email"} rules={[{ type: "email" }]}>
                        <Input
                          style={{ width: "310px" }}
                          placeholder="Your Email"
                        />
                      </Form.Item>
                      <Form.Item name={["Phone"]} rules={[{ required: true }]}>
                        <Input
                          style={{ width: "310px" }}
                          placeholder="Your Phone"
                        />
                      </Form.Item>
                      <Form.Item name={["location"]} rules={[{ required: true }]}>
                        <Select
                          defaultValue=""
                          style={{ width: "100%" }}
                          options={[
                            { value: '', label: 'Property Location' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                          ]}
                        />
                      </Form.Item>
                      <Form.Item name={["type"]} rules={[{ required: true }]}>
                        <Select
                          defaultValue=""
                          style={{ width: "100%" }}
                          options={[
                            { value: '', label: 'Property Type' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                          ]}
                        />
                      </Form.Item>
                      <Form.Item name={["bedroom"]} rules={[{ required: true }]}>
                        <Select
                          defaultValue=""
                          style={{ width: "100%" }}
                          options={[
                            { value: '', label: 'Bedroom' },
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                          ]}
                        />
                      </Form.Item>
                      <Form.Item name={["bathroom"]} rules={[{ required: true }]}>
                        <Select
                          defaultValue=""
                          style={{ width: "100%" }}
                          options={[
                            { value: '', label: 'Bathroom' },
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                          ]}
                        />
                      </Form.Item>
                      <Form.Item name={["Min Price"]} rules={[{ required: true }]}>
                        <InputNumber min={1} defaultValue={3} />
                      </Form.Item>
                      <Form.Item name={["Max Price"]} rules={[{ required: true }]}>
                        <InputNumber min={1} defaultValue={3} />
                      </Form.Item>
                      <Form.Item
                        wrapperCol={{ ...layout.wrapperCol }}
                        style={{ width: "100%" }}
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
                </Col>
              </Row>
            </div>
            <div style={{ marginTop: "75px" }}>
              <h1 style={{ marginBottom: "25px", fontFamily: "system-ui" }}>
                Related properties
              </h1>
              <Row>
                {[0, 1, 2].map((index) => (
                  <Col
                    className="related-product"
                    lg={8}
                    span={24}
                    key={index}
                    style={{
                      paddingRight: index == 0 || index == 1 ? "20px" : 0,
                    }}
                  >
                    <Row>
                      <Col span={24}>
                        <div>
                          <Image
                            alt="test"
                            width={"100%"}
                            height={"75%"}
                            src="http://localhost:3000/image/related_properties.png"
                          />
                          <div
                            style={{
                              position: "absolute",
                              left: "1rem",
                              top: "1rem",
                              background: "#DEB25F",
                              padding: "0.5rem 1rem",
                              borderRadius: "10px",
                            }}
                          >
                            Available
                          </div>
                        </div>

                        <div
                          style={{
                            border: "1px solid",
                            borderEndStartRadius: "5px",
                            borderBottomRightRadius: "5px",
                            borderTop: "none",
                          }}
                        >
                          <div>
                            <div style={{ padding: "20px" }}>
                              <Row
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginTop: "10px",
                                }}
                              >
                                <Col span={6}>
                                  <p
                                    style={{
                                      fontSize: "20px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    301
                                  </p>
                                </Col>
                                <Col span={18}>
                                  <p>
                                    15/41 Linh Lang Str, Ba Dinh Dist, Ha Noi
                                  </p>
                                </Col>
                              </Row>
                              <Row style={{ marginTop: 25 }}>
                                <Col
                                  span={8}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <img width={20} src={`/icon/bed.png`} />
                                  <span>1 Br</span>
                                </Col>
                                <Col
                                  span={8}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <img width={20} src={`/icon/water.png`} />
                                  <span style={{ marginLeft: "10px" }}>
                                    1 Ba
                                  </span>
                                </Col>
                                <Col
                                  span={8}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    width={20}
                                    src={`/icon/square-Medical.png`}
                                  />
                                  <span>55 Sq.Ft</span>
                                </Col>
                              </Row>
                            </div>
                            <div
                              style={{
                                padding: "25px 20px",
                                borderTop: "1px solid",
                              }}
                            >
                              <Row
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Col span={12}>
                                  <h2>$500/Month</h2>
                                </Col>
                                <Col
                                  span={12}
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                  }}
                                >
                                  <Button
                                    type="primary"
                                    style={{
                                      height: "100%",
                                      backgroundColor: "#DEB25F",
                                      color: "black",
                                      fontWeight: "bold",
                                      padding: "7px 20px",
                                    }}
                                  >
                                    Book now
                                  </Button>
                                </Col>
                              </Row>
                            </div>
                          </div>
                          {/* <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  HAVING PETS IN A TOAN TIEN APARTMENT (FT. THE PETS...
                </p>
                <p style={{ fontSize: "18px" }}>
                  We are cool with it, but let's sign an agreement before pet
                  coming home.
                </p>
                <p style={{ fontSize: "16px", color: "gray" }}>12h, 0510</p>
                <Button style={{ backgroundColor: "#DEB25F", color: "white" }}>
                  View more
                </Button> */}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
