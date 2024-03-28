// @ts-nocheck

import React from "react";
import { Carousel, Row, Col, Image, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import useTrans from '../useTrans'
import { useEffect, useState } from "react";
import axios from "axios";

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
  const trans = useTrans()
  const [customer, setCustomer] = useState([]);


  useEffect(() => {
    axios.get("https://web-developing.site/api/customer-messages")
    .then((response: any) => {
      setCustomer(response.data.data)
    })

  }, []);

  return (
    <div className="customer">
      <div className="container">
        <p className="customer-title">{ trans.home.customer_say }</p>
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
            {
          customer?.map((data, index) => (
            <div key={index}>
              <Row>
                <Col lg={12} span={24} className="order-mobile-2" style={{display: 'flex', flexDirection: 'column', color: 'white', paddingRight: '30px'}}>
                  <p className="customer-tag">“</p>
                  <div className="customer-text">
                    <p className="customer-desc"dangerouslySetInnerHTML={{ __html: data?.message }} />
                    <p className="customer-name">{data.name}</p>
                  </div>
                </Col>
                <Col lg={12} span={24} className="mobile-order">
                  <Image
                    className="customer-image"
                    src={data.image}
                    alt="Customer"
                    preview={false}
                  />
                </Col>
              </Row>
            </div>
            )) 
          }

          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
