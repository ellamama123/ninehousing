import React from "react";
import { Carousel, Image, Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const MainCarousel: React.FC = (slide: any) => {
  const onChange = (currentSlide: number) => {
    console.log(slide);
  };

  return (
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
        <div className="slide-image-wrap">
          <Image
            className="slide-image"
            src="/image/slide-1.png"
            alt="Logo"
            preview={false}
          />
          <p className="slide-text">Serviced Apartment</p>
        </div>
      </div>
      <div>
        <div className="slide-image-wrap">
          <Image
            className="slide-image"
            src="/image/slide-1.png"
            alt="Logo"
            preview={false}
          />
          <p className="slide-text">Serviced Apartment</p>
        </div>
      </div>
      <div>
        <div className="slide-image-wrap">
          <Image
            className="slide-image"
            src="/image/slide-1.png"
            alt="Logo"
            preview={false}
          />
          <p className="slide-text">Serviced Apartment</p>
        </div>
      </div>
      <div>
        <div className="slide-image-wrap">
          <Image
            className="slide-image"
            src="/image/slide-1.png"
            alt="Logo"
            preview={false}
          />
          <p className="slide-text">Serviced Apartment</p>
        </div>
      </div>
    </Carousel>
  );
};

export default MainCarousel;
