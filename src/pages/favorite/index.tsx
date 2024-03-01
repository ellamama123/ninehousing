// @ts-nocheck

import { Row, Col, Button, Image, Pagination } from "antd";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../layout/Layout";
import useTrans from '../../layout/useTrans'
import { useRouter } from 'next/router'

export default function Favorite() {

  const trans = useTrans()  
  const { locale } = useRouter()
  const [favoriteRoom, setFavoriteRoom] = useState([]);
  
  useEffect(() => {
    let room = localStorage.getItem('favoriteRoom');
    setFavoriteRoom(JSON.parse(room));
  }, [])
  return (
    <>
      <Head>
        <title>Favorite | Nine Housing</title>
      </Head>
      <Layout>
        <div
          style={{
            width: "85%",
            margin: "0 auto",
          }}
        >
          <h4 style={{ paddingTop: "20px", marginBottom: '50px', fontSize: '30px', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'SANS-SERIF' }}>
            Yêu thích
          </h4>
          <div>
              <div style={{border: '1px solid gray' ,padding: '50px', marginBottom: '50px'}}>
                  <p style={{fontSize: '22px', fontFamily: 'SANS-SERIF' }}>{favoriteRoom.length} sản phẩm</p>
                  <div>
                    {
                      favoriteRoom &&
                      favoriteRoom.map((prd: any, index: any) => (
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
                          <Col lg={5} span={24}>
                            <img width={"100%"} height={'100%'} style={{aspectRatio: '1/1', objectFit: 'cover'}} alt="" src={prd?.thumbnail} />
                          </Col>
                          <Col
                            lg={19}
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

                      ))
                    }
                  </div>
              </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
