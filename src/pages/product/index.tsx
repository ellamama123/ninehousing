// @ts-nocheck

import React from "react";
import {
  Row,
  Col,
  Button,
  Pagination,
} from "antd";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../layout/Layout";
import SearchBar from "../../layout/SearchBar";
import { useRouter } from 'next/router';
import useTrans from '../../layout/useTrans'

const optionPrice = [
  { label: "50$ & below ", value: "Lessthan50" },
  { label: "50$ to 100$", value: "About50To100" },
  { label: "100$ to 200$", value: "About100To200" },
  { label: "200$ & above ", value: "GretherThan200" },
];


export default function Home() {
  const [product, setProduct] = useState<{id: any, name: any, address: any, bathroom: any, bedroom: any, acreage: any, price: any, unit: any, description: any}[]>([]);
  const [sort, setSort] = useState("");
  const [perPage, setPerPage] = useState(0);
  const [name, setName] = useState("");
  const [roomLocation, setRoomLocation] = useState<any>();
  const [price, setPrice] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const router = useRouter();
  const { name_search, price_search, startDate_search, endDate_search, roomLocation_search } = router.query;
  const trans = useTrans()  
  const { locale } = useRouter()

  useEffect(() => {
    if(name_search || price_search || startDate_search || endDate_search || roomLocation_search) {
      setName(name_search);
      setPrice(price_search);
      setStartDate(startDate_search);
      setEndDate(endDate_search);
      setRoomLocation(roomLocation_search);
      getProduct();
    } else {
      getProductFirst();
    }
  }, []);

  useEffect(() => {
    getProduct();
  }, [pageIndex]);

  useEffect(() => {
    getProduct();
  }, [locale]);

  const getProduct = () => {
    axios
      .get("https://web-developing.site/api/rooms?page=" + pageIndex, {
        params: {
          price: price,
          quickSearch: name,
          "sortDesc[]": sort,
          startDate: startDate,
          endDate: endDate,
          district: roomLocation,
          lang: locale
        },
      })
      .then((response) => {
        setProduct(response.data.data);
        setPerPage(response.data.meta.per_page);
        setPageIndex(response.data.meta.current_page);
        setTotalPage(response.data.meta.total);
      });
  };

  const getProductFirst = () => {
    axios
      .get("https://web-developing.site/api/rooms?page=" + pageIndex, {
        params: {
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

  const handleChildData = (name: any, price: any, startDate: any, endDate: any, roomLocation: any) => {
    setName(name);
    setPrice(price);
    setStartDate(startDate);
    setEndDate(endDate);
    setRoomLocation(roomLocation);
    getProduct();
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
            <SearchBar onChildData={handleChildData} />

            <div className="product" style={{ marginTop: 50 }}>
              <Row>
                <Col lg={18} span={24} style={{margin: '0 auto'}}>
                  <div>
                    <div>
                      <h1
                        className="product-list-text"
                        style={{ fontSize: "48px" }}
                      >
                        {trans.product.list}
                      </h1>
                      <p style={{ fontWeight: 600, marginTop: 20 }}>{trans.product.sort}</p>
                      <Row style={{ marginTop: 20 }}>
                        <Button
                          type="primary"
                          style={{
                            height: "100%",
                            backgroundColor: "#DEB25F",
                            width: 150,
                          }}
                          onClick={getProduct}
                        >
                          {trans.product.match}
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
                          {trans.product.lowest}
                        </Button>
                      </Row>
                    </div>
                    {product &&
                      product.map((prd: any, index: any) => (
                        <Link
                          key={index}
                          href={
                            window.location.origin +
                            "/product/" +
                            prd.id
                          }
                          title=""
                        >
                          <Row
                            style={{ marginTop: 20, backgroundColor: "#F1F1F1", cursor:'pointer' }}
                          >    
                          <Col lg={6} span={24}>
                            <img width={"100%"} height={'100%'} style={{aspectRatio: '1/1', objectFit: 'cover'}} alt="" src={prd?.thumbnail} />
                          </Col>
                          <Col
                            lg={18}
                            span={24}
                            style={{ paddingLeft: 20, paddingTop: 10, paddingRight: 20 }}
                          >
                            <h1>{prd.name}</h1>
                            <p style={{ marginTop: 15 }}>{prd.address}</p>
                            <p style={{ marginTop: 15 }} className="prd-des" dangerouslySetInnerHTML={{ __html: prd.description }} />
                            <Row style={{ marginTop: 15 }}>
                              <Col
                                lg={3}
                                span={5}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img width={20} src={`/icon/bed.png`} />
                                <span>{prd.bedroom} {trans.product.br}</span>
                              </Col>
                              <Col
                                lg={3}
                                span={5}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img width={20} src={`/icon/water.png`} />
                                <span>{prd.bathroom} {trans.product.ba}</span>
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
                                  src={`/icon/square-Medical.png`}
                                  alt=""
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
                                    <span>{trans.product.book}</span>
                                  </Link>
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        </Link>

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
