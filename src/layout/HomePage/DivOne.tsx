import React from "react";
import { Col, Divider, Row } from "antd";

const style: React.CSSProperties = {
  background: "#000000",
  padding: "20px 30px",
  color: "white",
  borderRadius: "10px",
};

const DivOne: React.FC = () => (
  <div className="div-one">
    <div className="container">
      <Row gutter={24}>
        <Col className="gutter-row" lg={8} span={24}>
          <div style={style}>
            <p className="div-one-number"> +2000 </p>
            <p className="div-one-description">
              {" "}
              Lorem ipsum dolor sit amet consectetur. Vulputate ac morbi nibh
              donec malesuada. Et parturient amet congue tortor nibh.{" "}
            </p>
          </div>
        </Col>
        <Col className="gutter-row" lg={8} span={24}>
          <div style={style}>
            <p className="div-one-number"> +2000 </p>
            <p className="div-one-description">
              {" "}
              Lorem ipsum dolor sit amet consectetur. Vulputate ac morbi nibh
              donec malesuada. Et parturient amet congue tortor nibh.{" "}
            </p>
          </div>
        </Col>
        <Col className="gutter-row" lg={8} span={24}>
          <div style={style}>
            <p className="div-one-number"> +2000 </p>
            <p className="div-one-description">
              {" "}
              Lorem ipsum dolor sit amet consectetur. Vulputate ac morbi nibh
              donec malesuada. Et parturient amet congue tortor nibh.{" "}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default DivOne;
