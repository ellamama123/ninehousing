import React from "react";
import { Col, Button, Row, Image, Carousel } from "antd";
import Link from "next/link";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

interface OurApartmentsProps {
  home: Array<any>; // Change `any` to the actual type of your items in the array
}

const OurApartments: React.FC<OurApartmentsProps> = ({ home }) => {
  const onChange = (currentSlide: number) => {
  };

  return (
  <div className="oap-wrap">
    <div className="container">
      <p className="oap-title">Our apartments</p>
      <div className="oap-wrap-slide">
      <Carousel
        afterChange={onChange}
        arrows
        dots={false}
        nextArrow={
          <Button
            style={{ padding: "1rem", height: "auto", width: "auto" }}
            icon={<RightOutlined style={{ fontSize: 20 }} />}
          />
        }
        prevArrow={
          <Button
            style={{ padding: "1rem", height: "auto", width: "auto" }}
            icon={<LeftOutlined style={{ fontSize: 20 }} />}
          />
        }
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
        slidesToShow={3}
        style={{ margin: '0 -10px' }}
      >
        {home.map((hom, index: number) => (

            <Row key={index}>
              <Col span={24}>
                <div>
                  <Image
                    width={"100%"}
                    style={{
                      aspectRatio: '3 / 2', 
                      objectFit: 'cover'
                    }}
                    alt="Image"
                    src={hom.thumbnail}
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
                        <Col span={24}>
                          <p style={{ fontSize: "20px", minHeight: '70px', fontWeight: "bold" }}>
                            {hom.name}
                          </p>
                        </Col>
                        <Col span={24}>
                          <p style={{marginTop: '10px'}}>{hom.address}</p>
                        </Col>
                      </Row>
                      <Row style={{ marginTop: 25 }}>
                        <Col
                          span={8}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <img width={20} src={`/icon/bed.png`} />
                          <span>{hom.bedroom} Br</span>
                        </Col>
                        <Col
                          span={8}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <img width={20} src={`/icon/water.png`} />
                          <span style={{ marginLeft: "10px" }}>{hom.bathroom} Ba</span>
                        </Col>
                        <Col
                          span={8}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <img width={20} src={`/icon/square-Medical.png`} />
                          <span>{hom.acreage} Sq.Ft</span>
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
                          <h2>${hom.price}/{hom.unit}</h2>
                        </Col>
                        <Col
                          span={12}
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                        <Link
                          href={
                            window.location.origin +
                            "/product/" +
                            hom.id
                          }
                          title=""
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
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
        ))}
      </Carousel>
      </div>

    </div>
  </div>
);
                          }

export default OurApartments;
