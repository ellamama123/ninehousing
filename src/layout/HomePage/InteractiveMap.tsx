import React from "react";
import { Col, Divider, Row, Image } from "antd";
import useTrans from '../useTrans'

const InteractiveMap: React.FC = () => {
  const trans = useTrans()

  return (
  <div className="interactive-map-wrap">
    <div className="container">
      <Row>
        <Col lg={12} span={24}>
          <iframe src="https://www.google.com/maps/d/u/3/embed?mid=1YT1gyB8JWMM23tRdHdIHrz3AkBl99Ss&ehbc=2E312F" width="100%" height="400px"></iframe>
        </Col>
        <Col lg={12} span={24} style={{paddingLeft: '10px'}}>
          <p className="wcu-title">{ trans.home.map }</p>
          <p>The apartment buildings of XX</p>

          <Row className="wcu-content">
            <Col lg={2} span={4}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#DEB25F" />{" "}
                <path
                  d="M12.5 16.5L14.0089 18.0089C14.3526 18.3526 14.5245 18.5245 14.7198 18.5822C14.8914 18.6328 15.0749 18.6245 15.2412 18.5585C15.4305 18.4834 15.5861 18.2967 15.8973 17.9232L20 13M20.3287 8.75855C21.0676 8.77963 21.8001 9.07212 22.364 9.636C22.9278 10.1999 23.2203 10.9324 23.2414 11.6712C23.2623 12.4023 23.2727 12.7679 23.2942 12.853C23.3401 13.0351 23.2867 12.9063 23.383 13.0675C23.428 13.1429 23.6792 13.4088 24.1814 13.9405C24.6889 14.4778 25 15.2026 25 16C25 16.7974 24.6889 17.5222 24.1814 18.0595C23.6792 18.5912 23.428 18.8571 23.383 18.9325C23.2867 19.0937 23.3401 18.9649 23.2942 19.147C23.2727 19.2321 23.2623 19.5977 23.2414 20.3288C23.2203 21.0676 22.9278 21.8001 22.364 22.364C21.8001 22.9279 21.0676 23.2204 20.3287 23.2414C19.5976 23.2623 19.2321 23.2727 19.147 23.2942C18.9649 23.3401 19.0937 23.2868 18.9325 23.3831C18.8571 23.4281 18.5912 23.6792 18.0595 24.1814C17.5222 24.6889 16.7974 25 16 25C15.2026 25 14.4778 24.6889 13.9405 24.1814C13.4087 23.6792 13.1429 23.4281 13.0675 23.3831C12.9063 23.2868 13.0351 23.3401 12.853 23.2942C12.7679 23.2727 12.4022 23.2623 11.6712 23.2414C10.9324 23.2204 10.1999 22.9279 9.63597 22.364C9.07207 21.8001 8.77959 21.0676 8.75852 20.3287C8.73766 19.5976 8.72724 19.2321 8.70578 19.147C8.65985 18.9649 8.71322 19.0937 8.61691 18.9324C8.57192 18.8571 8.32082 18.5912 7.81862 18.0595C7.31113 17.5222 7 16.7974 7 16C7 15.2026 7.31113 14.4778 7.81862 13.9405C8.32082 13.4088 8.57192 13.1429 8.61691 13.0676C8.71322 12.9063 8.65985 13.0351 8.70578 12.853C8.72724 12.7679 8.73766 12.4023 8.75852 11.6713C8.77959 10.9324 9.07207 10.1999 9.63597 9.636C10.1999 9.07211 10.9324 8.77963 11.6712 8.75855C12.4023 8.73769 12.7679 8.72727 12.853 8.70581C13.0351 8.65988 12.9063 8.71325 13.0675 8.61694C13.1429 8.57195 13.4088 8.32082 13.9405 7.81863C14.4778 7.31113 15.2026 7 16 7C16.7974 7 17.5222 7.31114 18.0595 7.81864C18.5913 8.32084 18.8571 8.57194 18.9325 8.61693C19.0937 8.71324 18.9649 8.65988 19.147 8.70581C19.2321 8.72726 19.5976 8.73769 20.3287 8.75855Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinecap="round"
                />
              </svg>
            </Col>
            <Col lg={22} span={20}>
              <span>
                20 years in the serviced rental housing market with apartments
                that we design, build, and manage internally.
              </span>
            </Col>
          </Row>
          <Row className="wcu-content">
            <Col lg={2} span={4}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#DEB25F" />{" "}
                <path
                  d="M12.5 16.5L14.0089 18.0089C14.3526 18.3526 14.5245 18.5245 14.7198 18.5822C14.8914 18.6328 15.0749 18.6245 15.2412 18.5585C15.4305 18.4834 15.5861 18.2967 15.8973 17.9232L20 13M20.3287 8.75855C21.0676 8.77963 21.8001 9.07212 22.364 9.636C22.9278 10.1999 23.2203 10.9324 23.2414 11.6712C23.2623 12.4023 23.2727 12.7679 23.2942 12.853C23.3401 13.0351 23.2867 12.9063 23.383 13.0675C23.428 13.1429 23.6792 13.4088 24.1814 13.9405C24.6889 14.4778 25 15.2026 25 16C25 16.7974 24.6889 17.5222 24.1814 18.0595C23.6792 18.5912 23.428 18.8571 23.383 18.9325C23.2867 19.0937 23.3401 18.9649 23.2942 19.147C23.2727 19.2321 23.2623 19.5977 23.2414 20.3288C23.2203 21.0676 22.9278 21.8001 22.364 22.364C21.8001 22.9279 21.0676 23.2204 20.3287 23.2414C19.5976 23.2623 19.2321 23.2727 19.147 23.2942C18.9649 23.3401 19.0937 23.2868 18.9325 23.3831C18.8571 23.4281 18.5912 23.6792 18.0595 24.1814C17.5222 24.6889 16.7974 25 16 25C15.2026 25 14.4778 24.6889 13.9405 24.1814C13.4087 23.6792 13.1429 23.4281 13.0675 23.3831C12.9063 23.2868 13.0351 23.3401 12.853 23.2942C12.7679 23.2727 12.4022 23.2623 11.6712 23.2414C10.9324 23.2204 10.1999 22.9279 9.63597 22.364C9.07207 21.8001 8.77959 21.0676 8.75852 20.3287C8.73766 19.5976 8.72724 19.2321 8.70578 19.147C8.65985 18.9649 8.71322 19.0937 8.61691 18.9324C8.57192 18.8571 8.32082 18.5912 7.81862 18.0595C7.31113 17.5222 7 16.7974 7 16C7 15.2026 7.31113 14.4778 7.81862 13.9405C8.32082 13.4088 8.57192 13.1429 8.61691 13.0676C8.71322 12.9063 8.65985 13.0351 8.70578 12.853C8.72724 12.7679 8.73766 12.4023 8.75852 11.6713C8.77959 10.9324 9.07207 10.1999 9.63597 9.636C10.1999 9.07211 10.9324 8.77963 11.6712 8.75855C12.4023 8.73769 12.7679 8.72727 12.853 8.70581C13.0351 8.65988 12.9063 8.71325 13.0675 8.61694C13.1429 8.57195 13.4088 8.32082 13.9405 7.81863C14.4778 7.31113 15.2026 7 16 7C16.7974 7 17.5222 7.31114 18.0595 7.81864C18.5913 8.32084 18.8571 8.57194 18.9325 8.61693C19.0937 8.71324 18.9649 8.65988 19.147 8.70581C19.2321 8.72726 19.5976 8.73769 20.3287 8.75855Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinecap="round"
                />
              </svg>
            </Col>
            <Col lg={22} span={20}>
              <span>
                20 years in the serviced rental housing market with apartments
                that we design, build, and manage internally.
              </span>
            </Col>
          </Row>
          <Row className="wcu-content">
            <Col lg={2} span={4}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#DEB25F" />{" "}
                <path
                  d="M12.5 16.5L14.0089 18.0089C14.3526 18.3526 14.5245 18.5245 14.7198 18.5822C14.8914 18.6328 15.0749 18.6245 15.2412 18.5585C15.4305 18.4834 15.5861 18.2967 15.8973 17.9232L20 13M20.3287 8.75855C21.0676 8.77963 21.8001 9.07212 22.364 9.636C22.9278 10.1999 23.2203 10.9324 23.2414 11.6712C23.2623 12.4023 23.2727 12.7679 23.2942 12.853C23.3401 13.0351 23.2867 12.9063 23.383 13.0675C23.428 13.1429 23.6792 13.4088 24.1814 13.9405C24.6889 14.4778 25 15.2026 25 16C25 16.7974 24.6889 17.5222 24.1814 18.0595C23.6792 18.5912 23.428 18.8571 23.383 18.9325C23.2867 19.0937 23.3401 18.9649 23.2942 19.147C23.2727 19.2321 23.2623 19.5977 23.2414 20.3288C23.2203 21.0676 22.9278 21.8001 22.364 22.364C21.8001 22.9279 21.0676 23.2204 20.3287 23.2414C19.5976 23.2623 19.2321 23.2727 19.147 23.2942C18.9649 23.3401 19.0937 23.2868 18.9325 23.3831C18.8571 23.4281 18.5912 23.6792 18.0595 24.1814C17.5222 24.6889 16.7974 25 16 25C15.2026 25 14.4778 24.6889 13.9405 24.1814C13.4087 23.6792 13.1429 23.4281 13.0675 23.3831C12.9063 23.2868 13.0351 23.3401 12.853 23.2942C12.7679 23.2727 12.4022 23.2623 11.6712 23.2414C10.9324 23.2204 10.1999 22.9279 9.63597 22.364C9.07207 21.8001 8.77959 21.0676 8.75852 20.3287C8.73766 19.5976 8.72724 19.2321 8.70578 19.147C8.65985 18.9649 8.71322 19.0937 8.61691 18.9324C8.57192 18.8571 8.32082 18.5912 7.81862 18.0595C7.31113 17.5222 7 16.7974 7 16C7 15.2026 7.31113 14.4778 7.81862 13.9405C8.32082 13.4088 8.57192 13.1429 8.61691 13.0676C8.71322 12.9063 8.65985 13.0351 8.70578 12.853C8.72724 12.7679 8.73766 12.4023 8.75852 11.6713C8.77959 10.9324 9.07207 10.1999 9.63597 9.636C10.1999 9.07211 10.9324 8.77963 11.6712 8.75855C12.4023 8.73769 12.7679 8.72727 12.853 8.70581C13.0351 8.65988 12.9063 8.71325 13.0675 8.61694C13.1429 8.57195 13.4088 8.32082 13.9405 7.81863C14.4778 7.31113 15.2026 7 16 7C16.7974 7 17.5222 7.31114 18.0595 7.81864C18.5913 8.32084 18.8571 8.57194 18.9325 8.61693C19.0937 8.71324 18.9649 8.65988 19.147 8.70581C19.2321 8.72726 19.5976 8.73769 20.3287 8.75855Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinecap="round"
                />
              </svg>
            </Col>
            <Col lg={22} span={20}>
              <span>
                20 years in the serviced rental housing market with apartments
                that we design, build, and manage internally.
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </div>
);
}

export default InteractiveMap;
