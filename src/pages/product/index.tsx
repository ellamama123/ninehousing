import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import {
  Row,
  Col,
  Button,
  Input,
  DatePicker,
  Radio,
  Checkbox,
  Pagination,
  Select
} from "antd";
import type { RadioChangeEvent } from "antd";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../layout/Layout";

const optionPrice = [
  { label: "50$ & below ", value: "Lessthan50" },
  { label: "50$ to 100$", value: "About50To100" },
  { label: "100$ to 200$", value: "About100To200" },
  { label: "200$ & above ", value: "GretherThan200" },
];

export default function Home() {
  const [product, setProduct] = useState<{id: any, name: any, address: any, bathroom: any, bedroom: any, acreage: any, price: any, unit: any, description: any}[]>([]);
  const [price, setPrice] = useState(null);
  const [name, setName] = useState("");
  const [sort, setSort] = useState("");
  const [perPage, setPerPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    getProduct();
  }, [pageIndex]);

  const onChangePrice = (e: RadioChangeEvent) => {
    setPrice(e.target.value);
    getProduct();
  };

  const getProduct = () => {
    axios
      .get("https://web-developing.site/api/rooms?page=" + pageIndex, {
        params: {
          price: price,
          quickSearch: name,
          "sortDesc[]": sort,
        },
      })
      .then((response) => {
        setProduct(response.data.data);
        setPerPage(response.data.meta.per_page);
        setPageIndex(response.data.meta.current_page);
        setTotalPage(response.data.meta.total);
      });
  };

  const onChange = (page: any) => {
    setPageIndex(page);
  };

  return (
    <div>
      <Head>
        <title>Room | Nine Housing</title>
      </Head>
      <Layout>
        <div style={{ margin: "150px 0 50px 0" }}>
          <div
            style={{
              width: "80%",
              margin: "0 auto",
            }}
          >
            <Row>
              <Col lg={4} span={24} className="search-name">
                <Input
                  className="input-name"
                  size="large"
                  placeholder="Enter a destination or property"
                  prefix={<SearchOutlined />}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col lg={8} span={24} className="search-date">
                <DatePicker
                  showTime
                  onChange={onChange}
                  style={{
                    width: 125,
                    padding: 15,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  placeholder="Check in"
                />
                <DatePicker
                  showTime
                  onChange={onChange}
                  style={{
                    width: 125,
                    padding: 15,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                  placeholder="Check out"
                />
              </Col>
              <Col lg={4} span={24} className="search-name" style={{
                 display: "flex",
                 justifyContent: "flex-end",
                 alignItems: "center",
              }}>
                <Select
                  defaultValue="Choose Price"
                  style={{ width: "90%", height: "100%" }}
                  options={optionPrice}
                />
              </Col>
              <Col lg={4} span={24} className="search-name"  style={{
                 display: "flex",
                 justifyContent: "flex-end",
                 alignItems: "center",
              }}>
                <Select
                  defaultValue="Choose Address"
                  style={{ width: "90%", height: "100%", }}
                  options={optionPrice}
                />
              </Col>
              <Col
                lg={4}
                span={24}
                className="search-button"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Button
                  className="button-search"
                  type="primary"
                  style={{
                    height: "80%",
                    backgroundColor: "#DEB25F",
                    width: 125,
                    fontWeight: "bold",
                  }}
                  onClick={getProduct}
                >
                  Search
                </Button>
              </Col>
            </Row>

            <div className="product" style={{ marginTop: 50 }}>
              <Row>
                <Col lg={18} span={24} style={{margin: '0 auto'}}>
                  <div>
                    <div>
                      <h1
                        className="product-list-text"
                        style={{ fontSize: "48px" }}
                      >
                        Product List
                      </h1>
                      <p style={{ fontWeight: 600, marginTop: 20 }}>Sort by</p>
                      <Row style={{ marginTop: 20 }}>
                        <Button
                          type="primary"
                          style={{
                            height: "100%",
                            backgroundColor: "#DEB25F",
                            width: 150,
                          }}
                        >
                          Best match
                        </Button>
                        <Button
                          type="primary"
                          style={{
                            height: "100%",
                            backgroundColor: "black",
                            marginLeft: 20,
                          }}
                          onClick={() => {
                            setSort("price");
                            getProduct();
                          }}
                        >
                          Lowest price first
                        </Button>
                      </Row>
                    </div>
                    {product &&
                      product.map((prd, index) => (
                        <Row
                          key={index}
                          style={{ marginTop: 20, backgroundColor: "#F1F1F1" }}
                        >
                          <Col lg={6} span={24}>
                            <img width={"100%"} src={`image/product.png`} />
                          </Col>
                          <Col
                            lg={18}
                            span={24}
                            style={{ paddingLeft: 20, paddingTop: 10 }}
                          >
                            <h1>{prd.name}</h1>
                            <p style={{ marginTop: 15 }}>{prd.address}</p>
                            <p style={{ marginTop: 15 }}>{prd.description}</p>
                            <Row style={{ marginTop: 15 }}>
                              <Col
                                lg={3}
                                span={5}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img width={20} src={`icon/bed.png`} />
                                <span>{prd.bedroom} Br</span>
                              </Col>
                              <Col
                                lg={3}
                                span={5}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img width={20} src={`icon/water.png`} />
                                <span>{prd.bathroom} Ba</span>
                              </Col>
                              <Col
                                lg={3}
                                span={5}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  width={20}
                                  src={`icon/square-Medical.png`}
                                />
                                <span>{prd.acreage}</span>
                              </Col>
                            </Row>
                            <Row
                              className="product-bottom"
                              style={{
                                marginTop: 20,
                                justifyContent: "space-between",
                              }}
                            >
                              <Col span={12}>
                                <h2>
                                  ${prd.price}/{prd.unit}
                                </h2>
                              </Col>
                              <Col span={12}>
                                <Button
                                  type="primary"
                                  style={{
                                    height: "100%",
                                    backgroundColor: "#DEB25F",
                                    color: "black",
                                    fontWeight: "bold",
                                    float: "right",
                                    marginRight: "20px",
                                  }}
                                >
                                  <Link
                                    href={
                                      window.location.origin +
                                      "/product/" +
                                      prd.id
                                    }
                                    title=""
                                  >
                                    <span>Book now</span>
                                  </Link>
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      ))}

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Pagination
                        style={{ marginTop: 30 }}
                        onChange={onChange}
                        pageSize={perPage}
                        current={pageIndex}
                        total={totalPage}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
