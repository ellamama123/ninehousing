import React from "react";
import { Col, Button, Row, Image } from "antd";

const OurApartments: React.FC = () => (
  <div className="oap-wrap">
    <div className="container">
      <p className="oap-title">Our apartments</p>
      <Row gutter={24}>
        {[0, 1, 2].map((index) => (
          <Col
            className="related-product"
            lg={8}
            span={24}
            key={index}
          >
            <Row>
              <Col span={24}>
                <div>
                  <Image
                    width={"100%"}
                    height={"75%"}
                    alt="Image"
                    src='/image/related_properties.png'
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
                  className="oap-content-wrap"
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
                          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                            301
                          </p>
                        </Col>
                        <Col span={18}>
                          <p>15/41 Linh Lang Str, Ba Dinh Dist, Ha Noi</p>
                        </Col>
                      </Row>
                      <Row style={{ marginTop: 25 }}>
                        <Col
                          span={8}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <img width={20} src={`/icon/bed.png`} />
                          <span>1 Br</span>
                        </Col>
                        <Col
                          span={8}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <img width={20} src={`/icon/water.png`} />
                          <span style={{ marginLeft: "10px" }}>1 Ba</span>
                        </Col>
                        <Col
                          span={8}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <img width={20} src={`/icon/square-Medical.png`} />
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
                      <Row style={{ display: "flex", alignItems: "center" }}>
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
                </div>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default OurApartments;
