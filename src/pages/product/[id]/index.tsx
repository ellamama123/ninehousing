// @ts-nocheck

import React from "react";
import {
  Row,
  Col,
  Button,
  Image,
  Form,
  Input,
  message,
  InputNumber,
  Select,
} from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Layout from "../../../layout/Layout";
import useTrans from "../../../layout/useTrans";
import Link from "next/link";
import {
  HeartFilled, HeartOutlined, PlusOutlined, MinusOutlined
} from '@ant-design/icons';

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

interface District {
  code: string;
  name: string;
}

export default function ProductDetail() {
  const trans = useTrans();
  const { locale } = useRouter()
  const router = useRouter();
  const [product, setProduct] = useState<{
    id: any;
    images: any;
    name: any;
    address: any;
    bathroom: any;
    bedroom: any;
    acreage: any;
    price: any;
    unit: any;
    description: any;
    related_rooms: any;
    view_count: any;
  }>();
  const [email, setEmail] = useState<string>();
  const [messageApi, contextHolder] = message.useMessage();
  const [roomType, setRoomType] = useState<any>();
  const [roomLocation, setRoomLocation] = useState<any>();
  const [bedroom, setBedroom] = useState<any>();
  const [bathroom, setBathroom] = useState<any>();
  const [districts, setDistricts] = useState<any>();
  const [isFavorite, setIsFavorite] = useState<any>(false);
  const id = router.query.id;

  useEffect(() => {
    if (id) {
      axios
        .get("https://web-developing.site/api/rooms/" + id, {
          params: {
            lang: locale
          }
        })
        .then((response) => {
          setProduct(response.data);
        });
        let room = localStorage.getItem('favoriteRoom');
        if (room) {
          let roomList = JSON.parse(room)
          let existingRoomIndex = roomList.findIndex((room) => room.id === id);
          if(existingRoomIndex != -1) {
            setIsFavorite(false)
          } else {
            setIsFavorite(true)
          }
        }
    }
  }, [router.query.id]);

  useEffect(() => {
    if (id) {
      axios
        .get("https://web-developing.site/api/rooms/" + id, {
          params: {
            lang: locale
          }
        })
        .then((response) => {
          setProduct(response.data);
        });
    }
  }, [locale]);

  useEffect(() => {
    axios
      .get("https://web-developing.site/api/locations/1")
      .then((response: any) => {
        let districtList: District[] = response.data.districts;
        setDistricts([
          ...districtList?.map((district) => ({
            value: district.code,
            label: district.name,
          })),
        ]);
      });
  }, []);

  const onFinish = (values: any) => {
    let id = router.query.id;
    axios
      .post("https://web-developing.site/api/reservations", {
        name: values.Name,
        email: values.Email,
        phone: values.Phone,
        min_price: values.min_price,
        max_price: values.max_price,
        district: roomLocation,
        room_type: roomType,
        bedroom: bedroom,
        bathroom: bathroom,
        note: values.note,
      })
      .then((response) => {
        messageApi.success("Room reservation request has been sent.", 1);
      })
      .catch((error) => {
        messageApi.error(error.response.data.message, 1);
      });
  };

  const toggleFavorite = () => {
    let room = localStorage.getItem('favoriteRoom');
    if (room) {
      let roomList = JSON.parse(room)
      let existingRoomIndex = roomList.findIndex((room) => room.id === product.id);
      if(existingRoomIndex != -1) {
        const updatedRoomList = [...roomList];
        updatedRoomList.splice(existingRoomIndex, 1);
        localStorage.setItem('favoriteRoom', JSON.stringify(updatedRoomList));
        setIsFavorite(false)
        messageApi.success(trans.product_detail.remove_favorite, 1);
      } else {
        let addRoom = {
          id: product.id,
          name: product.name,
          address: product.address,
          thumbnail: product.thumbnail,
          description: product.description,
          bedroom: product.bedroom,
          bathroom: product.bathroom,
          acreage: product.acreage,
          price: product.price,
          unit: product.unit,
        }
        const newRoomList = [...roomList, addRoom];
        localStorage.setItem('favoriteRoom', JSON.stringify(newRoomList));
        setIsFavorite(true)
        messageApi.success(trans.product_detail.add_favorite, 1);
      }
    } else {
      let addRoom = {
        id: product.id,
        name: product.name,
        address: product.address,
        thumbnail: product.thumbnail,
        description: product.description,
        bedroom: product.bedroom,
        bathroom: product.bathroom,
        acreage: product.acreage,
        price: product.price,
        unit: product.unit,
      }
      localStorage.setItem('favoriteRoom', JSON.stringify([addRoom]));
      setIsFavorite(true)
      messageApi.success(trans.product_detail.add_favorite, 1);
    }
  }

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
                    <Col span={24} className="hover-image">
                      <Image
                        className="product-image-big"
                        width={"100%"}
                        alt=""
                        src={product?.images[0]}
                        fallback="data:image/png;base64,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"
                      />
                    </Col>
                  </Col>
                  <Col lg={12} span={24} className="product-image-small-wrap">
                    <Row>
                      {product?.images
                        .slice(1, 5)
                        .map((image: any, index: any) => (
                          <Col span={12} key={index}>
                            <div
                              className={`image-small-wrap ${
                                index == 3 || index == 2 ? "marginTop" : ""
                              } ${
                                index == 0 || index == 2 ? "marginRight" : ""
                              }`}
                            >
                              <div className="hover-image">
                                <Image
                                  className="product-image-small"
                                  width={"100%"}
                                  alt=""
                                  src={image}
                                  fallback="data:image/png;base64,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"
                                />
                              </div>
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
                  <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        alt=""
                        width={20}
                        style={{ marginRight: "10px" }}
                        src={`/icon/eye.png`}
                      />
                      <span>{product?.view_count} {trans.product_detail.view}</span>
                    </div>
                    <div>
                      {
                        !isFavorite ? <Button type="primary" size="large" danger icon={<HeartOutlined />} onClick={toggleFavorite}>Favorite</Button> : <Button type="primary" size="large" icon={<HeartFilled />}  danger onClick={toggleFavorite}>Remove</Button> 
                      }
                      
                    </div>
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
                            <img alt="" width={20} src={`/icon/bed.png`} />
                            <span>{product?.bedroom} {trans.product_detail.br}</span>
                          </Col>
                          <Col
                            lg={4}
                            span={8}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img alt="" width={20} src={`/icon/water.png`} />
                            <span>{product?.bathroom} {trans.product_detail.ba}</span>
                          </Col>
                          <Col
                            lg={4}
                            span={8}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img alt="" width={20} src={`/icon/square-Medical.png`} />
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
                    <Row style={{ flexDirection: "column" }}>
                      <Col span={24}>
                        <div style={{ marginTop: "50px" }}>
                          <h3 style={{ marginBottom: "20px" }}>{trans.product_detail.desc}</h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: product?.description,
                            }}
                          />
                        </div>
                      </Col>
                      <div style={{ marginTop: "50px" }}>
                        <h3 style={{ marginBottom: "20px" }}>
                        {trans.product_detail.general}
                        </h3>
                        <Row>
                          {product?.tags.general_amenities.map(
                            (value, index) => (
                              <Col span={12} key={index} style={{marginTop: '10px'}}>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <Image
                                    width={20}
                                    alt=""
                                    src={`/icon/badge.png`}
                                    preview={false}
                                  />
                                  <span style={{ marginLeft: "5px" }}>{value}</span>
                                </div>
                              </Col>
                            )
                          )}
                        </Row>
                      </div>
                      <div style={{ marginTop: "50px" }}>
                        <h3 style={{ marginBottom: "20px" }}>
                        {trans.product_detail.outdoor}
                        </h3>
                        <Row>
                          {product?.tags.outdoor_facilities.map(
                            (value, index) => (
                              <Col span={12} key={index} style={{marginTop: '10px'}}>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <Image
                                    width={20}
                                    alt=""
                                    src={`/icon/badge.png`}
                                    preview={false}
                                  />
                                  <span style={{ marginLeft: "5px" }}>{value}</span>
                                </div>
                              </Col>
                            )
                          )}
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
                    <h2>{trans.product_detail.reservation}</h2>
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
                          placeholder={ trans.reservation.name }
                        />
                      </Form.Item>
                      <Form.Item name={"Email"} rules={[{ type: "email" }]}>
                        <Input
                          style={{ width: "310px" }}
                          placeholder="Email"
                        />
                      </Form.Item>
                      <Form.Item name={["Phone"]}>
                        <Input
                          style={{ width: "310px" }}
                          placeholder={ trans.reservation.phone }
                        />
                      </Form.Item>
                      <Form.Item name={["location"]}>
                        <Select
                          placeholder={ trans.reservation.location }
                          onChange={(value) => {
                            setRoomLocation(value);
                          }}
                          style={{ width: "100%" }}
                          options={districts}
                        />
                      </Form.Item>
                      <Form.Item name={["type"]}>
                        <Select
                          placeholder={ trans.reservation.type }
                          onChange={(value) => {
                            setRoomType(value);
                          }}
                          options={[
                            { value: "0", label: trans.reservation.type },
                            { value: "1", label: trans.reservation.apar },
                            { value: "2", label: trans.reservation.ser_apar },
                            { value: "3", label: trans.reservation.house },
                            { value: "4", label: trans.reservation.villa },
                          ]}
                        />
                      </Form.Item>
                      <Form.Item name={["bedroom"]}>
                        <Select
                          defaultValue=""
                          style={{ width: "100%" }}
                          onChange={(value) => {
                            setBedroom(value);
                          }}
                          options={[
                            { value: "", label: trans.reservation.be },
                            { value: "1", label: "1" },
                            { value: "2", label: "2" },
                            { value: "3", label: "3" },
                            { value: "4", label: "4" },
                          ]}
                        />
                      </Form.Item>
                      <Form.Item name={["bathroom"]}>
                        <Select
                          defaultValue=""
                          style={{ width: "100%" }}
                          onChange={(value) => {
                            setBathroom(value);
                          }}
                          options={[
                            { value: "", label: trans.reservation.ba },
                            { value: "1", label: "1" },
                            { value: "2", label: "2" },
                          ]}
                        />
                      </Form.Item>
                      <Form.Item name={["min_price"]}>
                        <InputNumber min={1} placeholder={ trans.reservation.mi } />
                      </Form.Item>
                      <Form.Item name={["max_price"]}>
                        <InputNumber min={1} placeholder={ trans.reservation.ma } />
                      </Form.Item>
                      <Form.Item name={["note"]}>
                        <Input
                          style={{ width: "310px" }}
                          placeholder="Note"
                        />
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
                          {trans.product_detail.send}
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
            <div style={{ marginTop: "75px" }}>
              <h1 style={{ marginBottom: "25px", fontFamily: "system-ui" }}>
              {trans.product_detail.related}
              </h1>
              <Row gutter={24}>
                {product?.related_rooms
                  .slice(0, 3)
                  .map((prd: any, index: any) => (
                    <Col
                      className="related-product"
                      lg={8}
                      span={24}
                      key={index}
                    >
                      <Link
                        key={index}
                        href={window.location.origin + "/product/" + prd.id}
                        title=""
                      >
                        <Row>
                          <Col span={24}>
                            <div>
                              <Image
                                alt="test"
                                width={"100%"}
                                style={{
                                  aspectRatio: "3 / 2",
                                  objectFit: "cover",
                                }}
                                src={prd.thumbnail}
                                preview={false}
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
                                {trans.product_detail.available}
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
                                    <Col span={24}>
                                      <p
                                        style={{
                                          fontSize: "20px",
                                          fontWeight: "bold",
                                          minHeight: "50px"
                                        }}
                                      >
                                        {prd?.name}
                                      </p>
                                    </Col>
                                    <Col span={24}>
                                      <p style={{ marginTop: "10px", minHeight: "15px" }}>
                                        {prd?.address}
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
                                      <span>{prd?.bathroom} {trans.product_detail.br}</span>
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
                                        {prd?.bedroom} {trans.product_detail.ba}
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
                                      <span>{prd?.acreage} Sq.Ft</span>
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
                                      <h2>
                                        ${prd?.price}/{prd?.unit}
                                      </h2>
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
                                        {trans.product_detail.book}
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
                      </Link>
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
