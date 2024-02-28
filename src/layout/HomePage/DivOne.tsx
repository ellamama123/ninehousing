import React from "react";
import { Col, Divider, Row } from "antd";
import useTrans from '../useTrans'

const style: React.CSSProperties = {
  background: "#000000",
  padding: "20px 30px",
  color: "white",
  borderRadius: "10px",
};

const DivOne: React.FC = () => {
  const trans = useTrans()

  return (
  <div className="div-one">
    <div className="container">
      <Row gutter={24}>
        <Col className="gutter-row" lg={8} span={24}>
          <div style={style}>
            <p className="div-one-number"> +30 </p>
            <p className="div-one-description">
              { trans.home.apartment }
            </p>
          </div>
        </Col>
        <Col className="gutter-row" lg={8} span={24}>
          <div style={style}>
            <p className="div-one-number"> +2000 </p>
            <p className="div-one-description">
              {" "}
              { trans.home.apartment_viewed }
              {" "}
            </p>
          </div>
        </Col>
        <Col className="gutter-row" lg={8} span={24}>
          <div style={style}>
            <p className="div-one-number"> +30 </p>
            <p className="div-one-description">
              {" "}
              { trans.home.booked }{" "}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);
}

export default DivOne;
