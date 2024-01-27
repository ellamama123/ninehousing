// Footer.js
import React from "react";
import { Menu, Typography, Button, Drawer, Row, Col, Image } from "antd";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Row>
          <Col lg={16} span={24}>
            <div>
              <Row>
                <Col lg={3} span={6}>
                  <Image src="/image/logo.png" alt="Logo" preview={false} />
                </Col>
                <Col
                  lg={21} span={18}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "10px"
                  }}
                >
                  <p style={{ fontSize: "24px", fontWeight: "600" }}>
                    Nine Housing
                  </p>
                </Col>
              </Row>
              <div style={{ marginTop: "50px" }}>
                <Row>
                  <Col lg={16} span={24}>
                    <Row style={{flexWrap: 'nowrap'}}>
                      <Col>
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 8H13M19 4H1M16 12H13M11 15C10.6218 13.2883 8.97467 12 7 12C5.03262 12 3.39034 13.2788 3.00424 14.9811M7 8H7.01M3.00424 14.9811C3.31776 15 3.70396 15 4.2 15H15.8C16.9201 15 17.4802 15 17.908 14.782C18.2843 14.5903 18.5903 14.2843 18.782 13.908C19 13.4802 19 12.9201 19 11.8V4.2C19 3.0799 19 2.51984 18.782 2.09202C18.5903 1.71569 18.2843 1.40973 17.908 1.21799C17.4802 1 16.9201 1 15.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2V11.8C1 12.9201 1 13.4802 1.21799 13.908C1.40973 14.2843 1.71569 14.5903 2.09202 14.782C2.33038 14.9035 2.60979 14.9572 3.00424 14.9811ZM8 8C8 8.55228 7.55228 9 7 9C6.44772 9 6 8.55228 6 8C6 7.44772 6.44772 7 7 7C7.55228 7 8 7.44772 8 8Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Col>
                      <Col style={{ marginLeft: "10px" }}>
                        <span>
                          No.11 Ton That Thiep Str., Ba Dinh Dist, Ha Noi
                        </span>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "25px" }}>
                      <Col>
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 4L6.44992 7.63328C7.73295 8.48863 8.37446 8.91631 9.06785 9.08247C9.68061 9.22931 10.3194 9.22931 10.9322 9.08247C11.6255 8.91631 12.2671 8.48863 13.5501 7.63328L19 4M4.2 15H15.8C16.9201 15 17.4802 15 17.908 14.782C18.2843 14.5903 18.5903 14.2843 18.782 13.908C19 13.4802 19 12.9201 19 11.8V4.2C19 3.0799 19 2.51984 18.782 2.09202C18.5903 1.71569 18.2843 1.40973 17.908 1.21799C17.4802 1 16.9201 1 15.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2V11.8C1 12.9201 1 13.4802 1.21799 13.908C1.40973 14.2843 1.71569 14.5903 2.09202 14.782C2.51984 15 3.07989 15 4.2 15Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Col>
                      <Col style={{ marginLeft: "10px" }}>
                        <span>Namtoong@gmail.com</span>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "25px" }}>
                      <Col>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 3.5C19 12.0604 12.0604 19 3.5 19C3.11378 19 2.73086 18.9859 2.35172 18.9581C1.91662 18.9262 1.69906 18.9103 1.50103 18.7963C1.33701 18.7019 1.18146 18.5345 1.09925 18.364C1 18.1582 1 17.9181 1 17.438V14.6207C1 14.2169 1 14.015 1.06645 13.842C1.12515 13.6891 1.22049 13.553 1.3441 13.4456C1.48403 13.324 1.67376 13.255 2.05321 13.117L5.26005 11.9509C5.70153 11.7904 5.92227 11.7101 6.1317 11.7237C6.31637 11.7357 6.49408 11.7988 6.64506 11.9058C6.81628 12.0271 6.93713 12.2285 7.17882 12.6314L8 14C10.6499 12.7999 12.7981 10.6489 14 8L12.6314 7.17882C12.2285 6.93713 12.0271 6.81628 11.9058 6.64506C11.7988 6.49408 11.7357 6.31637 11.7237 6.1317C11.7101 5.92227 11.7904 5.70153 11.9509 5.26005L11.9509 5.26005L13.117 2.05321C13.255 1.67376 13.324 1.48403 13.4456 1.3441C13.553 1.22049 13.6891 1.12515 13.842 1.06645C14.015 1 14.2169 1 14.6207 1H17.438C17.9181 1 18.1582 1 18.364 1.09925C18.5345 1.18146 18.7019 1.33701 18.7963 1.50103C18.9103 1.69907 18.9262 1.91662 18.9581 2.35173C18.9859 2.73086 19 3.11378 19 3.5Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Col>
                      <Col style={{ marginLeft: "10px" }}>
                        <span>0918374230</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={8} span={24} className="footer-navigate">
                    <Col span={24}>
                      <div>
                        <p>
                          <Link href="/product"> Our Product </Link>
                        </p>
                        <p style={{ marginTop: "15px" }}>
                          {" "}
                          <Link href="/about-us"> About Us </Link>
                        </p>
                        <p style={{ marginTop: "15px" }}>
                          {" "}
                          <Link href="/post"> Blog </Link>
                        </p>
                      </div>
                    </Col>
                  </Col>
                </Row>
              </div>
              <div style={{ marginTop: "30px" }}>
                <iframe src="https://www.google.com/maps/d/u/3/embed?mid=1YT1gyB8JWMM23tRdHdIHrz3AkBl99Ss&ehbc=2E312F" width="75%" height="300px"></iframe>
              </div>
            </div>
          </Col>

          {/* <Col lg={8} span={24}>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNINEHousing&tabs=timeline&width=200&height=200&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="200" height="200" style={{border: "none", overflow:"hidden"}} scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </Col> */}
        </Row>
      </div>
    </div>
  );
};

export default Footer;
