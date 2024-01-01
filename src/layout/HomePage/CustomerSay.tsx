import React from "react";
import { Carousel, Row, Col, Image, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CustomerSay: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className="customer">
      <div className="container">
        <p className="customer-title">What customers say about us</p>
        <div className="container-customer">
          <Carousel
            afterChange={onChange}
            arrows
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
          >
            <div>
              <Row>
                <Col lg={12} span={24} className="order-mobile-2" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'white', paddingRight: '30px'}}>
                  <p className="customer-tag">“</p>
                  <div className="customer-text">
                    <p className="customer-desc">
                      Lorem ipsum dolor sit amet consectetur. Lacinia pulvinar
                      morbi elit nulla tortor vitae et laoreet. Urna risus elit
                      enim magna tincidunt nullam cum blandit bibendum. Ornare
                      orci consequat elementum tincidunt. Dolor cursus faucibus.
                    </p>
                    <p className="customer-name">Nam Toong</p>
                  </div>
                </Col>
                <Col lg={12} span={24} className="mobile-order">
                  <Image
                    className="customer-image"
                    src="/image/customer.png"
                    alt="Customer"
                    preview={false}
                  />
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col lg={12} span={24} className="order-mobile-2" >
                  <p className="customer-tag">“</p>
                  <p className="customer-desc">
                    Lorem ipsum dolor sit amet consectetur. Lacinia pulvinar
                    morbi elit nulla tortor vitae et laoreet. Urna risus elit
                    enim magna tincidunt nullam cum blandit bibendum. Ornare
                    orci consequat elementum tincidunt. Dolor cursus faucibus.
                  </p>
                  <p className="customer-name">Nam Toong</p>
                </Col>
                <Col lg={12} span={24} className="mobile-order">
                  <Image
                    className="customer-image"
                    src="/image/customer.png"
                    alt="Customer"
                    preview={false}
                  />
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col lg={12} span={24} className="order-mobile-2">
                  <p className="customer-tag">“</p>
                  <p className="customer-desc">
                    Lorem ipsum dolor sit amet consectetur. Lacinia pulvinar
                    morbi elit nulla tortor vitae et laoreet. Urna risus elit
                    enim magna tincidunt nullam cum blandit bibendum. Ornare
                    orci consequat elementum tincidunt. Dolor cursus faucibus.
                  </p>
                  <p className="customer-name">Nam Toong</p>
                </Col>
                <Col lg={12} span={24} className="mobile-order">
                  <Image
                    className="customer-image"
                    src="/image/customer.png"
                    alt="Customer"
                    preview={false}
                  />
                </Col>
              </Row>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
