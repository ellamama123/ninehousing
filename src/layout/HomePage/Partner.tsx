import React from "react";
import { Carousel, Image, Button} from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import useTrans from '../useTrans'

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const onChange = (currentSlide: number) => {
  console.log(currentSlide);
};

const Partner: React.FC = () => {
  const trans = useTrans()

  return (
  <div className="container" style={{marginBottom: '80px'}}>
    <p className="partner-title">{trans.home.partner}</p>
    <div className="partner-wrap">
      <Carousel
        afterChange={onChange}
        arrows
        slidesToShow={5}
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
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
        ]}
        style={{ margin: '0 -8px' }}
      >
        <div>
          <div className="slide-image-wrap">
            <Image
              className="slide-image"
              src="/image/partner.png"
              alt="Logo"
              preview={false}
            />
          </div>
        </div>
        <div>
          <div className="slide-image-wrap">
            <Image
              className="slide-image"
              src="/image/partner.png"
              alt="Logo"
              preview={false}
            />
          </div>
        </div>{" "}
        <div>
          <div className="slide-image-wrap">
            <Image
              className="slide-image"
              src="/image/partner.png"
              alt="Logo"
              preview={false}
            />
          </div>
        </div>{" "}
        <div>
          <div className="slide-image-wrap">
            <Image
              className="slide-image"
              src="/image/partner.png"
              alt="Logo"
              preview={false}
            />
          </div>
        </div>{" "}
        <div>
          <div className="slide-image-wrap">
            <Image
              className="slide-image"
              src="/image/partner.png"
              alt="Logo"
              preview={false}
            />
          </div>
        </div>{" "}
        <div>
          <div className="slide-image-wrap">
            <Image
              className="slide-image"
              src="/image/partner.png"
              alt="Logo"
              preview={false}
            />
          </div>
        </div>{" "}
        <div>
          <div className="slide-image-wrap">
            <Image
              className="slide-image"
              src="/image/partner.png"
              alt="Logo"
              preview={false}
            />
          </div>
        </div>{" "}
        <div>
          <div className="slide-image-wrap">
            <Image
              className="slide-image"
              src="/image/partner.png"
              alt="Logo"
              preview={false}
            />
          </div>
        </div>{" "}
        <div>
          <div className="slide-image-wrap">
            <Image
              className="slide-image"
              src="/image/partner.png"
              alt="Logo"
              preview={false}
            />
          </div>
        </div>{" "}
        <div>
          <div className="slide-image-wrap">
            <Image
              className="slide-image"
              src="/image/partner.png"
              alt="Logo"
              preview={false}
            />
          </div>
        </div>{" "}
        <div>
          <div className="slide-image-wrap">
            <Image
              className="slide-image"
              src="/image/partner.png"
              alt="Logo"
              preview={false}
            />
          </div>
        </div>
      </Carousel>
    </div>
  </div>
);
}

export default Partner;
