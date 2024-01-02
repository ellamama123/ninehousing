import React from "react";
import { Col, Button, Row, Image } from "antd";
import Link from "next/link";

const Activity: React.FC = () => (
  <div className="activity">
    <div className="container">
      <p className="activity-title">Activity</p>
      <Row>
        {[0, 1, 2].map((index) => (
          <Col lg={8} span={24} className="post-wrap" key={index}>
            <div>
              <Image width={"100%"} height={"75%"} alt="Image" src="/image/product-1.png" />
            </div>
            <div style={{}}>
              <div>
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "white",
                    border: "1px solid black",
                    borderTop: "none",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#DEB25F",
                    }}
                  >
                    ABC
                  </p>
                  <Row style={{ marginTop: "20px" }}>
                    <Col span={12}>
                      <p
                        style={{
                          fontSize: "16px",
                          color: "gray",
                        }}
                      >
                        06 Mar 2017 03:55 AP
                      </p>
                    </Col>
                    <Col span={12}>
                      <div style={{float: "right", cursor: "pointer"}}>
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="20" cy="20" r="20" fill="#DEB25F" />
                          <path
                            d="M17 14L23 20L17 26"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default Activity;
